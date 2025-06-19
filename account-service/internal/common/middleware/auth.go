package middleware

import (
	"fmt"
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
)

type TokenService struct {
	secretKey string
	tokenLifespan int
}

func NewTokenService(secretKey string, tokenLifespan int) *TokenService {
	return &TokenService{
		secretKey: secretKey,
		tokenLifespan: tokenLifespan,
	}
}

func (s *TokenService) GenerateToken(userId uint) (string, error) {
	claims := jwt.MapClaims{}
	claims["authorized"] = true
	claims["user_id"] = userId
	claims["exp"] = time.Now().Add(time.Hour * time.Duration(s.tokenLifespan)).Unix()
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	return token.SignedString([]byte(s.secretKey))
}

func (s *TokenService) AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		tokenString := s.extractToken(c)
		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
			}
			return []byte(s.secretKey), nil
		})

		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			c.Abort()
			return
		}

		claims, ok := token.Claims.(jwt.MapClaims)
		if !ok || !token.Valid {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			c.Abort()
			return
		}

		userID := uint(claims["user_id"].(float64))
		c.Set("userID", userID)
		c.Next()
	}
}

func (s *TokenService) extractToken(c *gin.Context) string {
	bearer := c.GetHeader("Authorization")
	if len(strings.Split(bearer, " ")) == 2 {
		return strings.Split(bearer, " ")[1]
	}
	return ""
}
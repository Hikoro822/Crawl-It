package handlers

import (
	"fmt"
	"math/rand"
	"net/http"
	"strings"
	"time"

	"account-system/config"
	"account-system/internal/email"
	"account-system/models"
	"account-system/internal/common/middleware"
	"account-system/internal/common/utils"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type AuthHandler struct {
	DB           *gorm.DB
	Config       config.Config
	tokenService *middleware.TokenService
}

func NewAuthHandler(db *gorm.DB, cfg config.Config, tokenService *middleware.TokenService) *AuthHandler {
	return &AuthHandler{
		DB:           db,
		Config:       cfg,
		tokenService: tokenService,
	}
}

func (h *AuthHandler) Register(c *gin.Context) {
	var input models.RegisterRequest
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Некорректные данные"})
        return
	}

	var existingUser models.User
	if err := h.DB.Where("email = ?", input.Email).First(&existingUser).Error; err == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Пользователь с таким email уже существует"})
		return
	}

	hashedPassword, err := utils.HashPassword(input.Password)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Не удалось зашифровать пароль"})
		return
	}

	user := models.User{
		Username: input.Username,
		Email:    input.Email,
		Password: hashedPassword,
	}

	if err := h.DB.Create(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Не удалось создать пользователя"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Регистрация успешно завершена"})
}

func (h *AuthHandler) Login(c *gin.Context) {
	var input models.LoginRequest
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Некорректные данные"})
        return
	}

	var user models.User
	if err := h.DB.Where("email = ?", input.Email).First(&user).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Неверный email или пароль"})
		return
	}

	if !utils.CheckPasswordHash(input.Password, user.Password) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Неверный email или пароль"})
		return
	}

	token, err := h.tokenService.GenerateToken(user.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Не удалось сгенерировать токен"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token})
}

func (h *AuthHandler) GetProfile(c *gin.Context) {
	userID, exists := c.Get("userID")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Необходима авторизация"})
		return
	}

	var user models.User
	if err := h.DB.Select("id, username, email, avatar, created_at, updated_at").Where("id = ?", userID).First(&user).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Пользователь не найден"})
		return
	}

	c.JSON(http.StatusOK, user)
}

func (h *AuthHandler) UploadAvatar(c *gin.Context) {
	userID, exists := c.Get("userID")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Необходима авторизация"})
		return
	}

	file, err := c.FormFile("avatar")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Файл не загружен"})
		return
	}

	if !strings.HasPrefix(file.Header.Get("Content-Type"), "image/") {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Файл должен быть изображением"})
		return
	}

	filename := fmt.Sprintf("%v_%s", userID, file.Filename)
	filepath := fmt.Sprintf("uploads/avatars/%s", filename)

	if err := c.SaveUploadedFile(file, filepath); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Не удалось сохранить файл"})
		return
	}
	
		var user models.User
		if err := h.DB.Select("*").First(&user, userID).Error; err != nil {
			c.JSON(http.StatusNotFound, gin.H{"error": "Пользователь не найден"})
			return
		}
	
		avatarURL := fmt.Sprintf("http://localhost:8080/uploads/avatars/%s", filename)
		
		user.Avatar = avatarURL
		if err := h.DB.Save(&user).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Не удалось обновить аватар"})
			return
		}
	
		c.JSON(http.StatusOK, gin.H{"avatar": avatarURL})
	}

	func (h *AuthHandler) ForgotPassword(c *gin.Context) {
		var input struct {
			Email string `json:"email" binding:"required,email"`
		}
	
		if err := c.ShouldBindJSON(&input); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Некорректный email"})
			return
		}
	
		fmt.Println("Запрос сброса пароля для:", input.Email)
	
		var user models.User
		if err := h.DB.Where("email = ?", input.Email).First(&user).Error; err != nil {
			fmt.Println("Пользователь не найден:", input.Email) 
			c.JSON(http.StatusOK, gin.H{"message": "Если указанный email зарегистрирован, на него отправлен код для сброса пароля"})
			return
		}
	
		fmt.Println("Пользователь найден:", user.Email)
	
		code := fmt.Sprintf("%06d", rand.Intn(1000000))
		fmt.Println("Сгенерирован код:", code)
	
		user.ResetCode = code
		user.ResetCodeExpiry = time.Now().Add(15 * time.Minute)
	
		if err := h.DB.Save(&user).Error; err != nil {
			fmt.Println("Ошибка сохранения кода:", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Не удалось сохранить код сброса"})
			return
		}
	
		fmt.Println("Код сохранен в БД") 
	
		emailService := email.NewEmailService(h.Config)
		fmt.Println("SMTP настройки:", h.Config.SMTPHost, h.Config.SMTPPort, h.Config.SMTPUser) 



		
	fmt.Println("Перед отправкой email. Код:", code)
	fmt.Println("SMTP настройки детально:", 
 		 "\nHost:", h.Config.SMTPHost, 
  	 	 "\nPort:", h.Config.SMTPPort, 
   		 "\nUser:", h.Config.SMTPUser, 
   		 "\nPassword:", h.Config.SMTPPassword, 
   		 "\nFrom:", h.Config.SMTPFrom)

		err := emailService.SendPasswordResetEmail(user.Email, code)
		if err != nil {
			fmt.Printf("Ошибка отправки email: %v\n", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Не удалось отправить код сброса: " + err.Error()})
			return
		}
		
		fmt.Println("Email отправлен успешно")
		c.JSON(http.StatusOK, gin.H{"message": "Код для сброса пароля отправлен на указанный email"})
	}
	
	func (h *AuthHandler) ResetPassword(c *gin.Context) {
		var input struct {
			Email    string `json:"email" binding:"required,email"`
			Code     string `json:"code" binding:"required"`
			Password string `json:"password" binding:"required,min=6"`
		}
	
		if err := c.ShouldBindJSON(&input); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Некорректные данные"})
			return
		}
	
		var user models.User
		if err := h.DB.Where("email = ?", input.Email).First(&user).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Неверный email или код"})
			return
		}
	
		if user.ResetCode != input.Code || time.Now().After(user.ResetCodeExpiry) {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Неверный код или истек срок его действия"})
			return
		}
	
		hashedPassword, err := utils.HashPassword(input.Password)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Не удалось зашифровать пароль"})
			return
		}
	
		user.Password = hashedPassword
		user.ResetCode = ""
	
		if err := h.DB.Save(&user).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Не удалось обновить пароль"})
			return
		}
	
		c.JSON(http.StatusOK, gin.H{"message": "Пароль успешно изменен"})
	}
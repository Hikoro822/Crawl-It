package main

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"account-system/config"
	"account-system/handlers"
	"account-system/internal/user"
	"account-system/internal/common/middleware"
	"account-system/models"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func main() {
	if err := godotenv.Load(".env"); err != nil {
		log.Println("No .env file found")
	}	
    
	cfg := config.LoadConfig()

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		cfg.DBUser, cfg.DBPassword, cfg.DBHost, cfg.DBPort, cfg.DBName)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database: ", err)
	}

	db.AutoMigrate(&models.User{})

	os.MkdirAll(cfg.AvatarDir, 0755)


	tokenService := middleware.NewTokenService(cfg.JWTSecret, 24)

	authHandler := handlers.NewAuthHandler(db, cfg, tokenService)
	userRepo := user.NewMySQLRepository(db)
	userService := user.NewUserService(userRepo, cfg.AvatarDir, cfg.BaseURL)
	userHandler := user.NewHandler(userService)

	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	r.Static("/uploads", "./uploads")

	r.POST("/register", authHandler.Register)
	r.POST("/login", authHandler.Login)
	r.POST("/forgot-password", authHandler.ForgotPassword)
	r.POST("/reset-password", authHandler.ResetPassword)

	protected := r.Group("/api")
	protected.Use(tokenService.AuthMiddleware())
	protected.GET("/profile", authHandler.GetProfile)
	protected.POST("/upload-avatar", userHandler.UploadAvatar)

	r.Run(":" + cfg.Port)
	r.SetTrustedProxies([]string{"127.0.0.1"})
}
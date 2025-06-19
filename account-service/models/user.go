package models

import (
	"time"
)

type User struct {
	ID              uint      `json:"id" gorm:"primaryKey"`
	Username        string    `json:"username" gorm:"unique"`
	Email           string    `json:"email" gorm:"unique"`
	Password        string    `json:"password" gorm:"not null"`
	Avatar          string    `json:"avatar"`  
	ResetCode       string    `json:"-" gorm:"default:null"`
	ResetCodeExpiry time.Time `json:"-" gorm:"default:null"`
	CreatedAt       time.Time `json:"created_at"`
	UpdatedAt       time.Time `json:"updated_at"`
}

type UserResponse struct {
	ID        uint      `json:"id"`
	Username  string    `json:"username"`
	Email     string    `json:"email"`
	Avatar    string    `json:"avatar"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type UserModel struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	Username  string    `json:"username" gorm:"unique"`
	Email     string    `json:"email" gorm:"unique"`
	Password  string    `json:"password" gorm:"not null"`
	Avatar    string    `json:"avatar"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type LoginRequest struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required"`
}

type RegisterRequest struct {
	Username string `json:"username" binding:"required"`
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=6"`
}

type UpdateAvatarRequest struct {
	Avatar string `json:"avatar" binding:"required"`
}


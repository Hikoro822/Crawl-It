package auth

import (
	"account-system/internal/common/utils"
	"account-system/internal/user"
	"errors"
)

type Service interface {
	Register(username, email, password string) error
	Login(email, password string) (string, error)
	GetProfile(userID uint) (user.User, error)
}

type AuthService struct {
	userRepo user.Repository
	tokenGen TokenGenerator
}

type TokenGenerator interface {
	GenerateToken(userID uint) (string, error)
}

func NewAuthService(userRepo user.Repository, tokenGen TokenGenerator) *AuthService {
	return &AuthService{
		userRepo: userRepo,
		tokenGen: tokenGen,
	}
}

func (s *AuthService) Register(username, email, password string) error {
	_, err := s.userRepo.FindByEmail(email)
	if err == nil {
		return errors.New("email already exists")
	}

	hashedPassword, err := utils.HashPassword(password)
	if err != nil {
		return err
	}

	newUser := user.User{
		Username: username,
		Email:    email,
		Password: hashedPassword,
	}

	return s.userRepo.Create(newUser)
}

func (s *AuthService) Login(email, password string) (string, error) {
	user, err := s.userRepo.FindByEmail(email)
	if err != nil {
		return "", errors.New("invalid email or password")
	}

	if !utils.CheckPasswordHash(password, user.Password) {
		return "", errors.New("invalid email or password")
	}

	return s.tokenGen.GenerateToken(user.ID)
}

func (s *AuthService) GetProfile(userID uint) (user.User, error) {
	return s.userRepo.FindByID(userID)
}
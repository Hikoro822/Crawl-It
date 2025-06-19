package user

import (
	"fmt"
	"mime/multipart"
	"os"
	"io"
	"path/filepath"
	"strings"
)

type Service interface {
	UpdateAvatar(userID uint, file *multipart.FileHeader) (string, error)
}

type UserService struct {
	userRepo Repository
	avatarDir string
	baseURL string
}

func NewUserService(userRepo Repository, avatarDir, baseURL string) *UserService {
	return &UserService{
		userRepo: userRepo,
		avatarDir: avatarDir,
		baseURL: baseURL,
	}
}

func (s *UserService) UpdateAvatar(userID uint, file *multipart.FileHeader) (string, error) {
    if !strings.HasPrefix(file.Header.Get("Content-Type"), "image/") {
        return "", fmt.Errorf("file must be an image")
    }

    filename := fmt.Sprintf("%d_%s", userID, file.Filename)
    filepath := filepath.Join(s.avatarDir, filename)

    dst, err := os.Create(filepath)
    if err != nil {
        return "", err
    }
    defer dst.Close()

    src, err := file.Open()
    if err != nil {
        return "", err
    }
    defer src.Close()

    if _, err = io.Copy(dst, src); err != nil {
        return "", err
    }

    user, err := s.userRepo.FindByID(userID)
    if err != nil {
        return "", err
    }

    avatarURL := fmt.Sprintf("%s/uploads/avatars/%s", s.baseURL, filename)
    user.Avatar = avatarURL

    err = s.userRepo.Update(user)
    if err != nil {
        return "", err
    }

    return avatarURL, nil
}
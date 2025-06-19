package user

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Handler struct {
	userService Service
}

func NewHandler(userService Service) *Handler {
	return &Handler{userService: userService}
}

func (h *Handler) UploadAvatar(c *gin.Context) {
	userID, exists := c.Get("userID")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	file, err := c.FormFile("avatar")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No file uploaded"})
		return
	}

	avatarURL, err := h.userService.UpdateAvatar(userID.(uint), file)
	if err != nil {
		statusCode := http.StatusInternalServerError
		if err.Error() == "file must be an image" {
			statusCode = http.StatusBadRequest
		}
		c.JSON(statusCode, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"avatar": avatarURL})
}
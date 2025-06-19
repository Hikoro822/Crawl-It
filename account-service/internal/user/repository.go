package user

import (
	"gorm.io/gorm"
)

type Repository interface {
	Create(user User) error
	FindByEmail(email string) (User, error)
	FindByID(id uint) (User, error)
	Update(user User) error
}

type MySQLRepository struct {
	DB *gorm.DB
}

func NewMySQLRepository(db *gorm.DB) *MySQLRepository {
	return &MySQLRepository{DB: db}
}

func (r *MySQLRepository) Create(user User) error {
	return r.DB.Create(&user).Error
}

func (r *MySQLRepository) FindByEmail(email string) (User, error) {
	var user User
	err := r.DB.Where("email = ?", email).First(&user).Error
	return user, err
}

func (r *MySQLRepository) FindByID(id uint) (User, error) {
    var user User
    err := r.DB.Where("id = ?", id).First(&user).Error
    return user, err
}

func (r *MySQLRepository) Update(user User) error {
    return r.DB.Model(&user).Select("username", "email", "avatar", "updated_at").Updates(user).Error
}
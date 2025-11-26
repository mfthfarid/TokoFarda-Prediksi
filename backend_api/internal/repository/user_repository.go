package repository

import (
	"github.com/mfthfarid/TokoFarda-Prediksi/backend_api/internal/config"
	"github.com/mfthfarid/TokoFarda-Prediksi/backend_api/internal/model"
)

type UserRepository struct{}

func (r *UserRepository) FindByEmail(email string) (*model.User, error) {
	var user model.User
	err := config.DB.Where("email = ?", email).First(&user).Error
	return &user, err
}

func (r *UserRepository) Create(user *model.User) error {
	return config.DB.Create(user).Error
}
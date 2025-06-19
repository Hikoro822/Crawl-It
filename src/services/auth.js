import axios from 'axios';

const API_URL = 'http://localhost:8080';

const errorTranslations = {
    'Invalid email or password': 'Неверный email или пароль',
    'Email already exists': 'Этот email уже зарегистрирован',
    'Username already exists': 'Это имя пользователя уже занято',
    'Invalid email format': 'Неверный формат email',
    'Password too short': 'Пароль слишком короткий',
    'Unauthorized': 'Не авторизован',
    'Server error': 'Ошибка сервера'
};

function translateError(errorMsg) {
    return errorTranslations[errorMsg] || errorMsg || 'Неизвестная ошибка';
}

export const authService = {
    setToken(token) {
        localStorage.setItem('token', token);
    },

    getToken() {
        return localStorage.getItem('token');
    },

    removeToken() {
        localStorage.removeItem('token');
    },

    isAuthenticated() {
        return !!this.getToken();
    },

    async register(username, email, password) {
        try {
            console.log("Hello", username, email, password);
            const response = await axios.post(`${API_URL}/register`, {
                username,
                email,
                password
            });
            return response.data;
        } catch (error) {
            throw new Error(translateError(error.response?.data?.error) || 'Ошибка при регистрации');
        }
    },

    async login(email, password) {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                email,
                password
            });

            if (response.data.token) {
                this.setToken(response.data.token);
                await this.getProfile();
                return true;
            }
            return false;
        } catch (error) {
            throw new Error(translateError(error.response?.data?.error) || 'Неверный email или пароль');
        }
    },

    logout() {
        this.removeToken();
        localStorage.removeItem('userData');
    },

    saveUserData(userData) {
        localStorage.setItem('userData', JSON.stringify(userData));
    },

    getUserData() {
        const userData = localStorage.getItem('userData');
        return userData ? JSON.parse(userData) : null;
    },

    async getProfile() {
        try {
            const token = this.getToken();
            if (!token) {
                throw new Error('Не авторизован');
            }

            const response = await axios.get(`${API_URL}/api/profile`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            this.saveUserData(response.data);
            return response.data;
        } catch (error) {
            if (error.response?.status === 401) {
                this.removeToken();
                throw new Error('Не авторизован');
            }
            throw new Error(translateError(error.response?.data?.error) || 'Ошибка при получении профиля');
        }
    },

    async updateAvatar(file) {
        try {
            const token = this.getToken();
            if (!token) {
                throw new Error('Не авторизован');
            }

            const formData = new FormData();
            formData.append('avatar', file);

            const response = await fetch(`${API_URL}/api/upload-avatar`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(translateError(errorData.error) || 'Ошибка при загрузке аватарки');
            }

            const data = await response.json();
            return data.avatar;
        } catch (error) {
            throw new Error(translateError(error.message) || 'Ошибка при загрузке аватарки');
        }
    },

    async requestPasswordReset(email) {
        try {
            const response = await axios.post(`${API_URL}/forgot-password`, {email});
            return response.data;
        } catch (error) {
            throw new Error(translateError(error.response?.data?.error) || 'Ошибка при запросе сброса пароля');
        }
    },

    async resetPassword(email, code, newPassword) {
        try {
            const response = await axios.post(`${API_URL}/reset-password`, {
                email,
                code,
                password: newPassword
            });
            return response.data;
        } catch (error) {
            throw new Error(translateError(error.response?.data?.error) || 'Ошибка при сбросе пароля');
        }
    },

};
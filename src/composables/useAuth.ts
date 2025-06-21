import {ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {authService} from '@/services/auth';
import {User} from "@/types/user";

export function useAuth() {
    const router = useRouter();
    const route = useRoute()
    const error = ref('');

    const getToken = () => {
        return authService.getToken();
    };

    const getUserData = () => {
        return authService.getUserData();
    };

    const saveUserData = (userData: User) => {
        authService.saveUserData(userData);
    };

    const logout = () => {
        authService.logout();
        if (route.meta.requiresAuth) {
            router.push('/')
        }
    };

    return {
        error,
        getToken,
        getUserData,
        saveUserData,
        logout
    };
}
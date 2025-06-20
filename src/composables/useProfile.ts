import {onMounted, ref} from 'vue';
import {useAuth} from '@/composables/useAuth';
import {authService} from '@/services/auth';
import {User} from "@/types/user";

export function useProfile() {
    const user = ref<User | null>(null);
    const loading = ref<boolean>(true);
    const { error, getUserData, saveUserData } = useAuth();

    const loadProfile = async (): Promise<void> => {
        try {
            const cachedUser: User | null = getUserData();
            if (cachedUser) {
                user.value = cachedUser;
            }

            const serverUser: User = await authService.getProfile();

            if (user.value?.avatar && !serverUser.avatar) {
                serverUser.avatar = user.value.avatar;
                saveUserData(serverUser);
            }

            user.value = serverUser;
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'Неизвестная ошибка';
            error.value = errorMessage;
            if (errorMessage === 'Не авторизован') {
                error.value = '';
            }
        } finally {
            loading.value = false;
        }
    };

    const handleUpdateAvatar = async (file: File): Promise<void> => {
        try {
            loading.value = true;

            const avatarUrl: string = await authService.updateAvatar(file);

            if (user.value) {
                user.value.avatar = avatarUrl;
                saveUserData(user.value);
            }
        } catch (err: unknown) {
            error.value = err instanceof Error ? err.message : 'Ошибка при обновлении аватарки';
        } finally {
            loading.value = false;
        }
    };


    onMounted(loadProfile);

    return {
        user,
        loading,
        error,
        handleUpdateAvatar,
    };
}
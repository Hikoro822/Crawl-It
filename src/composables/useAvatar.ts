import { ref, watch } from 'vue';

type FileSelectedCallback = (file: File) => void;

export function useAvatar(initialAvatar: string | undefined) {
    const avatarUrl = ref<string>(initialAvatar || '/default-avatar.png');
    const fileInput = ref<HTMLInputElement | null>(null);
    const error = ref<string>('');

    watch(() => initialAvatar, (newAvatar) => {
        if (newAvatar) {
            avatarUrl.value = newAvatar;
        }
    });

    function handleAvatarClick() {
        if (fileInput.value) {
            fileInput.value.click();
        }
    }

    function handleFileChange(event: Event, onFileSelected: FileSelectedCallback) {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) {
            error.value = 'Файл не выбран';
            return;
        }

        if (!file.type.match('image.*')) {
            error.value = 'Пожалуйста, выберите изображение';
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target?.result) {
                avatarUrl.value = e.target.result as string;
                error.value = '';
                onFileSelected(file);
            }
        };
        reader.onerror = () => {
            error.value = 'Ошибка при чтении файла';
        };
        reader.readAsDataURL(file);
    }

    return {
        avatarUrl,
        fileInput,
        error,
        handleAvatarClick,
        handleFileChange,
    };
}
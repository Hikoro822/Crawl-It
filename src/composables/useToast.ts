import { useToast } from 'vue-toast-notification'

let toastInstance: ReturnType<typeof useToast>

export function getToast() {
    if (!toastInstance) {
        toastInstance = useToast()
    }
    return toastInstance
}

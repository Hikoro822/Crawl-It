import {fetchUsersByTask, getUserById} from '@/services/users';
import {ref} from "vue";

export function useUsers() {
    const users = ref([]);

    const loadUsersByTask = async (taskId : number) => {
        users.value = await fetchUsersByTask(taskId);

    };
    const loadUser = async (id : number) => {
        user.value = await getUserById(id);
    };

    return {
        users,
        loadUsersByTask,
        loadUser
    };
}

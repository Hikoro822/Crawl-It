import {computed, ref} from 'vue';
import {fetchTasks, getTaskById} from '@/services/tasks';

interface Task {
    id: number;
    track: 'frontend' | 'backend';
    title: string;
    description: string;
    type: 'task';
    instructions: string;
    status: 'completed' | 'in-progress' | 'locked';
}

export function useTasks() {
    const task = ref<Task | null>(null);
    const tasks = ref([]);
    const selectedTrack = ref<'all' | 'frontend' | 'backend'>('all');
    const sortOrder = ref<'new' | 'old'>('new');

    const loadTask = async (id: number) => {

        const found = await getTaskById(id);
        task.value = found ?? null;

    };
    const loadTasks = async () => {
        tasks.value = await fetchTasks();
    };

    const filteredTasks = computed(() => {
        let result = [...tasks.value];

        if (selectedTrack.value !== 'all') {
            result = result.filter(task => task.track === selectedTrack.value);
        }

        result.sort((a, b) => {
            return sortOrder.value === 'new' ? b.id - a.id : a.id - b.id;
        });

        return result;
    });


    return {
        task,
        loadTask,
        tasks: filteredTasks,
        loadTasks,
        selectedTrack,
        sortOrder,
    };
}

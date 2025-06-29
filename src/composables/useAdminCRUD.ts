import { ref } from 'vue';
import {
    getAllCourses,
    getAllTasks,
    createCourse,
    createTask,
    deleteCourse,
    deleteTask,
} from '@/services/adminContent';

export function useAdminContent() {
    const courses = ref([]);
    const tasks = ref([]);

    const loadContent = async () => {
        courses.value = await getAllCourses();
        tasks.value = await getAllTasks();
    };

    const addCourse = async (course) => {
        const newCourse = await createCourse(course);
        courses.value.push(newCourse);
    };

    const addTask = async (task) => {
        const newTask = await createTask(task);
        tasks.value.push(newTask);
    };

    const removeCourse = async (id) => {
        await deleteCourse(id);
        courses.value = courses.value.filter((c) => c.id !== id);
    };

    const removeTask = async (id) => {
        await deleteTask(id);
        tasks.value = tasks.value.filter((t) => t.id !== id);
    };

    return {
        courses,
        tasks,
        loadContent,
        addCourse,
        addTask,
        removeCourse,
        removeTask,
    };
}

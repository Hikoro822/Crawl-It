import {ref} from 'vue';
import {fetchAnswersByTask, fetchAnswer} from '@/services/answers';
import {User} from "@/types/user";
import {usersMock} from "@/services/users";

export function useAnswers() {
    const answers = ref([]);
    const selectedAnswer = ref<null | { user: User; solution: string }>(null);

    const loadAnswers = async (tasks) => {
        answers.value = [];
        for (const task of tasks) {
            const taskAnswers = await fetchAnswersByTask(task.id);
            answers.value.push(...taskAnswers);
        }
    };

    const getUsersByTask = (taskId: number) => {
        const userIds = answers.value
            .filter(a => a.taskId === taskId)
            .map(a => a.userId);
        return usersMock.filter(u => userIds.includes(u.id));
    };

    const viewAnswer = async (taskId: number, userId: number) => {
        const ans = await fetchAnswer(taskId, userId);
        if (ans) {
            const user = usersMock.find(u => u.id === userId);
            selectedAnswer.value = {
                user,
                solution: ans.solution,
            };
        }
    };

    const clearSelectedAnswer = () => {
        selectedAnswer.value = null;
    };

    return {
        answers,
        selectedAnswer,
        loadAnswers,
        getUsersByTask,
        viewAnswer,
        clearSelectedAnswer,
    };
}

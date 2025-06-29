export const usersMock = [
    {id: 1, name: 'Алиса', completedTasks: ['1', '3']},
    {id: 2, name: 'Боб', completedTasks: ['2']},
    {id: 3, name: 'Чарли', completedTasks: ['1', '2', '3', '4']},
];

export async function fetchUsersByTask(taskId) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return usersMock.filter(user => user.completedTasks.includes(taskId));
}

export function getUserById(id) {
    return usersMock.find(user => user.id === Number(id));
}
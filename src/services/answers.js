const answersMock = [
    {taskId: 1, userId: 1, solution: 'Вот мой лендинг на HTML и CSS...'},
    {taskId: 1, userId: 3, solution: 'Лендинг готов, использовал flexbox.'},
    {taskId: 2, userId: 2, solution: 'ToDo с localStorage и фильтрацией.'},
    {taskId: 3, userId: 3, solution: 'Сервер на Express запущен.'},
];

export async function fetchAnswersByTask(taskId) {
    await new Promise((resolve) => setTimeout(resolve, 300)); // имитация задержки
    return answersMock.filter(ans => ans.taskId === taskId);
}

export async function fetchAnswer(taskId, userId) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return answersMock.find(ans => ans.taskId === taskId && ans.userId === userId) || null;
}
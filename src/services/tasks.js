export const tasks = [
    {
        id: 1,
        track: 'frontend',
        title: 'Верстка лендинга',
        description: 'Практика создания адаптивного лендинга.',
        type: 'task',
        instructions: 'Создайте адаптивный лендинг с использованием HTML и CSS.',
        status: 'in-progress',
    },
    {
        id: 2,
        track: 'frontend',
        title: 'ToDo приложение',
        description: 'Создайте интерактивное приложение ToDo.',
        type: 'task',
        instructions: 'Создайте приложение ToDo с добавлением и удалением задач.',
        status: 'locked',
    },
    {
        id: 3,
        track: 'backend',
        title: 'Сервер на Express',
        description: 'Создание простого REST API.',
        type: 'task',
        instructions: 'Настройте сервер на Express с маршрутом GET /api.',
        status: 'in-progress',
    },
    {
        id: 4,
        track: 'backend',
        title: 'CRUD API',
        description: 'Создание API с операциями CRUD.',
        type: 'task',
        instructions: 'Создайте API с операциями Create, Read, Update, Delete.',
        status: 'locked',
    },
];

export async function fetchTasks() {
    return tasks;
}

export async function getTaskById(id) {
    return  tasks.find(task => task.id ===  Number(id));
}
export const courses = [
    {
        id: 1,
        track: 'frontend',
        title: 'Основы HTML и CSS',
        description: 'Научитесь создавать простые страницы, стилизовать элементы.',
        type: 'theory',
        contentTitle: 'Статья: Введение в HTML и CSS',
        status: 'completed',
    },
    {
        id: 2,
        track: 'frontend',
        title: 'JavaScript: базовый уровень',
        description: 'Изучите переменные, функции, работу с DOM.',
        type: 'theory',
        contentTitle: 'Видео: Основы JavaScript',
        status: 'locked',
    },
    {
        id: 3,
        track: 'backend',
        title: 'Введение в Node.js',
        description: 'Основы работы с сервером, npm, модули.',
        type: 'theory',
        contentTitle: 'Статья: Что такое Node.js',
        status: 'completed',
    },
    {
        id: 4,
        track: 'backend',
        title: 'Работа с базой данных',
        description: 'Основы SQL и взаимодействия с БД.',
        type: 'theory',
        contentTitle: 'Видео: Введение в SQL',
        status: 'locked',
    },
];

export async function fetchCourses() {
    return courses;
}
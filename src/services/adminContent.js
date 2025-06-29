let courses = [{
    id: 101,
    track: 'frontend',
    entity: 'course',
    type: 'theory',
    title: 'Основы HTML',
    description: 'Введение в HTML.',
    contentTitle: 'Урок 1',
    status: 'in-progress',
},];

let tasks = [{
    id: 201,
    track: 'frontend',
    entity: 'task',
    type: 'task',
    title: 'Верстка лендинга',
    description: 'Практика адаптивной вёрстки.',
    instructions: 'Сверстать лендинг.',
    status: 'locked',
},];

export function getAllCourses() {
    return Promise.resolve([...courses]);
}

export function getAllTasks() {
    return Promise.resolve([...tasks]);
}

export function createCourse(course) {
    course.id = Date.now();
    courses.push(course);
    return Promise.resolve(course);
}

export function createTask(task) {
    task.id = Date.now();
    tasks.push(task);
    return Promise.resolve(task);
}

export function deleteCourse(id) {
    courses = courses.filter((c) => c.id !== id);
    return Promise.resolve();
}

export function deleteTask(id) {
    tasks = tasks.filter((t) => t.id !== id);
    return Promise.resolve();
}

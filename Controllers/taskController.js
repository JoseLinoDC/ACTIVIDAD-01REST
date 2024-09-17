// tasks almacenadas en memoria
let tasks = [
    {
        id: 1, 
        title: "Tarea1", 
        description: "Descripcion de la tarea1"
    },
    {
        id: 2, 
        title: "Tarea2", 
        description: "Descripcion de la tarea2"
    },
    {
        id: 3, 
        title: "Tarea3", 
        description: "Descripcion de la tarea3"
    }
];

function getAllTask() {
    return tasks;
}

function createTask(title, description) {
    const newTask = {
        id: tasks.length + 1,
        title,
        description
    };
    tasks.push(newTask);
    return newTask;
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === parseInt(id));
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        return deletedTask[0];
    }
    return null;
}

function updateTask(id, title, description, completed) {
    const task = tasks.find(task => task.id === parseInt(id));
    if (task) {
        task.title = title || task.title;
        task.description = description || task.description;
        task.completed = completed !== undefined ? completed : task.completed;
        return task;
    }
    return null;
}

function getTaskById(id) {
    return tasks.find(task => task.id === parseInt(id)) || null;
}

module.exports = {
    getAllTask,
    createTask,
    deleteTask,
    updateTask,
    getTaskById
};

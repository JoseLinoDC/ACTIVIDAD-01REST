const express = require('express');
const Router = express.Router();
const tasksController = require('../Controllers/taskController');


Router.get('/', (req, res) => {
    const tasks = tasksController.getAllTask();
    res.json(tasks);
});


Router.post('/', (req, res) => {
    const { title, description } = req.body;
    const newTask = tasksController.createTask(title, description);
    res.status(200).json(newTask);
});

// Eliminar una tarea por ID
Router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deletedTask = tasksController.deleteTask(id);
    if (deletedTask) {
        res.status(200).json(deletedTask);
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});

// Actualizar una tarea por ID
Router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const updatedTask = tasksController.updateTask(id, title, description, completed);
    if (updatedTask) {
        res.status(200).json(updatedTask);
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});

// Obtener una tarea por ID
Router.get('/:id', (req, res) => {
    const { id } = req.params;
    const task = tasksController.getTaskById(id);
    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});

module.exports = Router;

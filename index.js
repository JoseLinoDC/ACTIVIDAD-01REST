const express = require('express');
const tasksRoutes = require('./Routes/tasksRoutes'); 
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use("/tasks",tasksRoutes); 

const PORT = process.env.PORT || 3000;

app.listen(PORT,() =>{

    console.log(`Servidor corriendo en el puerto ${PORT}`);

});
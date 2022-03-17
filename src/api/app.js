const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const student = require('../controller/studentsController');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('ok'));
app.post('/create', student.createStudent);
app.get('/getall', student.getAll);
app.put('/edit', student.editStudent);
app.delete('/delete/:id', student.deleteStudent);

module.exports = app;
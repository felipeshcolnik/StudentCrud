const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const student = require('../controller/studentsController');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('ok'));
app.post('/student', student.createStudent);
app.get('/student', student.getAll);
app.get('/filterstudent/', student.filterMany);
app.get('/student/:id', student.getOne);
app.put('/student', student.editStudent);
app.delete('/student/:id', student.deleteStudent);

module.exports = app;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const student = require('../controller/studentsController');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('ok'));
app.post('/create', student.createStudent);
app.get('/getall', student.getAll);

module.exports = app;
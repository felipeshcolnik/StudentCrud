const student = require('../controller/studentsController')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('ok'));
app.post('/create', student.createStudent);

module.exports = app;
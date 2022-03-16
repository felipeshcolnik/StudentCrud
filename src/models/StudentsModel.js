const connection = require('./connection');

const createStudent = async (name, email, birthDate, grade) =>
  connection()
    .then((db) => db.collection('students').insertOne({ name, email, birthDate, grade }))
    .then((result) => result);
  
const findStudent = async (email)  =>
  connection()
    .then((db) => db.collection('students').findOne({email}))
    .then((result) => result);

const getAll = async() => 
  connection()
    .then((db) => db.collection('students').find({}).toArray())
    .then((result) => result);

module.exports = {
  createStudent,
  findStudent,
  getAll,
};
const connection = require('./connection');

const createStudent = async (name, email, birthDate, grade) =>
  connection()
    .then((db) => db.collection('students').insertOne({ name, email, birthDate, grade }))
    .then((result) => result);
  
const findUser = async (email)  =>
  connection()
    .then((db) => db.collection('students').findOne({email}))
    .then((result) => result);

module.exports = {
  createStudent,
  findUser
};
const connection = require('./connection');
const { ObjectId } = require('mongodb');

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

const getOne = async(id) => {
  if (!ObjectId.isValid(id)) throw new Error('Id is not valid');
  return connection()
    .then((db) => db.collection('students').findOne({_id: ObjectId(id)}))
    .then((result) => result);
}

const filterMany = async(object) => {
  console.log(object);
  return connection()
    .then((db) => db.collection('students').find(object).toArray());
}

const editStudent = async(_id, name, email, birthDate, grade) => {
  if (!ObjectId.isValid(_id)) return null;
  return connection()
    .then((db) => db.collection('students')
      .findOneAndUpdate({_id: ObjectId(_id)}, {$set: {name, email, birthDate, grade}})
      .then(() => ({_id, name, email, birthDate, grade }))
    )
}

const deleteStudent = async(id) => {
  if (!ObjectId.isValid(id)) return null;
  const result = connection()
    .then((db) => db.collection('students')
    .deleteOne({_id: ObjectId(id) }))
  return result;
}

module.exports = {
  createStudent,
  findStudent,
  getAll,
  getOne,
  filterMany,
  editStudent,
  deleteStudent,
};
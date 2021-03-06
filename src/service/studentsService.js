const Joi = require('joi');
const model = require('../models/StudentsModel');

const validateStudent = (name, email, birthDate, grade) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    birthDate: Joi.date().required(),
    grade: Joi.string().required(),
  }).validate({ name, email, birthDate, grade })
  if (error) {
    throw error
  }
};

const createUserValidation = async (email) => {
  const user = await model.findStudent(email);
  if (user) {
    const error = new Error('Email already registered');
    error.statusCode = 'conflict';
    throw error;
  }
};

const createStudent = async (name, email, birthDate, grade) => {
  validateStudent(name, email, birthDate, grade);
  await createUserValidation(email);
  const result = await model.createStudent(name, email, birthDate, grade);
  return result;
};

const getAll = async() => {
  const result = await model.getAll();
  return result;
};

const getOne = async(id) => {
  const result = await model.getOne(id);
  return result;
}

const filterMany = async(object) => {
  const result = await model.filterMany(object);
  return result;
}

const editStudent = async(_id, name, email, birthDate, grade) => {
  validateStudent(name, email, birthDate, grade);
  const updatedStudent = await model.editStudent(_id, name, email, birthDate, grade);
  return updatedStudent;
}

const deleteStudent = async (id) => {
  const result = await model.deleteStudent(id);
  if (!result) return 'Invalid Id';
  if (!result.deletedCount) return 'Student not Found';
  if (result.deletedCount) return 'Sucessfully deleted Student';
}

module.exports = {
  createStudent,
  getAll,
  getOne,
  filterMany,
  editStudent,
  deleteStudent,
};
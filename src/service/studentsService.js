const Joi = require('joi');
const model = require('../models/StudentsModel');
// const { SECRET, jwtConfig } = require('../utils/jwtUtils');
  
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
  const user = await model.findUser(email);
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

module.exports = {
  createStudent
};
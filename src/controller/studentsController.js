const service = require('../service/studentsService');

const createStudent = async (req, res) => {
  const { name, email, birthDate, grade } = req.body;
  try {
    const studentInfo = await service.createStudent(name, email, birthDate, grade);
    return res.status(201).json({ student: studentInfo });
  }
  catch (err) {
    return res.status(401).json({message: err.message})
  }
};


const getAll = async (req, res) => {
  const result = await service.getAll();
  return res.status(200).json({result});
};

module.exports = {
  createStudent,
  getAll,
};
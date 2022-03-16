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


module.exports = {
  createStudent
};
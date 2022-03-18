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

const getOne = async (req, res) => {
  const { id } = req.params
  try {
    const result = await service.getOne(id);
    return res.status(200).json({result});
  }
  catch (err) {
    return res.status(401).json({message: err.message})
  }
};

const filterMany = async (req, res) => {
  try {
    const result = await service.filterMany(req.body);
    return res.status(200).json({result});
  }
  catch (err) {
    return res.status(401).json({message: err.message})
  }
};

const editStudent = async (req, res) => {
  const { _id, name, email, birthDate, grade } = req.body;
  try {
    const updatedInfos = await service.editStudent(_id, name, email, birthDate, grade);
    return res.status(200).json({updatedInfos});
  }
  catch (err) {
    return res.status(401).json({message: err.message})
  }
}

const deleteStudent = async function (req, res) {
  const {id}  = req.params
  const result = await service.deleteStudent(id)
  return res.status(200).json({message: result})
}

module.exports = {
  createStudent,
  getAll,
  getOne,
  filterMany,
  editStudent,
  deleteStudent,
};
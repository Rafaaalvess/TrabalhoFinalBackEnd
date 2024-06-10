const animalModel = require('../models/AnimalModel')

const getAll = async (req, res)=>{
  const user = await animalModel.getAll()
  return res.status(200).json(user)
}
const createAnimal = async (req, res)=>{
  const createAnimal = await animalModel.createAnimal(req.body)
  return res.status(201).json(createAnimal)
}

module.exports = {
  getAll,
  createAnimal
}
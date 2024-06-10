const animalModel = require('../models/AnimalModel')

const getAll = async (req, res)=>{
  const animal = await animalModel.getAll()
  return res.status(200).json(animal)
}
const getByNome = async (req, res)=>{
  try {
    const animal = await animalModel.getByNome(req);
    return res.status(200).json(animal);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao obter animal' });
  }
}
const createAnimal = async (req, res)=>{
  const createAnimal = await animalModel.createAnimal(req.body)
  return res.status(201).json(createAnimal)
}

module.exports = {
  getAll,
  createAnimal,
  getByNome
}
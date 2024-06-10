const userModel = require('../models/UserModel')

const getAll = async (req, res)=>{
  const user = await userModel.getAll()
  return res.status(200).json(user)
}
const createUser = async (req, res)=>{
  const createUser = await userModel.createUser(req.body)
  return res.status(201).json(createUser)
}
const validateLogin = async (req, res)=>{
  const validateLogin = await userModel.validateLogin(req.body)
  if(validateLogin == 0){
    return res.status(401).json({message: 'Invalid credentials'})
  }else{
    return res.status(201).json(validateLogin)
  }
}


module.exports = {
  getAll,
  createUser,
  validateLogin
}
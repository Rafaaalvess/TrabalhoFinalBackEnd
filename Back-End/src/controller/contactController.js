const contactModel = require('../models/ContactModel')

const getAll = async (req, res)=>{
  const user = await contactModel.getAll()
  return res.status(200).json(user)
}
const createContact = async (req, res)=>{
  const createContact = await contactModel.createContact(req.body)
  return res.status(201).json(createContact)
}

module.exports = {
  getAll,
  createContact
}
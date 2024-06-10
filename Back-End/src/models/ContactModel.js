const connection = require('./connection')

const getAll = async ()=>{
  const contact = await connection.execute('SELECT * FROM contact')
  return contact[0]
}
const createContact = async (Contact)=>{
  const {nome, email, mensagem} = Contact
  const createContact = await connection.execute('INSERT INTO contact(idContact, nome, email, mensagem) values (?, ?, ?, ?)', [null, nome, email, mensagem])
  return createContact
}


module.exports = {
  getAll,
  createContact,

}
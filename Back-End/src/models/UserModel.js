const connection = require('./connection')

const getAll = async ()=>{
  const user = await connection.execute('SELECT * FROM funcionario')
  return user[0]
}
const createUser = async (user)=>{
  const {nome, email, cargo, cpf ,senha} = user

  const createUser = await connection.execute('INSERT INTO funcionario(idFuncionario, nome, email, cargo, cpf, senha) values (?, ?, ?, ?, ?, ?)', [null, nome, email, cargo, cpf, senha])
    return createUser
}
const validateLogin = async (user) =>{
  const {email, senha} = user
  const validate = await connection.execute('SELECT * FROM funcionario WHERE email = ? AND senha = ?', [email, senha])
  if(email != null && senha != null){
  return validate
  }else{
    return 0
  }

}

module.exports = {
  getAll,
  createUser,
  validateLogin
}
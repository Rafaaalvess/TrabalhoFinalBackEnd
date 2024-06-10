const connection = require('./connection')

const getAll = async ()=>{
  const animal = await connection.execute('SELECT * FROM Animal')
  return animal[0]
}
const createAnimal = async (animal)=>{
  const {nome, raca, idade, situacao, descricao} = animal
  const data = new Date(Date.now())
  const createAnimal = await connection.execute('INSERT INTO Animal(idAnimal, nome, raca, idade, situacao, descricao ,dataDeEntrada) values (?, ?, ?, ?, ?, ?, ?)', [null, nome, raca, idade, situacao, descricao ,data])
    return createAnimal
}


module.exports = {
  getAll,
  createAnimal,

}
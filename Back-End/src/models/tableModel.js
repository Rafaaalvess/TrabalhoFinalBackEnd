const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://12002135:123@classworkapi.ryxwchk.mongodb.net/?retryWrites=true&w=majority&appName=ClassWorkAPI')

const livro = mongoose.model('books' ,{
    titulo: String,
    sumario: String,
    paginas: Number,
    image: String,
    pdf: Buffer
})
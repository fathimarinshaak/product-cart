const mongoose = require('mongoose')
const connecionUri = require('../.env/db')

async function connectDB() {
    await mongoose.connect(connecionUri)
    console.log('database connected!!')
}

module.exports = connectDB
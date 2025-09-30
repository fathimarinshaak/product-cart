const { name } = require('ejs')
const mongoose = require('mongoose')

const categorySchema = {
    id:{
        type:String,
    },
    name:{
        type:String,
    }
}

module.exports = mongoose.model('Category', categorySchema)
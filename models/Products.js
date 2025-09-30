const { name } = require('ejs')
const mongoose = require('mongoose')

const productSchema = {
    id:{
        type:String,
    },
    name:{
        type:String,
    },
    price:{
        type:Number
    },
    image:{
        id:String,
        url:String
    }
}

module.exports = mongoose.model('Product', productSchema)
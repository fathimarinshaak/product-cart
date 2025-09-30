const { name } = require('ejs')
const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    id:{
        type:String,
    },
    name:{
        type:String,
        default:'Admin'
    },
    username:{
        type:String,
    },
    password:{
        type:String,
        select:false
    }
})

module.exports = mongoose.model('Admin', adminSchema)

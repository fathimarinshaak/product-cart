const { name } = require('ejs')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const jwtsecret = require('../.env/jwtsecret')
const bcryptjs = require('bcryptjs')

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

adminSchema.methods.validatePassword = async function (adminpassword){
    return await bcryptjs.compare(adminpassword,this.password)
}

adminSchema.methods.getjwt = function(){
    const token = jwt.sign({
        username:this.username,
        password:this.password
    },jwtsecret)
    return token
}

module.exports = mongoose.model('Admin', adminSchema)

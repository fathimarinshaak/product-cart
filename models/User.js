const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtsecret = require('../.env/jwtsecret')

const userSchema = new mongoose.Schema({
    id:{
        type:String,
    },
    name:{
        type:String,
        default:'User'
    },
    username:{
        type:String,
    },
    password:{
        type:String,
        select:false
    }
})

userSchema.pre('save',async function(next) {
    if (!this.isModified('password')){
        return next()
    }
    this.password = await bcryptjs.hash(this.password,5)
    return next()
})

userSchema.methods.validatePassword = async function (userPassword){
    return await bcryptjs.compare(userPassword,this.password)
}

userSchema.methods.getjwt = function(){
    const token = jwt.sign({
        username:this.username,
        password:this.password
    },jwtsecret)
    return token
}

module.exports = mongoose.model('User',userSchema)

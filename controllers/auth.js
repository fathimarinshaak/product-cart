const { name } = require("ejs")
const Admin = require("../models/Admin")
const bcryptjs = require('bcryptjs')

exports.adminLoginPage = (req,res)=>{
    return res.render('auth/admin-login',{msg:''})
} 

exports.adminLogin = async (req,res)=>{
    const {username,password} = req.body

    if (!(username && password)){
        return res.render('auth/admin-login',{msg:'Username and password required'})
    }

    const admin = await Admin.findOne({username:username}).select('+password')
    if(!admin){
        return res.render('auth/admin-login',{msg:'Incorrect Username or password'})
    }
    
    const verified = await admin.validatePassword(password)

    if(!verified){
        return res.render('auth/admin-login',{msg:'Incorrect Username or password'})
    }

    const admintoken = admin.getjwt()
   
    return res.cookie('admin',admintoken,{httpOnly:true}).redirect('/admin')
} 

exports.adminLogout = (req,res)=>{
    return res.clearCookie('admin').redirect('/admin/login')
}




//////////
const User = require("../models/User")

exports.userRegisterPage = (req,res)=>{
    return res.render('auth/user-register',{msg:''})
}

exports.userRegister = async(req,res)=>{
    const {name,username,password} = req.body

    await User.create({
        id:Date.now(),
        name:name,
        username:username,
        password:password
    })
    return res.render('auth/user-login',{msg:''})
}

exports.userLoginPage = (req,res)=>{
    return res.render('auth/user-login',{msg:''})
} 

exports.userLogin = async (req,res)=>{
    const {username,password} = req.body

    if (!(username && password)){
        return res.render('auth/user-login',{msg:'Username and password required'})
    }

    const user = await User.findOne({username:username}).select('+password')
    if(!user){
        return res.render('auth/user-login',{msg:'Incorrect Username or password'})
    }

    const verified = await user.validatePassword(password)

    if(!verified){
        return res.render('auth/user-login',{msg:'Incorrect Username or password'})
    }

    const usertoken = user.getjwt()

    return res.cookie('user',usertoken,{httpOnly:true}).redirect('/user')
} 

exports.userLogout = (req,res)=>{
    return res.clearCookie('user').redirect('/user/login')
}
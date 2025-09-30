const Admin = require("../models/Admin")

exports.adminLoginPage = (req,res)=>{
    return res.render('auth/admin-login',{msg:''})
} 

exports.adminLogin = async (req,res)=>{
    const {username,password} = req.body

    if (!(username && password)){
        return res.render('auth/admin-login',{msg:'Username and password required'})
    }

    const admin = await Admin.findOne({username:username,password:password})
    if(!admin){
        return res.render('auth/admin-login',{msg:'Incorrect Username or password'})
    }
    console.log(admin)
   
    return res.cookie('admin',admin,{httpOnly:true}).redirect('/admin')
} 

exports.adminLogout = (req,res)=>{
    return res.clearCookie('admin').redirect('/admin/login')
}
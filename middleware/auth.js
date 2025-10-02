const jwt = require('jsonwebtoken')
const jwtsecret = require('../.env/jwtsecret')

exports.adminOnly = (req,res,next)=>{
    const admin = req.cookies?.admin
    if(!admin){
        return res.redirect('/admin/login')
    }

    try {
        const verified = jwt.verify(admin,jwtsecret)
        req.admin = verified
        return next()
    } catch (error) {
        console.log(error)
    }
    return res.redirect('/admin/login')
}


exports.userOnly = (req,res,next)=>{
    const user = req.cookies?.user
    if(!user){
        return res.redirect('/user/login')
    }
    
    try {
        const verified = jwt.verify(user,jwtsecret)
        req.user = verified
        return next()
    } catch (error) {
        console.log(error)
    }
    return res.redirect('/user/login')
}
exports.adminOnly = (req,res,next)=>{
    const admin = req.cookies?.admin
    if(!admin){
        return res.redirect('/admin/login')
    }
    return next()
}
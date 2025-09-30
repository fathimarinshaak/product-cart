const { name } = require('ejs')
const Category = require('../models/Category')

exports.adminDashboard = (req,res)=>{
    return res.render('admin/dashboard')
}

exports.viewCategory = async (req,res)=>{
    const categories = await Category.find()
    return res.render('admin/viewCategory',{categories})
}

exports.addCategory = async (req,res)=>{
    const {name} = req.body
    await Category.create({
        id: `${Date.now()}`,
        name:name
    })
    return res.redirect('/admin/category')
}

exports.deleteCategory = async (req,res)=>{
    const {id} = req.params
    await Category.deleteOne({id:id})
    return res.redirect('/admin/category')
}

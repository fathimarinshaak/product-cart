const { viewCategory, addCategory, deleteCategory, adminDashboard } = require('../controllers/admin')

const router = require('express').Router()

router
    .route('/')
    .get(adminDashboard)

router
    .route('/category')
    .get(viewCategory)
    .post(addCategory)

router
    .route('/category/delete/:id')
    .get(deleteCategory)

module.exports = router
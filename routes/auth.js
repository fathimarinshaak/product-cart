const { adminLoginPage, adminLogin, adminLogout } = require('../controllers/auth')

const router = require('express').Router()

router
    .route('/admin/login')
    .get(adminLoginPage)
    .post(adminLogin)

router
    .route('/logout')
    .get(adminLogout)

module.exports = router
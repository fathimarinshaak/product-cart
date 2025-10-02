const { adminLoginPage, adminLogin, adminLogout, userLoginPage, userLogin, userLogout, userRegisterPage, userRegister } = require('../controllers/auth')

const router = require('express').Router()

router
    .route('/admin/login')
    .get(adminLoginPage)
    .post(adminLogin)

router
    .route('/logout')
    .get(adminLogout)




router
    .route('/user/register')
    .get(userRegisterPage)
    .post(userRegister)

router
    .route('/user/login')
    .get(userLoginPage)
    .post(userLogin)

router
    .route('/logout')
    .get(userLogout)

module.exports = router
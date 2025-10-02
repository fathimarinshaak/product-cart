const express = require('express')
const app = express()
const cookieparser = require('cookie-parser') 

app.use(express.urlencoded())
app.use(express.static('public'))
app.use(cookieparser())

app.set('view engine','ejs')
app.set('views','views')

const connectDB = require('./config/db')
const auth = require('./routes/auth')
const admin = require('./routes/admin')
const user = require('./routes/user')
const { adminOnly, userOnly } = require('./middleware/auth')

app.use('/',auth)
app.use('/admin',adminOnly,admin)
app.use('/user',userOnly)

app.listen(3000,()=>{
    connectDB()
    return console.log('app started!!')
})
const express = require('express')
const cors = require('cors')
const connectDB = require('./Config/db')
const menuRoutes = require('./Routes/menuRoutes')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

connectDB()
app.use('/api/menu',menuRoutes)

app.listen(PORT,()=> {
    console.log(`server running succesfull on ${PORT}`)
})
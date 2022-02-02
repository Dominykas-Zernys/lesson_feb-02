// EXPRESS AND CORS

const express = require('express')
const cors = require('cors')
const { response } = require('express')

const app = express()
const PORT = 3000

// MIDDLEWARE

// ROUTES

app.get('/test', (req, res) => {
    res.send('<h2>Back-end on line</h2>')
})

// SERVER
app.listen(PORT, console.log(`server is running on port ${PORT}`))
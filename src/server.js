// EXPRESS AND CORS

const express = require('express')
const cors = require('cors')
const { response } = require('express')

const app = express()
const PORT = 3000

const posts = [
    {id: 1, title: 'First post', text: 'text of first post text of first post text of first post'},
    {id: 2, title: 'Second post', text: 'text of second post text of second post text of second post'},
    {id: 3, title: 'Third post', text: 'text of third post text of third post text of third post'},
]
// MIDDLEWARE

app.use(cors())
app.use(express.json())

// ROUTES

app.get('/test', (req, res) => {
    res.send('<h2>Back-end on line</h2>')
})

// GET /api/posts - RETURNS ALL POSTS

app.get('/api/posts', (req, res) => {
    res.json({message: 'success', data: posts})
})

// POST /api/posts - create new post
app.post('/api/posts', (req, res) => {
    console.log('ssss', req.body)
    posts.push(req.body)
    res.json('new posts added to post')
})

// SERVER
app.listen(PORT, console.log(`server is running on port ${PORT}`))
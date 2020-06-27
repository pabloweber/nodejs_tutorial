const express = require('express');
const mongoose = require('mongoose')
require('dotenv/config')

const app = express();

// Middlewares - function that runs on specific path
// app.use('/users', () => {
// 	console.log('Middleware is running')
// })
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute)

// Routes
app.get('/', (req, res) => {
	res.send('We are home')
})

// Connect to DB
mongoose.connect(
	process.env.DB_CONNECTION, 
	{ useNewUrlParser: true },
	() => console.log('Connected to DB!')
)

// Server port
app.listen(3000);
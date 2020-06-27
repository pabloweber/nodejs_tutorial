const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
	res.send('We are on all posts')
})

router.get('/animals', (req, res) => {
	res.send('We are on animal posts')
})

module.exports = router;
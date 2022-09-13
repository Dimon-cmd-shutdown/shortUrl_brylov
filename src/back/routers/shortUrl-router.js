const express = require('express')
const router = new express.Router()
const shortUrlController = require('../controllers/shortUrl-controller')

router.get('/', (req, res)=>{
    shortUrlController.mainPageHtmlRender(req, res)
})

router.post('/create_shortUrl', (req, res)=>{
    shortUrlController.shortUrlPage(req, res)
})

module.exports = router
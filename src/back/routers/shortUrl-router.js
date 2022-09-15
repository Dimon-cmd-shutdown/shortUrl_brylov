const express = require('express')
const router = new express.Router()
const shortUrlController = require('../controllers/shortUrl-controller')

router.get('/', (req, res)=>{
    shortUrlController.mainPageHtmlRender(req, res)
})

router.get('/inputUrl', (req, res)=>{
    shortUrlController.urlInputPageHtmlRender(req, res)
})

router.post('/url', (req, res)=>{
    shortUrlController.urlPage(req, res)
})

router.get('/create_shortUrl', (req, res)=>{
    shortUrlController.createShortUrlPageHtmlRender(req, res)
})

router.post('/shortUrl', (req, res)=>{
    shortUrlController.shortUrlPage(req, res)
})

module.exports = router
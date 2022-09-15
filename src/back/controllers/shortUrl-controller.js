const path = require('path')
const isValidUrl = require('valid-url')
const Url = require('../db/models/UrlModel')

const mainPageHtmlRender = (req, res) =>{
     res.render('index')
}

const createShortUrlPageHtmlRender = (req, res) =>{
    res.render('url-input')
}

const urlInputPageHtmlRender = (req, res)=>{
    res.render('shortUrl-input')
}

const shortUrlPage = async (req, res)=>{
    try{
        const url = req.body.url
        if(isValidUrl.isUri(url)) {
            const createdUrlObject = await Url.create({ value: url });
            const token = await createdUrlObject.generateAuthToken()
            const shortUrl = await createdUrlObject.generateShortUrl()
            return res.render('shortUrl', {
                shortUrl:shortUrl
            })
        }
        throw new Error()
        
    }catch(e){
        res.send('Not valid url')
    }
}

const urlPage = async (req, res)=>{
    try{
        const shortUrl = req.body.shortUrl
        if(shortUrl.length === 6) {
            const url = await Url.find({shortUrl:shortUrl})
            url[0].countOfHits++
            await url[0].save()
            return res.render('url', {
                url:url[0].value
            })
        }
        throw new Error()
        
    }catch(e){
        res.send('Not valid short url')
    }
}


module.exports = {
    name:'shortUrlController',
    mainPageHtmlRender,
    shortUrlPage,
    createShortUrlPageHtmlRender,
    urlInputPageHtmlRender,
    urlPage
}
const path = require('path')
const isValidUrl = require('valid-url')
const Url = require('../db/models/UrlModel')

const mainPageHtmlRender = (req, res) =>{
     res.render('index')
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


module.exports = {
    name:'shortUrlController',
    mainPageHtmlRender,
    shortUrlPage,
}
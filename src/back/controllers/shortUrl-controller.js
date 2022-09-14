const path = require('path')
const isValidUrl = require('valid-url')
const Url = require('../db/models/UrlModel')

const mainPageHtmlRender = (req, res) =>{
    const htmlFilePath = path.join(__dirname, '../../front/index.html')
    res.sendFile(htmlFilePath)
}

const shortUrlPage = async (req, res)=>{
    try{
        const url = req.body.url
        if(isValidUrl.isUri(url)) {
            await Url.create({ value: url }, function (err, small) {
                if (err) return handleError(err);
                // saved!
              });
            return res.send(req.body.url)
        }
        throw new Error()
    }catch(e){
        res.send('Not valid URL')
    }
}


module.exports = {
    name:'shortUrlController',
    mainPageHtmlRender,
    shortUrlPage,
}
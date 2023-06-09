function apiKey(req,res,next) {
    const api_key = "12345";
    const userapikey = req.query.api_key
    console.log(req.query.api_key);
    if(userapikey && (userapikey === api_key)){

        next();
    }else{
        res.json({
            message:'not allowed'
        })
    }
}
module.exports = apiKey;
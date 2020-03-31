require('dotenv').config();

const jwt = require('jsonwebtoken');

function auth(req, res,next){
    let token = req.header('x-auth-token');
    if(!token){
        res.status(401).json({
            success:false,
            error:'Authorization denied because no token was provided'
        });
    }
    try {
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({
            success:false,
            error:'Token is invalid'
        });
    }
}

module.exports=auth;
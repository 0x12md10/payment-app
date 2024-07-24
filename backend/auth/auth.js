const jwt = require("jsonwebtoken");
require("dotenv").config();


async function auth(req,res,next) {
    const bearerToken = req.headers.authorization;

    if(!bearerToken || !bearerToken.startsWith("Bearer")) {
        return res.status(403).json({message : "Unauthorised"});
    }

    const token = bearerToken.split(" ")[1];

    try {
        const verifiedToken = jwt.verify(token , process.env.PAYTM_SECRET);
        
        req.userId = verifiedToken.userId;

        next();
    } catch (error) {
        return res.status(403).json({})
    }


}

module.exports = auth;
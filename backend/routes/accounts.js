const express = require("express");
const { User, Account } = require("../db/db");
const auth = require("../auth/auth");


const router = express.Router();


router.get("/balance",auth,async (req,res)=>{
    const userAccount = await Account.findOne({userId : req.userId});

    
    if(!userAccount){
        return res.status(411).json({message : "Error fetching balance."});

    }
    return res.status(200).json({balance :userAccount.balance});
})

module.exports = router;
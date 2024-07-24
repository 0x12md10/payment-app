const express = require("express");
const zod = require("zod");
const User = require("../db/db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

router.post("/signup" , async (req,res)=> {

    const user = req.body;
    console.log(user)
    const userValidationSchema = zod.object({
        username : zod.string().min(3).max(40).email(),
        firstname : zod.string().min(3).max(40),
        lastname : zod.string().min(1).max(40),
        password : zod.string().min(8).max(20)
    });

    const parsedInput = userValidationSchema.safeParse(user);
    if(!parsedInput.success) {
        return res.status(411).json({message : "Email already taken / Incorrect inputs. "});
    }

    const findUser = await User.findOne({username : parsedInput.data.username});
    
    if(!findUser) {
        const newUser = await User.create(parsedInput.data);
        const token = jwt.sign({userId : newUser._id} , process.env.PAYTM_SECRET);

        return res.status(200).json({"message" : "User successfully created" , token});
    }

    res.status(400).json({res : parsedInput})
});


router.post("/signin" , (req,res)=> {

});

module.exports = router;
const express = require("express");
const zod = require("zod");
const User = require("../db/db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = require("../auth/auth");

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

    try {
        
    const parsedInput = userValidationSchema.safeParse(user);
    if(!parsedInput.success) {
        return res.status(411).json({message : "Email already taken / Incorrect inputs. "});
    }

    const findUser = await User.findOne({username : parsedInput.data.username});
    
    if(!findUser) {
        const newUser = await User.create(parsedInput.data);
        const token =  jwt.sign({userId : newUser._id} , process.env.PAYTM_SECRET);

        return res.status(200).json({"message" : "User successfully created" , token});
    }

    return res.status(411).json({message : "Email already taken / Incorrect inputs. "});
    } catch (error) {
        throw new Error("Error creating user");
    }
});


router.post("/signin" , async (req,res)=> {

    const user = req.body;

    const userValidationSchema = zod.object({
        username : zod.string().min(3).max(40).email(),
        password : zod.string().min(8).max(20)
    });

    try {

        const parsedInput = userValidationSchema.safeParse(user);

        if(!parsedInput.success) {
            return res.status(411).json({message: "Invalid inputs"});
        }

        const findUser = await User.findOne({username : parsedInput.data.username});

        if(!findUser) {
            return res.status(403).json({message : "Account doesn't exists."});
        }

        if(findUser && findUser.password === parsedInput.data.password) {
            const token = await jwt.sign({userId : findUser._id},process.env.PAYTM_SECRET);

            return res.status(200).json({token});
        } else {
            return res.status(403).json({message : "Incorrect Password"});
        }

        
    } catch (error) {
        throw new Error("Error occured while signin.");
    }

});





// router.post("/", auth , async(req,res)=> {

//     const updateSchema = zod.object({
//         firstname : zod.string().min(3).max(40).optional(),
//         lastname : zod.string().min(1).max(40).optional(),
//         password : zod.string().min(8).max(20).optional()
//     })
//     const parsedInput = await updateSchema.safeParse(req.body);
    
//     if(!parsedInput.success) {
//        return res.status(411).json({message: "Invalid inputs"});
//     }

//     const user = await User.findOneAndUpdate({username : req.userId},req.body);

//     if(!user) {
//         return res.status(411).json({message : "error while updating user"});
//     }

//     return res.status(200).json({message : "Updated successfully"});

// })


const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", auth, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    const updatedUser = await User.updateOne({_id : req.userId}, req.body)

    if(updatedUser) {
        return res.json({
            message: "Updated successfully"
        })
    }

    res.status(411).json({message : "error while updating user."})
})


router.get("/bulk" ,auth, async(req,res)=> {
    
    const {filter} = req.query;
    try {
        const findUsers = await  User.find({
            $or : [
                {
                    firstname : {
                        $regex : filter
                    }
                },
                {
                    lastname : {
                        $regex : filter
                    }
                }
            ]
        })
    
        const result = findUsers.map(user=> {
            return {
                username : user.username,
                firstname : user.firstname,
                lastname : user.lastname,
                _id : user._id
            }
        })
    
    
        res.status(200).json({users : result})
    } catch (error) {
        throw new Error(error.message)
    }
})

module.exports = router;
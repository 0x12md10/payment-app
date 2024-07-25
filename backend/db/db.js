const { default: mongoose } = require("mongoose");
const { number } = require("zod");
require("dotenv").config()



const userSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 40,
        trim : true,
        lowercase : true,
        unique : true
    },
    firstname : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 40,
        trim : true,

    },
    lastname : {
        type : String,
        required : true,
        minLength : 1,
        maxLength : 40,
        trim : true
    },
    password : {
        type : String,
        required : true,
        minLength : 8,
        maxLength : 20,
        trim : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
});


const User = mongoose.model("User" , userSchema);

const AccountSchema = new mongoose.Schema({

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : User,
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
});


const Account = mongoose.model("Account" , AccountSchema);




module.exports = {User,Account};
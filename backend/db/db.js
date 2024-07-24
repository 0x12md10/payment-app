const { default: mongoose } = require("mongoose");
require("dotenv").config()



const userSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 40,
        trim : true,
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

module.exports = User;
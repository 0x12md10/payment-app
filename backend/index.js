const express = require("express");
require("dotenv").config();
const rootRouter = require("./routes/index");
const userRouter = require("./routes/user");
const mongoose = require("mongoose")
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json());


app.use("/api/v1" , rootRouter);
app.use("/api/v1/user" , userRouter);



mongoose.connection.once("connected" , ()=>{
    console.log("connected to DB.");
})

mongoose.connection.on("error" , ()=> {
    console.log("Error occured whiile connecting to db.")
})

async function startServer() {
    await mongoose.connect(process.env.MONGO_URI);
    
app.listen(process.env.PORT , ()=> {
    console.log("App listening on port " + process.env.PORT)
})
}

startServer();

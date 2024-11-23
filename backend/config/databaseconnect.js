const mongoose=require("mongoose");
require("dotenv").config();

const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("database is connected"))
    .catch((error)=>{
        console.log(error);
        process.exit(1);
    });
}

module.exports=dbconnect;
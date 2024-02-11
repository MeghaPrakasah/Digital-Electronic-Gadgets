
const mongoose = require('mongoose')

const dbConnect = ()=>{
    try{
        const conn = mongoose .connect(process.env.MONGODB_URL);
        console.log("DB Connected");
    }
    catch(error){
        console.log("DB Not Connected");
    }
}

module.exports = dbConnect
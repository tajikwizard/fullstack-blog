const mongoose = require('mongoose');
require('dotenv').config()
const dbConnect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected!");
        
    } catch (error) {
        console.log('DB Connection failed',error.message);
        
    }
}
dbConnect();

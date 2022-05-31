const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.DB_URL)
        console.log(`Connected: ${connect.connection.host}`)
    }catch (error) {
        console.log(error);
        process.exit(1)
    }
    

}

module.exports = connectDB
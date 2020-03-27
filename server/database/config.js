const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        });
        console.log(`Connected to database: ${connection.connection.host}`);
    } catch (error) {
        console.log(`Connection error: ${error.message}`);
    }
}

module.exports = connectToDatabase;
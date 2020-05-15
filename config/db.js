const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...')

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
//mongoURI
module.exports = connectDB;
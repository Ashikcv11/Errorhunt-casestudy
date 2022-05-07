const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGODBURL,{ useNewUrlParser: true ,useUnifiedTopology: true}).then(()=>{
    console.log("DB Connected")
});
const Schema = mongoose.Schema;


const BookSchema = new Schema({    
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;
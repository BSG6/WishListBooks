const mongoose = require('mongoose');
// this is only for password hashing
// const bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
const booksSchema = new mongoose.Schema({

    title : {
        // type of input/selection 
        type : String, 
        // if this selection is required to move on to the next step
        required : true,
        // max number of characters
        maxlength : 100
    },
    link : {
        type : String, 
        // pick at least one item but multiples can be selected 
        required : false  
    }
})

// create the model for users and expose it to our app
module.exports = mongoose.model('books', booksSchema);
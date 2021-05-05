var mongoose = require('mongoose');

module.exports = new mongoose.Schema( 
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            lowercase: true,
            match: /.+@.+\.+/
        },
        grade: {
            type: Number,
            default: 70
        }
    }
);
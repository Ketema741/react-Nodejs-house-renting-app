const mongoose = require ('mongoose')

const UserSchema = mongoose.Schema ({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    phone: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type:String,
        required:true
    },
    favourites: {
        type:[String],
    },
    message: {
        type:[String],
    },
    date: {
        type:Date,
       default:Date.now
    },
    
})

module.exports = mongoose.model('User', UserSchema);
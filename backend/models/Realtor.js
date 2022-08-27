const mongoose = require ('mongoose')

const UserSchema = mongoose.Schema ({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique: true
    },
    password: {
        type:String,
        required:true
    },
    phone: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    experienceYear: {
        type:Number,
        required:true
    },
    location: {
        type:String,
        required:true
    },
    Specializations: {
        type:String,
        required:true
    },
    activityRange: {
        type:Number,
        default:null
    },
    forSale: {
        type:Number,
        default:null
    },
    sold: {
        type:Number,
        default:null
    },
    date:{
        type:Date,
       default:Date.now
    },
})

module.exports = mongoose.model('Realtor', UserSchema);
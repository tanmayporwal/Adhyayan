const mongoose = require("mongoose")
const validator = require("validator")

const User = mongoose.model('User',{
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value))
                throw new Error("Please Enter Valid Email")
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength:8 
    },
    seat_number: {
        type: String
    },
    plan_start_date: {
        type: Date
    },
    plan_end_date: {
        type: Date
    },
    refferalCode: {
        type: String
    },
    plan_id: {
        type: Number
    },
    payment: {
        id: {
            type: Number
        },
        amount: {
            type: Number
        },
        payment_date: {
            type: Date
        },
        payment_mode: {
            type: String
        },
        card_number:{
            type: Number
        }
    }

})


module.exports = User
const mongoose = require("mongoose")
const validator = require("validator")

mongoose.connect('mongodb://127.0.0.1:27017/Adhyayan',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
})

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

const user = new User({
    first_name: "tanmay",
    last_name: "porwal",
    email: "tanmay@PORWAL",
    password: "hellooooo"
})

user.save().then(()=> console.log(user)).catch((error)=> console.log(error.message))
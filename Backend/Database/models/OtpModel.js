import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, 
        lowercase: true
    },
    otp:{
        type: String,
        required: true,
        minlength: 6,
        maxlength: 6
    },
    expireAt:{
        type: Date,
        required: true,
        index: {expires: 0}
    },
    purpose:{
        type: String,
        enum: ["signup", "forgot_password"],
        required: true
    }
}, {timestamps: true})

otpSchema.index({email: 1, purpose: 1}, {unique: true});

const otpModel = mongoose.model("otp", otpSchema);
export default otpModel;
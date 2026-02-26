import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const authSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String, 
        enum: ["user", "admin"],
        default: "user"
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    profile:{
        type: String,
        required: true,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFaXtvRYynJHeIfyEKbSr7YCZI3ycZ_0MlA&s"
    }
}, {timestamps: true})

authSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
  });

const authModel = mongoose.model("user", authSchema);
export default authModel;
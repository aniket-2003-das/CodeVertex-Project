import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new Schema({
    fullName:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    },
    gender:{
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    },
    profilePicture:{
        type: String,
        default: ''
    }
}, {
    timestamps: true
})

export const User = mongoose.model('User', userSchema);

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}
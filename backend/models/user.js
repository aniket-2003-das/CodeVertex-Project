import { profile } from 'console';
import mongoose from 'mongoose';
import { type } from 'os';

const Schema=mongoose.Schema;

const userSchema=new Schema({
    Name:{
        type  : String, 
        length : 20,
        required : true,
    },

    Email:{
        type : String,
        length:50,
        unique:true,
        required:true,
    },
    ContactNumber:{
        type :String,
        length:10,
    },
    Password:{
        type:  String,
        required:true,
    },
    AcountType:{
        type: String,
        required:true,
    },
    Active:{
        type: Boolean,
        default:true,
    },
    Approve:{
        type: Boolean,
    },
    Courses:{
        type: CourseSchema,
        
    },
    Profile:{
        type: ProfileSchema,
    },
    CourseProgress:{
        type:CourseProgressSchema,
    }


})

const UserModel=mongoose.model("User",UserSchema);

export default UserModel;
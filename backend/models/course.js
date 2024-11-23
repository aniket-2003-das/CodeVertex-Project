import mongoose from 'mongoose';
import { type } from 'os';

const Schema=mongoose.Schema;

const CourseSchema=new Schema({
    CourseName:{
        type:String,
        required:true,
        unique:true,
    },
    CourseDescription:{
        type:String,
        required:true,
        length:50,
    },
    Instructor:{
        type:usermongoose.Schema.Types.ObjectId,
        length:15,
        ref:"users",
    },
    WhatYouWillLearn:{
        type:String,
        length:150,
    },
    courseContent:{
        type:Sectionschema,
    },
    RatingandReview:{
        type:RatingandReviewSchema,
    },
    price:{
        type:Number,
    },
    thumbnail:{
        type:String,
    },
    Tag:{
        type:TagsSchema,
        default:null,
    },
    StudentEnrolled:{
        type:,
    },

})

const Course=mongoose.model("User",CourseSchema);

export default Course;
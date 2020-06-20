import mongoose from "mongoose";

const JobSchema = mongoose.Schema({
    HRName:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    requirements: {
        type: Array,
        required: false
    },
    created_date:{
        type:Date,
        default: Date.now
    }
});

const jobModel = mongoose.model('job', JobSchema);

module.exports = jobModel;

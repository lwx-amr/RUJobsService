import usersModel from "../repository/jobModel";

// Display HR all jobs from recent to old
const getAllHRJobs = () => {

}

// Get jobs states with number for each one
const getJobStatesWithNum = () => {

}

// Display all jobs in workspace from recent to old	
const getAllWSJobs = () => {

}

// Crud operations for job
const addNewJob = () => {

}

const getJob = () => {

}

const updateJob = () => {

}

const deleteJob = () => {

}

// Handling all not found requests
const invalidRequest = (req, res) => {
    res.send("<h1>PAGE NOT FOUND</h1>");
}

module.exports = { 
    getAllHRJobs, getJobStatesWithNum, getAllWSJobs,
    addNewJob, getJob, updateJob, deleteJob, invalidRequest};

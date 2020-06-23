import express from "express";
import { getAllHRJobs, getJobStatesWithNum, getAllWSJobs, addNewJob, getJob, updateJob, deleteJob, invalidRequest} from "../service/jobController";

const router = express.Router();

// Crud operations for job
router.route("/job/:id")
    .get(getJob)
    .put(updateJob)
    .delete(deleteJob);
router.route("/")
    .post(addNewJob)

// Return jobs states with num for each one
router.route("/states")
    .get(getJobStatesWithNum); 

// Return all jobs for certain hr
router.route("/hr/:id")
    .get(getAllHRJobs);

// Return all jobs for certain WorkSpace
router.route("/ws/:id")
    .get(getAllWSJobs);

//catch all other routes
router.route("*")
    .get(invalidRequest);


module.exports = router;

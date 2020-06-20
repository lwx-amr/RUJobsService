import express from "express";
import { getAllHRJobs, getJobStatesWithNum, getAllWSJobs, addNewJob, getJob, updateJob, deleteJob, invalidRequest} from "../service/jobController";

const router = express.Router();

// Crud operations for job
router.route("/jobs")
    .post(addNewJob)
    .get(getJob)
    .put(updateJob)
    .delete(deleteJob);

// Return all jobs for certain hr
router.route("/jobs/:hrID")
    .get(getAllHRJobs);

// Return all jobs for certain WorkSpace
router.route("/jobs/:wsID")
    .get(getAllWSJobs);

// Return jobs states with num for each one
router.route("/jobs/states")
    .get(getJobStatesWithNum);

//catch all other routes
router.route("*")
    .get(invalidRequest);


module.exports = router;

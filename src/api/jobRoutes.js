import express from "express";
import { getAllHRJobs, getJobStatesWithNum, getAllWSJobs, addNewJob, getJob, updateJob, deleteJob, invalidRequest} from "../service/jobController";

const router = express.Router();

// Crud operations for job
router.route("/jobs")
    .post(addNewJob)
    .get(getJobStatesWithNum);  // Return jobs states with num for each one

router.route("/jobs/job/:id")
    .get(getJob)
    .put(updateJob)
    .delete(deleteJob);

// Return all jobs for certain hr
router.route("/jobs/hr/:id")
    .get(getAllHRJobs);

// Return all jobs for certain WorkSpace
router.route("/jobs/ws/:id")
    .get(getAllWSJobs);

//catch all other routes
router.route("*")
    .get(invalidRequest);


module.exports = router;

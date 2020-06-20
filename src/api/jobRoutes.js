import express from "express";
import { mainFun } from "../service/jobController";

const router = express.Router();

router.get("/jobs", (req, res) => {
    res.json("Hello, we are very happy that you're here");
});

module.exports = router;

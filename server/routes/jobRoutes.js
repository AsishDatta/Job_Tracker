const express = require("express");
const router = express.Router();
const {
  createJob,
  getJobs,
  updateStatus,
  deleteJob,
} = require("../controllers/jobController");

router.post("/", createJob);
router.get("/", getJobs);
router.patch("/:id", updateStatus);
router.delete("/:id", deleteJob);

module.exports = router;

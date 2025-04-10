const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  status: {
    type: String,
    enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
    default: 'Applied'
  },
  appliedDate: { type: Date, required: true },
  link: String,
}, { timestamps: true });

module.exports = mongoose.model("Job", JobSchema);

import React from "react";
import api from "../api";

const JobList = ({ jobs, refreshJobs }) => {
  const updateStatus = async (id, newStatus) => {
    await api.patch(`/jobs/${id}`, { status: newStatus });
    refreshJobs();
  };

  const deleteJob = async (id) => {
    await api.delete(`/jobs/${id}`);
    refreshJobs();
  };

  return (
    <div>
      {jobs.length === 0 ? (
        <p>No job applications found.</p>
      ) : (
        jobs.map((job, index) => (
          <div
            key={job._id}
            className="job-card"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3>{job.company} - {job.role}</h3>
            <p>
              <span className={`status-badge status-${job.status}`}>
                {job.status}
              </span>
            </p>
            <p><strong>Applied Date:</strong> {new Date(job.appliedDate).toLocaleDateString()}</p>
            {job.link && (
              <p>
                <a href={job.link} target="_blank" rel="noreferrer">
                  View Job Posting
                </a>
              </p>
            )}
            <div style={{ marginTop: "10px" }}>
              <select
                value={job.status}
                onChange={(e) => updateStatus(job._id, e.target.value)}
              >
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
              <button onClick={() => deleteJob(job._id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobList;

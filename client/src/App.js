import React, { useEffect, useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import FilterBar from "./components/FilterBar";
import api from "./api";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("");

  const fetchJobs = async () => {
    setLoading(true);
  
    try {
      const res = await api.get("/jobs");
  
      // simulate delay
      setTimeout(() => {
        setJobs(res.data);
        setLoading(false);
      }, 500); // 500ms delay
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const filteredJobs = statusFilter
    ? jobs.filter((job) => job.status === statusFilter)
    : jobs;

  return (
    <div className="container">
      <h1>Student Job Tracker</h1>
      <JobForm refreshJobs={fetchJobs} />

      {loading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <FilterBar
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
          <JobList jobs={filteredJobs} refreshJobs={fetchJobs} />
        </>
      )}
    </div>
  );
}

export default App;

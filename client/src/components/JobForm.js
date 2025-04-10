import React, { useState } from "react";
import api from "../api";


const JobForm = ({ refreshJobs }) => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    appliedDate: "",
    link: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/jobs", formData);
    refreshJobs();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        company: "",
        role: "",
        status: "Applied",
        appliedDate: "",
        link: "",
      });
    }, 400);
  };

  return (
    <form onSubmit={handleSubmit} className={submitted ? "fade-out" : "fade-in"}>
      <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
      <input name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input type="date" name="appliedDate" value={formData.appliedDate} onChange={handleChange} required />
      <input name="link" placeholder="Job Link" value={formData.link} onChange={handleChange} />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;

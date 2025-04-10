import React from "react";

const FilterBar = ({ statusFilter, setStatusFilter }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{ marginRight: "10px", fontWeight: "bold" }}>Filter by Status:</label>
      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ padding: "8px" }}>
        <option value="">All</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default FilterBar;

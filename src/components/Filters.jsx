import React from 'react';

const Filters = ({ setSearch, setIndustry, companies }) => {
  // build industry options dynamically
  const industries = Array.from(new Set((companies || []).map((c) => c.industry))).filter(Boolean);

  return (
    <div style={{ display: 'flex', gap: 10, marginBottom: 20, alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Search company..."
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 8, width: '40%' }}
      />

      <select onChange={(e) => setIndustry(e.target.value)} style={{ padding: 8 }}>
        <option value=''>All Industries</option>
        {industries.map((ind) => (
          <option key={ind} value={ind}>{ind}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;

import React from 'react';

const CompanyTable = ({ companies }) => {
  if (!companies || companies.length === 0) return <div>No companies found.</div>;

  return (
    <table width="100%" cellPadding="10" style={{ borderCollapse: 'collapse', background: '#fff' }}>
      <thead>
        <tr style={{ background: '#f0f0f0' }}>
          <th style={{ textAlign: 'left' }}>Name</th>
          <th style={{ textAlign: 'left' }}>Industry</th>
          <th style={{ textAlign: 'left' }}>Location</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((c) => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.industry}</td>
            <td>{c.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompanyTable;

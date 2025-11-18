import React, { useEffect, useState } from 'react';
import { getCompanies } from '../api';
import Filters from '../components/Filters';
import CompanyTable from '../components/CompanyTable';

const Home = () => {
  const [companies, setCompanies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [industry, setIndustry] = useState('');

  useEffect(() => {
    setLoading(true);
    getCompanies()
      .then((res) => {
        setCompanies(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    let data = companies;

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (industry) {
      data = data.filter((c) => c.industry === industry);
    }

    setFiltered(data);
  }, [search, industry, companies]);

  if (loading) return <div style={{padding:20}}>Loading companies...</div>;

  return (
    <div style={{ padding: 20, maxWidth: 1000, margin: 'auto',backgroundColor:'#ed9a9aff',borderRadius:8 }}>
      <h2>Companies Directory</h2>

      <Filters setSearch={setSearch} setIndustry={setIndustry} companies={companies} />

      <CompanyTable companies={filtered} />
    </div>
  );
};

export default Home;

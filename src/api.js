import axios from 'axios';


export const getCompanies = () =>
  Promise.resolve({
    data:[
  { "id": 1, "name": "Tata Consultancy Services", "industry": "IT Services", "location": "Mumbai" },
  { "id": 2, "name": "Infosys", "industry": "Software", "location": "Bangalore" },
  { "id": 3, "name": "Wipro", "industry": "IT Solutions", "location": "Hyderabad" },
  { "id": 4, "name": "Amazon India", "industry": "E-Commerce", "location": "Hyderabad" },
  { "id": 5, "name": "Google India", "industry": "Technology", "location": "Bangalore" },
  { "id": 6, "name": "Microsoft India", "industry": "Cloud Services", "location": "Hyderabad" },
  { "id": 7, "name": "HCL Technologies", "industry": "IT Services", "location": "Noida" },
  { "id": 8, "name": "Tech Mahindra", "industry": "Software", "location": "Pune" },
  { "id": 9, "name": "Capgemini", "industry": "Consulting", "location": "Mumbai" },
  { "id": 10, "name": "Accenture", "industry": "Consulting", "location": "Bangalore" },
  { "id": 11, "name": "Oracle India", "industry": "Database Solutions", "location": "Hyderabad" },
  { "id": 12, "name": "IBM India", "industry": "Technology", "location": "Pune" },
  { "id": 13, "name": "Flipkart", "industry": "E-Commerce", "location": "Bangalore" },
  { "id": 14, "name": "Paytm", "industry": "FinTech", "location": "Noida" },
  { "id": 15, "name": "Zoho", "industry": "SaaS", "location": "Chennai" },
  { "id": 16, "name": "Freshworks", "industry": "SaaS", "location": "Chennai" },
  { "id": 17, "name": "PhonePe", "industry": "FinTech", "location": "Bangalore" },
  { "id": 18, "name": "Swiggy", "industry": "Food Delivery", "location": "Bangalore" },
  { "id": 19, "name": "Zomato", "industry": "Food Delivery", "location": "Gurgaon" },
  { "id": 20, "name": "Byju's", "industry": "EdTech", "location": "Bangalore" }
]

  });

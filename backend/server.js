require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000'
};

const multipleRecordsEndpoint = 'https://techpro1.cybozu.com/k/v1/records.json';

app.get('/getData', cors(corsOptions), async (req,
  res) => {
  const fetchOptions = {
    method: 'GET',
    headers: {
      'X-Cybozu-API-Token': process.env.API_TOKEN
    }
  }
  const parameters = '?app=308';
  const response = await
    fetch(multipleRecordsEndpoint + parameters,
      fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
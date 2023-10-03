import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
const kintoneRecords = 'http://localhost:5000/getData';

const callRestApi = async () => {
  const response = await fetch(kintoneRecords);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  const arrayOfLists = jsonResponse.records.map(
    record => <li key={record.recordID.value} >{record.title.value} ({record.author.value})</li>
  )
  return arrayOfLists;
};
function RenderResult() {
  const [apiResponse, setApiResponse] = useState('***now loading ***');

  useEffect(() => {
    callRestApi().then(
      result => setApiResponse(result));
  }, []);
  return (
    <div>
      <h1>React App</h1>
      <p>{apiResponse}</p>
    </div>
  );
};
const root = createRoot(document.getElementById('root'))
root.render(
  <RenderResult />
);
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

import dataStock from "../assets/data.js";

function ExcelDataFetcher() {
  console.log(dataStock)
  const [data, setData] = useState({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: null, raw: false });

      // Extract keys from the first row (header)
      const keys = excelData[0];

      // Construct the data object
      const formattedData = excelData.slice(1).map((row) => {
        return row.reduce((acc, value, index) => {
          acc[keys[index]] = value;
          return acc;
        }, {});
      });

      setData(formattedData);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <h1>dataStock List</h1>
      <ul>
        {dataStock.map((user) => (
          <li>
            {user.Date} {user.Open} {user.[Close/Last]} {user.High} {user.Low} {user.Volume} 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExcelDataFetcher;

import React, { useState } from 'react';
import * as XLSX from 'xlsx'; 

function ExcelDataFetcher() {
  const [data, setData] = useState({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      setData(excelData);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default ExcelDataFetcher;

import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

// import Data from './data-test.js'

function ExcelDataFetcher() {
  const [data, setData] = useState({});

  // 🍀서버에서 자동으로 엑셀파일 가져오기
  // useEffect(() => {
  //   fetch('/excel') // Fetch data from the server
  //     .then((response) => response.json())
  //     .then((excelData) => setData(excelData));
  // }, []);





  const [stock, setStock] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('/data-test.js'); // Assuming data.js is in the public folder
      const dataStock = await response.json();
      setStock(dataStock);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log(stock)
  
  
  useEffect(() => {
    fetchData();
  }, []);
  // 

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

      
      <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Close Price</th>
          <th>Open Price</th>
          {/* Add other table headers for additional properties */}
        </tr>
      </thead>
      <tbody>
        {stock.map((stock, index) => (
          <tr key={index}>
            
            <td>{stock.Close}</td>
            <td>{stock.Volume}</td>
            {/* Add other table cells for additional properties */}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default ExcelDataFetcher;

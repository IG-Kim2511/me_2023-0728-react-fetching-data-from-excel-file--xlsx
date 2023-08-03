import React from 'react'



import dataStock from "../assets/data.js";


const JsonDataFetching = () => {
    console.log(dataStock)

    //🍚slice
    const dataStockSlice = dataStock.slice(0, 10);


  return (
    <div>
    
        <h1>Fetching Data from Excel Automatically</h1>
        <h3> 처음 10개 데이터만 가져옴  </h3>
        <ul>
        {dataStockSlice.map(({ Date, Open,High,Low,Volume, "Close/Last": closeLast }) => (
            <li>
            date: {Date}  open: {Open}  closeLast:{closeLast} High: {High} Low: {Low} Volume: {Volume} 
            </li>
        ))}
        </ul>
    
    </div>
  )
}

export default JsonDataFetching
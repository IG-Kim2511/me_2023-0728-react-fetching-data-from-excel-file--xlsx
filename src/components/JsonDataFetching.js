import React from 'react'



import dataStock from "../assets/data.js";


const JsonDataFetching = () => {
    console.log(dataStock)

    const dataStockSlice = dataStock.slice(0, 10);


  return (
    <div>
    
        <h1>dataStock List 처음 10개 데이터만 가져옴 </h1>
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
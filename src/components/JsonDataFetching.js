import React from 'react'



import dataStock from "../assets/data.js";


const JsonDataFetching = () => {
    console.log(dataStock)


  return (
    <div>
    
        <h1>dataStock List</h1>
        <ul>
        {dataStock.map(({ Date, Open,High,Low,Volume, "Close/Last": closeLast }) => (
            <li>
            date: {Date}  open: {Open}  closeLast:{closeLast} High: {High} Low: {Low} Volume: {Volume} 
            </li>
        ))}
        </ul>
    
    </div>
  )
}

export default JsonDataFetching
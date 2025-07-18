import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const AreaChart = ({historicalData}) => {

const [data, setData] = useState([["Date", "Prices"]])

useEffect( () => {
  let dataCopy = [["Date", "Prices"]];
  if (historicalData.prices) {
    historicalData.prices.map((item, index) => {
      dataCopy.push([`${new Date(item[0]).toLocaleString().slice(0,-5)}`, item[1]])
    })
    setData(dataCopy);
  }
}, [historicalData]) 

  return (
    <Chart
        chartType='LineChart' data={data} height="100%" legendToggle
    />
  )
}

export default AreaChart
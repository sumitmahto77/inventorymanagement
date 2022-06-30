import React from 'react';
import { useSelector } from 'react-redux';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

const Chart = () => {
  const products = useSelector(state => state.prod.products);
  console.log(products);
  
  return (
    <Bar 
    data={{
      labels : products.map((data)=>data.name),
      datasets : [{
        label : "Number of visits",
        data : products.map((data)=>data.count) ,
        backgroundColor : ["black","gray"]
      }]
    }}

    />
  )
}

export default Chart
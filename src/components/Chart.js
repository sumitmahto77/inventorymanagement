import React from 'react';
import { useSelector } from 'react-redux';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

const Chart = () => {
  const products = useSelector(state => state.prod.products);
  const topProducts=products.sort((a,b)=>b-a).slice(0,5);
  console.log(topProducts);
  
  return (
    <Bar 
    data={{
      labels : topProducts.map((data)=>data.name),
      datasets : [{
        label : "Number of visits",
        data : topProducts.map((data)=>data.count) ,
        backgroundColor : ["black","gray"]
      }]
    }}
    
    />
  )
}

export default Chart
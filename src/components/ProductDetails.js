import axios from 'axios';
import React, {useState} from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router'

const ProductDetails = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(()=>{
    axios.get(`http://localhost:4000/products/${id}`)
    .then(response =>{
      console.log(response.data);
      setProduct(response.data);
      setCount(response.data.count + 1);
    }).catch(error => console.log(error));
  },[]);
  useEffect(()=>{
    axios.patch(`http://localhost:4000/products/${id}`,{
      "count" :count
    })

  })
  return (
    <div>
      {product.name}
    </div>
  )
}

export default ProductDetails
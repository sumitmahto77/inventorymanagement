import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {deleteProduct, loadProducts} from '../redux/actions';
import axios from 'axios';

const DeleteProduct = () => {
  const products = useSelector(state => state.prod.products);
  const [stateProduct, setProductState] = useState([]);
  const dispatch = useDispatch();
  console.log(stateProduct);

  useEffect(() =>{
    setProductState(
      products.map((product) =>{
        return{
          select : false,
          id : product.id
        };
      })
    );
  },[]);

  // const handleDelete = (id) => {
  //   if(window.confirm("Are you sure?")){
  //     dispatch(deleteProduct(id));
  //   }
  // };
  const deleteProductByIds = () => {
    if(window.confirm("Are you sure?")){
      let arrayids = [];
    stateProduct.forEach(d => {
      if (d.select) {
        axios
      .delete(`http://localhost:4000/products/${d.id}`)
      .then(data => {
        console.log(data);
        dispatch(loadProducts());
      })
      .catch(err => alert(err));
      }
    });
    }
    
    
  };

  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
            <input
                type="checkbox"
                onChange={e => {
                  let value = e.target.checked;

                  setProductState(
                    stateProduct.map(product => {
                      product.select = value;
                      return product;
                    })
                  );
                }}
              />


            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Manufacturer</TableCell>
            <TableCell align="right">Price(in Rs)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
              <input
          type="checkbox"
          checked={product.select}
          onChange={e => {
            let value = e.target.checked;
            setProductState(
              stateProduct.map(sd => {
                if (sd.id === product.id) {
                  sd.select = value;
                }
                return sd;
              })
            );
          }}
        />


              </TableCell>
              <TableCell component="th" scope="row">{product.name}</TableCell>
              <TableCell align="right">{product.manufacturer}</TableCell>
              <TableCell align="right">{product.price}</TableCell>  
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => {
          deleteProductByIds();
        }}
      >
        Delete Product
      </button>

    </div>
  );
}

export default DeleteProduct
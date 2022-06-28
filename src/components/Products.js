import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Product from "./Product";
import SearchBar from "./SearchBar";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  const [error, setError] = useState(null);
  const [productList, setProductList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);
  useEffect(()=>{
    axios
      .get("http://localhost:4000/products")
      .then(response =>{
        setProductList(response.data);
        setIsLoaded(true);
      })
      .catch((error)=>{
        console.log(error);
        setIsLoaded(true);
        setError(error);
      })

  },[]);

  // return (
    // <Container>
    //   <SearchBar/>
    //   {productList.map((item) => (
    //     <Product item={item} key={item.id} />
    //   ))}
    // </Container>


  // );
  function search(items) {
    return items.filter((item) => {
        return searchParam.some((newItem) => {
            return (
                item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
            );
        });
    });
};

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container>
        <div className="search-wrapper">
          <label htmlFor="search-form">
              <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  className="search-input"
                  placeholder="Search for..."
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
              />
          </label>
        </div>
                    
          {search(productList).map((item) => (
            <Product item={item} key={item.id} />
              
          ))}
      
      </Container>
    );
  }
};

export default Products;

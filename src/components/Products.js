import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import styled from "styled-components";
import { loadProducts } from "../redux/actions";
import Product from "./Product";


const Container = styled.div`
`;
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  const [error, setError] = useState(null);
  const productList = useSelector(state => state.prod.products)
  const [isLoaded, setIsLoaded] = useState(false);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadProducts());
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
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  } else {
    return (
      <Container>
        <Wrapper>
              <input
                  type="search"
                  placeholder="Search for..."
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
              />  
        </Wrapper>
      <Wrapper>          
          {search(productList).map((item) => (
            <Product item={item} key={item.id} />   
          ))}
      </Wrapper>
      </Container>
    );
  }
};

export default Products;

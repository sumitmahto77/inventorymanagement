import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import styled from "styled-components";
import { loadProducts } from "../redux/actions";
import Product from "./Product";


const Container = styled.div`
  min-width: 280px;
`;
const Wrapper = styled.div`
    padding: 1vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Input = styled.input`
  flex:1;
  min-width: 79px;
  max-width: 300px;
`;
const Button = styled.button`
  
`;
const List = styled.ul`
  display: inline;
  list-style: none;
`;
const ListItem = styled.li`
  margin: 0vw 0vw 0vw 2vw;
  display: inline;
  overflow: hidden;
  
`;

const Products = () => {
  const productList = useSelector(state => state.prod.products);


  const [open,setOpen] = useState(false);
  const [productInfo, setProductInfo] = useState([false,false,false,false]);
  const handleOnChange = (position) => {
    const updatedCheckedState = productInfo.map((item, index) =>
      index === position ? !item : item
    );
    setProductInfo(updatedCheckedState);
  }

  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadProducts());
  },[]);

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

  return (
    <Container>
      <Wrapper >
        <Input
            type="search"
            placeholder="Search for..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
        />  
        {open ?
          <List>
            <ListItem><input type="checkbox" onChange={()=>handleOnChange(0)} />Name</ListItem>
            <ListItem><input type="checkbox" onChange={()=>handleOnChange(1)} />Price</ListItem>
            <ListItem><input type="checkbox" onChange={()=>handleOnChange(2)} />Manufacturer</ListItem>
            <ListItem><input type="checkbox" onChange={()=>handleOnChange(3)} />Quantity</ListItem>
          </List>
          :<></>}
        <Button onClick={()=>setOpen(!open)}>
          Customize  
        </Button>

      </Wrapper>
    <Wrapper>          
        {search(productList).map((item) => (
          <Product item={item} key={item.id} info={productInfo} />   
        ))}
    </Wrapper>
    </Container>
  );
};

export default Products;

import { Edit, Info } from '@mui/icons-material';
import styled from "styled-components";
import { Link } from 'react-router-dom';
  
 
const Infos = styled.div`
opacity: 0;
width: 100%;
height: 80%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;
const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 400px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;
&:hover ${Infos}{
  opacity: 1;
}`;
  
const Wrapper = styled.div`
  position: absolute;
  top:80%;
  max-height: 20%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 60%;
  z-index: 2;
  top: 50px;
  position: absolute;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.5);
  }
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 0;
  margin:0;
  justify-content: center;

`;
const ListItem = styled.li`
  flex:1;
  min-width: 35%;
  margin:0.5vw;
  overflow: hidden;
`;

const Product = ({ item,info }) => { 
  return (
    <Container>
      <Image src={item.img} />
      <Infos>
        <Icon>
            <Link to={`/edit/${item.id}`} style={{ color: 'inherit'}}>
              <Edit />
            </Link>
        </Icon>
        <Icon>
          <Link to={`/productdetails/${item.id}`} style={{ color:'inherit' }}>
            <Info />
          </Link>
        </Icon>  
      </Infos>
      <Wrapper>
        <List>
            {info[0] && <ListItem>{item.name}</ListItem>}
            {info[1] && <ListItem>{item.price}</ListItem>}
            {info[2] && <ListItem>{item.manufacturer}</ListItem>}
            {info[3] && <ListItem>{item.quantity}</ListItem>}
        </List>
      </Wrapper>
    </Container>
  );
};

export default Product;
  
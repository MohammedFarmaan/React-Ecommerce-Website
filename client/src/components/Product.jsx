// import {
//   FavoriteBorderOutlined,
//   Search,
//   ShoppingBagOutlined,
// } from "@mui/icons-material";
// import styled from "styled-components";

// const Info = styled.div`
//   opacity: 0;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.2);
//   z-index: 3;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.5s ease;
// `;

// const Container = styled.div`
//   flex: 1;
//   position: relative;
//   margin: 5px;
//   min-width: 280px;
//   height: 350px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #e9ecef;

//   &:hover ${Info} {
//     opacity: 1;
//   }
// `;
// /*const Circle = styled.div`
//     width: 200px;
//     height: 200px;
//     position: absolute;
//     border-radius: 50%;
//     background-color: white;
// `*/

// const Image = styled.img`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 75%;
//   z-index: 2;
// `;

// const Icon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 10px;
//   transition: all 0.5s ease;
//   cursor: pointer;

//   &:hover {
//     background-color: whitesmoke;
//     transform: scale(1.1);
//   }
// `;

// const Product = ({ item }) => {
//   return (
//     <Container>
//       {/*<Circle/>*/}
//       <Image src={item.image} />
//       <Info>
//         <Icon>
//           <ShoppingBagOutlined />
//         </Icon>

//         <Icon>
//           <Search />
//         </Icon>

//         <Icon>
//           <FavoriteBorderOutlined />
//         </Icon>
//       </Info>
//     </Container>
//   );
// };

// export default Product;

import {
  FavoriteBorderOutlined,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
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
  &:hover {
    opacity: 1;
  }
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
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.image} />
      <Info>
        <Icon>
          <ShoppingBagOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            {/* <Link to = {`/product/`}/> */}
            <Search />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

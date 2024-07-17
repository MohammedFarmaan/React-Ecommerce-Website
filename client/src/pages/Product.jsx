import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100px" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColour = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  margin: 30px;
  padding: 15px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #ced4da;
  }
`;

const Product = ({ cat, filters, sort }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <Container>
      {/* <Announcement /> */}
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>₹ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Colour</FilterTitle>
              {Array.isArray(product.colour) &&
                product.colour.map((c) => (
                  <FilterColour color={c.toLowerCase()} key={c} />
                ))}
              {/* <FilterColour color={product.colour} /> */}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {Array.isArray(product.size) &&
                  product.size.map((s) => (
                    <FilterSizeOption key={s}>
                      {s.toLowerCase()}
                    </FilterSizeOption>
                  ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// import axios from "axios";
// import Announcement from "../components/Announcement";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import Newsletter from "../components/Newsletter";
// import { Add, Remove } from "@mui/icons-material";
// import { mobile } from "../responsive";

// const Container = styled.div``;

// const Wrapper = styled.div`
//   padding: 50px;
//   display: flex;
//   ${mobile({ flexDirection: "column", padding: "10px" })}
// `;

// const ImgContainer = styled.div`
//   flex: 1;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 70vh;
//   object-fit: cover;
//   ${mobile({ height: "40vh" })}
// `;

// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 0px 50px;
//   ${mobile({ padding: "10px" })}
// `;

// const Title = styled.h1`
//   font-weight: 200;
// `;

// const Desc = styled.p`
//   margin: 20px 0px;
// `;

// const Price = styled.span`
//   font-weight: 100;
//   font-size: 40px;
// `;

// const FilterContainer = styled.div`
//   width: 50%;
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ width: "100px" })}
// `;

// const Filter = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const FilterTitle = styled.span`
//   font-size: 20px;
//   font-weight: 200;
// `;

// const FilterColour = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   margin: 0px 5px;
//   cursor: pointer;
// `;

// const FilterSize = styled.select`
//   margin-left: 10px;
//   padding: 5px;
// `;

// const FilterSizeOption = styled.option``;

// const AddContainer = styled.div`
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({ width: "100%" })}
// `;

// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   font-weight: 700;
// `;

// const Amount = styled.span`
//   width: 30px;
//   height: 30px;
//   border-radius: 10px;
//   border: 1px solid black;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0px 5px;
// `;

// const Button = styled.button`
//   margin: 30px;
//   padding: 15px;
//   background-color: white;
//   border: 1px solid black;
//   cursor: pointer;
//   font-weight: 500;

//   &:hover {
//     background-color: #ced4da;
//   }
// `;

// const Product = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:4000/api/products/${id}`);
//         setProduct(res.data);
//       } catch (err) {
//         console.error("Failed to fetch product:", err);
//       }
//     };
//     getProduct();
//   }, [id]);

//   return (
//     <Container>
//       <Announcement />
//       <Navbar />
//       <Wrapper>
//         <ImgContainer>
//           <Image src={product.image} />
//         </ImgContainer>
//         <InfoContainer>
//           <Title>{product.title}</Title>
//           <Desc>{product.description}</Desc>
//           <Price>₹ {product.price}</Price>
//           <FilterContainer>
//             <Filter>
//               <FilterTitle>Colour</FilterTitle>
//               {product.colours?.map((c) => (
//                 <FilterColour key={c} color={c} />
//               ))}
//             </Filter>
//             <Filter>
//               <FilterTitle>Size</FilterTitle>
//               <FilterSize>
//                 {product.sizes?.map((s) => (
//                   <FilterSizeOption key={s}>{s}</FilterSizeOption>
//                 ))}
//               </FilterSize>
//             </Filter>
//           </FilterContainer>
//           <AddContainer>
//             <AmountContainer>
//               <Remove />
//               <Amount>1</Amount>
//               <Add />
//             </AmountContainer>
//             <Button>ADD TO CART</Button>
//           </AddContainer>
//         </InfoContainer>
//       </Wrapper>
//       <Newsletter />
//       <Footer />
//     </Container>
//   );
// };

// export default Product;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// import axios from "axios";
// import Announcement from "../components/Announcement";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import Newsletter from "../components/Newsletter";
// import { Add, Remove } from "@mui/icons-material";
// import { mobile } from "../responsive";

// const Container = styled.div``;

// const Wrapper = styled.div`
//   padding: 50px;
//   display: flex;
//   ${mobile({ flexDirection: "column", padding: "10px" })}
// `;

// const ImgContainer = styled.div`
//   flex: 1;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 70vh;
//   object-fit: cover;
//   ${mobile({ height: "40vh" })}
// `;

// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 0px 50px;
//   ${mobile({ padding: "10px" })}
// `;

// const Title = styled.h1`
//   font-weight: 200;
// `;

// const Desc = styled.p`
//   margin: 20px 0px;
// `;

// const Price = styled.span`
//   font-weight: 100;
//   font-size: 40px;
// `;

// const FilterContainer = styled.div`
//   width: 50%;
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ width: "100%" })}
// `;

// const Filter = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const FilterTitle = styled.span`
//   font-size: 20px;
//   font-weight: 200;
// `;

// const FilterColour = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   margin: 0px 5px;
//   cursor: pointer;
// `;

// const FilterSize = styled.select`
//   margin-left: 10px;
//   padding: 5px;
// `;

// const FilterSizeOption = styled.option``;

// const AddContainer = styled.div`
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({ width: "100%" })}
// `;

// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   font-weight: 700;
// `;

// const Amount = styled.span`
//   width: 30px;
//   height: 30px;
//   border-radius: 10px;
//   border: 1px solid black;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0px 5px;
// `;

// const Button = styled.button`
//   margin: 30px;
//   padding: 15px;
//   background-color: white;
//   border: 1px solid black;
//   cursor: pointer;
//   font-weight: 500;

//   &:hover {
//     background-color: #ced4da;
//   }
// `;

// const Product = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:4000/api/products/find/${productId}`
//         );
//         setProduct(res.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getProduct();
//   }, [productId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <Container>
//       {/* <Announcement /> */}
//       <Navbar />
//       <Wrapper>
//         <ImgContainer>
//           <Image src={product.image} alt={product.title} />
//         </ImgContainer>
//         <InfoContainer>
//           <Title>{product.title}</Title>
//           <Desc>{product.description}</Desc>
//           <Price>₹ {product.price}</Price>
//           <FilterContainer>
//             <Filter>
//               <FilterTitle>Colour</FilterTitle>
//               {product.colours?.map((c) => (
//                 <FilterColour key={c} color={c} />
//               ))}
//             </Filter>
//             <Filter>
//               <FilterTitle>Size</FilterTitle>
//               <FilterSize>
//                 {product.sizes?.map((s) => (
//                   <FilterSizeOption key={s}>{s}</FilterSizeOption>
//                 ))}
//               </FilterSize>
//             </Filter>
//           </FilterContainer>
//           <AddContainer>
//             <AmountContainer>
//               <Remove />
//               <Amount>1</Amount>
//               <Add />
//             </AmountContainer>
//             <Button>ADD TO CART</Button>
//           </AddContainer>
//         </InfoContainer>
//       </Wrapper>
//       <Newsletter />
//       <Footer />
//     </Container>
//   );
// };

// export default Product;

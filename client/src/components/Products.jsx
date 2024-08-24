// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import Product from "./Product";

// const Container = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

// const Products = ({ cat, filters, sort }) => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await axios.get(
//           cat
//             ? `http://localhost:4000/api/products?category=${cat}`
//             : "http://localhost:4000/api/products"
//         );
//         console.log("Fetched products:", res.data); // Log API response
//         setProducts(res.data);
//       } catch (err) {
//         console.error("Failed to fetch products:", err); // Log any errors
//       }
//     };
//     getProducts();
//   }, [cat]);

//   useEffect(() => {
//     if (cat) {
//       setFilteredProducts(
//         products.filter((item) =>
//           Object.entries(filters).every(([key, value]) =>
//             item[key.toLowerCase()]?.includes(value)
//           )
//         )
//       );
//     } else {
//       setFilteredProducts(products);
//     }
//   }, [products, cat, filters]);

//   useEffect(() => {
//     if (sort === "newest") {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//       );
//     } else if (sort === "price: low to high") {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => a.price - b.price)
//       );
//     } else if (sort === "price: high to low") {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => b.price - a.price)
//       );
//     }
//   }, [sort]);

//   return (
//     <Container>
//       {filteredProducts.length > 0 ? (
//         filteredProducts.map((item, index) => (
//           <Product key={index} item={item} />
//         ))
//       ) : (
//         <p>No products found</p> // Display message if no products are found
//       )}
//     </Container>
//   );
// };

import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductWrapper = styled.div`
  width: 250px; /* Set your desired width */
  margin-bottom: 20px;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://react-ecommerce-website-api.onrender.com/api/products?category=${cat}`
            : "https://react-ecommerce-website-api.onrender.com/api/products"
        );
        // console.log("Fetched products:", res.data); // Log API response
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err); // Log any errors
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (cat) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key.toLowerCase()]?.includes(value)
          )
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "price: low to high") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "price: high to low") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item, index) => (
          // <ProductWrapper key={index}>
          //   <Product item={item} />
          // </ProductWrapper>
          <Product key={index} item={item} />
        ))
      ) : (
        <p>No products found</p> // Display message if no products are found
      )}
    </Container>
  );
};

export default Products;

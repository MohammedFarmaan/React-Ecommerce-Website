import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border-color: black;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      {/* <Announcement /> */}
      <Navbar />
      <Title>
        {cat ? `${cat.charAt(0).toUpperCase()}${cat.slice(1)}` : "All Products"}
      </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter:</FilterText>
          <Select name="Colour" onChange={handleFilters}>
            <Option disabled>Colour</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Grey</Option>
            <Option>Brown</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Beige</Option>
            <Option>Pink</Option>
            <Option>Yellow</Option>
            <Option>MultiColour</Option>
          </Select>
          <Select name="Size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>xs</Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>xl</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            {/* <Option value="popular">Popular</Option> */}
            <Option value="newest">Newest</Option>
            <Option value="price: low to high">Price: low to high</Option>
            <Option value="price: high to low">Price: high to low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import styled from "styled-components";
// import Announcement from "../components/Announcement";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import Newsletter from "../components/Newsletter";
// import Products from "../components/Products";
// import { mobile } from "../responsive";

// const Container = styled.div``;

// const Title = styled.h1`
//   margin: 20px;
// `;

// const FilterContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const Filter = styled.div`
//   margin: 20px;
//   ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
// `;

// const FilterText = styled.span`
//   font-size: 20px;
//   font-weight: 600;
//   margin-right: 20px;
//   ${mobile({ marginRight: "0px" })}
// `;

// const Select = styled.select`
//   padding: 10px;
//   margin-right: 20px;
//   border-color: black;
//   ${mobile({ margin: "10px 0px" })}
// `;

// const Option = styled.option``;

// const ProductList = () => {
//   const location = useLocation();
//   const path = location.pathname; // Get the current pathname
//   const [filters, setFilters] = useState({});
//   const [sort, setSort] = useState("newest");
//   const [category, setCategory] = useState("");

//   useEffect(() => {
//     // Determine category based on current pathname
//     if (path === "/products") {
//       setCategory(""); // No category filter for all products
//     } else if (path.startsWith("/products/")) {
//       setCategory(path.split("/")[2]); // Extract category from pathname
//     }
//   }, [path]);

//   const handleFilters = (e) => {
//     const { name, value } = e.target;
//     setFilters({
//       ...filters,
//       [name]: value,
//     });
//   };

//   return (
//     <Container>
//       {/* <Announcement /> */}
//       <Navbar />
//       <Title>
//         {category
//           ? `${category.charAt(0).toUpperCase()}${category.slice(1)}`
//           : "All Products"}
//       </Title>
//       <FilterContainer>
//         <Filter>
//           <FilterText>Filter:</FilterText>
//           <Select name="Colour" onChange={handleFilters}>
//             <Option disabled>Colour</Option>
//             <Option>White</Option>
//             <Option>Black</Option>
//             <Option>Grey</Option>
//             <Option>Brown</Option>
//             <Option>Red</Option>
//             <Option>Blue</Option>
//             <Option>Green</Option>
//             <Option>Beige</Option>
//             <Option>Pink</Option>
//             <Option>Yellow</Option>
//             <Option>MultiColour</Option>
//           </Select>
//           <Select name="Size" onChange={handleFilters}>
//             <Option disabled>Size</Option>
//             <Option>xs</Option>
//             <Option>s</Option>
//             <Option>m</Option>
//             <Option>l</Option>
//             <Option>xl</Option>
//           </Select>
//         </Filter>
//         <Filter>
//           <FilterText>Sort:</FilterText>
//           <Select onChange={(e) => setSort(e.target.value)}>
//             <Option value="popular">Popular</Option>
//             <Option value="newest">Newest</Option>
//             <Option value="price: low to high">Price: low to high</Option>
//             <Option value="price: high to low">Price: high to low</Option>
//           </Select>
//         </Filter>
//       </FilterContainer>
//       <Products cat={category} filters={filters} sort={sort} />{" "}
//       {/* Pass category to Products component */}
//       <Newsletter />
//       <Footer />
//     </Container>
//   );
// };

// export default ProductList;

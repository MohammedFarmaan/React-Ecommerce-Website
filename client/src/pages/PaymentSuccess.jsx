import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  height: 70vh;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid gray;
`;
const Wrapper = styled.div`
  padding: 20px;
  background-color: white;
  ${mobile({ width: "85%" })}
`;
const Button = styled.button`
  width: 100%;
  border: solid 1px white;
  padding: 12px;
  background-color: #343a40;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  ${mobile({ width: "50%", padding: "10px" })}
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const PaymentSuccess = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <img
            className="img"
            src="https://media.istockphoto.com/vectors/order-success-icon-vector-id882905872?k=20&m=882905872&s=170667a&w=0&h=oKyeMMsffutor2B0f2ZDvbwUj74KW22IZa52e9V2QEA="
            alt="order success"
            width="150"
            height="150"
          />
          <Desc>Your order is successful</Desc>
          <a href="/">
            <Button>GO BACK</Button>
          </a>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default PaymentSuccess;

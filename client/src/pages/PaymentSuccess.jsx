import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
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
  return (
    <>
      <Navbar />

      <Container>
        <Wrapper>
          <Button>GO BACK</Button>
          <Desc>Your order is successful</Desc>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default PaymentSuccess;

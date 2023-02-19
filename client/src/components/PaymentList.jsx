import styled from "styled-components";
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
  padding: 20px;
  background-color: #343a40;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  ${mobile({ width: "50%", padding: "10px" })}
`;
const PaymentList = () => {
  return (
    <Container>
      <Wrapper>
        <Button>ORDER NOW</Button>
      </Wrapper>
    </Container>
  );
};

export default PaymentList;

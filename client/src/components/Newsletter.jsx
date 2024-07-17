import styled from "styled-components";
import { Send } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #fca311;
  font-size: 50px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 300;
  padding: 5px;
  margin-bottom: 20px;
  letter-spacing: 2px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 25%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding: 10px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #343a40;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Subscribe</Title>
      <Desc>
        SIGN UP FOR 10% OFF YOUR FIRST ORDER AND GET INFORMATION, LATEST NEWS
        AND OTHER INTERESTING OFFERS FROM SHOESTYLE.
      </Desc>
      <InputContainer>
        <Input placeholder="Email address" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

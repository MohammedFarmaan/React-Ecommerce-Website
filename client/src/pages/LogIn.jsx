import styled from "styled-components";
import { mobile } from "../responsive";
import bgimg from "../assets/bgimg.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgimg});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 35%;
  padding: 20px;
  ${mobile({ width: "85%" })}
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 20%;
  border: solid 1px white;
  padding: 15px 20px;
  background-color: #343a40;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  ${mobile({ width: "40%" })}
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: white;
`;

const LogIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Log In</Title>
        <Form>
          <Input placeholder="Email Address" />
          <Input placeholder="Password" />
          <Button>Sign In</Button>
          <Link>Forgot password</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LogIn;

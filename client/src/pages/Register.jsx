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
  width: 50%;
  padding: 20px;
  ${mobile({ width: "100%" })}
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
  justify-content: space-around;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  ${mobile({ textAlign: "center" })}
  color: white;
`;

const Button = styled.button`
  width: 30%;
  border: solid 1px white;
  padding: 15px 20px;
  background-color: #343a40;
  color: white;
  cursor: pointer;
  ${mobile({ width: "60%" })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Email Address" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By registering, you agree our <b>Terms & Conditions</b> and{" "}
            <b>Privacy and Cookie Policy</b>
          </Agreement>
          <Button>Register</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #424242;
  color: #fff;
  width: 400px;
  height: 400px;
  border-radius: 20px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  width: 100%;
  text-align: center;
  height: 10%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  height: 70%;
`;

const SingleRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const EnhancedButton = styled.button`
  background: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  align-self: center;
  margin-top: 10px;

  &:hover {
    background: #ff0000;
    color: #fff;
  }
`;

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    axios
      .post("http://localhost:1234/auth/login", user)
      .then((res) => {
        sessionStorage.setItem("token", res.data.content);
        console.log("response", res.data.content);
      })
      .catch((err) => {
        console.log("error", err.response);
      });
  };

  return (
    <>
      <Container>
        <Title>Login</Title>
        <FormContainer>
          <form>
            <SingleRow>E-mail</SingleRow>
            <SingleRow>
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </SingleRow>
            <SingleRow>Hasło</SingleRow>
            <SingleRow>
              <input
                type="text"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </SingleRow>
            <SingleRow>
              <EnhancedButton onClick={handleSubmit}>WYSLIJ</EnhancedButton>
            </SingleRow>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

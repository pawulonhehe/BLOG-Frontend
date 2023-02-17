import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #000000af;
  width: 40%;
  height: 100vh;
  position: absolute;
`;

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: url(https://i.imgur.com/AsyWfzH.jpeg);
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  text-align: center;
  height: 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #fff;
  margin-top: 50px;
`;

const TitleOfSite = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 40px;
  color: #939393;
  width: 100%;
  text-align: center;
  height: 40px;
  top: 0;
  position: absolute;
  margin-top: 50px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  height: 30%;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const EnhancedButton = styled.button`
  background: #ff3737;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 150px;
  height: 45px;
  align-self: center;
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
  x &:hover {
    background: #adadad;
  }
`;

const RegisterButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  text-decoration: underline;
  margin-top: 12px;
`;

const EnhancedInput = styled.input`
  background: #d9d9d9;
  border: none;
  border-radius: 8px;
  height: 40px;
  width: 300px;
  font-size: 24px;
  padding-left: 10px;

  &:focus {
    border: none;
    outline: none;
    background: #f0f0f0;
  }
`;

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    axios
      .post("http://localhost:1234/auth/login", user)
      .then((res) => {
        sessionStorage.setItem("token", res.data.content);
        console.log("response", res.data.content);
        navigate("/");
      })
      .catch((err) => {
        console.log("error", err.response);
        return (
          <div>
            <h1>Wystąpił błąd</h1>
            <p>{err.response.data.message}</p>
          </div>
        );
      });
  };

  return (
    <Container>
      <LoginContainer>
        <TitleOfSite>EPICGOALZ</TitleOfSite>
        <Title>ZALOGUJ</Title>
        <FormContainer>
          <form>
            <Row>E-mail</Row>
            <Row>
              <EnhancedInput
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Row>
            <Row>Hasło</Row>
            <Row>
              <EnhancedInput
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Row>
            <Row>
              <EnhancedButton onClick={handleSubmit}>Potwierdź</EnhancedButton>
            </Row>
            <Row>
              <RegisterButton onClick={() => navigate("/register")}>
                Zarejestruj
              </RegisterButton>
            </Row>
          </form>
        </FormContainer>
      </LoginContainer>
      <Background />
    </Container>
  );
};

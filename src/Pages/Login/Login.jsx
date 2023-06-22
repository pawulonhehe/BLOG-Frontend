import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock, FaMailBulk } from "react-icons/fa";

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
  display: flex;
  flex-direction: row;
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
  margin-top: 16px;
`;

const EnhancedInput = styled.input`
  background: #b8b8b8;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 40px;
  width: 300px;
  font-size: 16px;
  font-weight: 600;
  padding-left: 10px;
  margin-top: 15px;

  &:focus {
    border: none;
    outline: none;
    background: #dddddd;
  }
`;

const IconContainer = styled.div`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: grey;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 20%;
  margin-top: 15px;
  height: 42px;
  align-items: center;
  justify-content: space-around;
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
        localStorage.setItem("token", res.data.content);
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
        <Title>Zaloguj</Title>
        <FormContainer>
          <form>
            <Row>
              <IconContainer>
                <FaMailBulk />
              </IconContainer>
              <EnhancedInput
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e-mail"
              />
            </Row>
            <Row>
              <IconContainer>
                <FaLock />
              </IconContainer>
              <EnhancedInput
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="hasło"
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

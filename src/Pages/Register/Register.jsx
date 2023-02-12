import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #424242;
  color: #fff;
  width: 400px;
  height: 450px;
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

export const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    axios
      .post("http://localhost:1234/auth/register", user)
      .then((res) => {
        sessionStorage.setItem("token", res.data.key);
        console.log("response", res.data.content);
        navigate("/");
      })
      .catch((err) => {
        console.log("error", err.response);
      });
  };

  return (
    <>
      <Container>
        <Title>Zarejestruj</Title>
        <FormContainer>
          <form>
            <SingleRow>Nazwa użytkownika</SingleRow>
            <SingleRow>
              <EnhancedInput
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </SingleRow>
            <SingleRow>E-mail</SingleRow>
            <SingleRow>
              <EnhancedInput
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </SingleRow>
            <SingleRow>Hasło</SingleRow>
            <SingleRow>
              <EnhancedInput
                type="password"
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

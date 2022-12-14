import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: #fff;
`;

export const Home = () => {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/login");
  };

  return (
    <>
      <Container>
        <h1>Home</h1>
        <button onClick={Login}> ZALOGUJ </button>
      </Container>
    </>
  );
};

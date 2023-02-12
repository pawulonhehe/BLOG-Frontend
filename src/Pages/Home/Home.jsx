import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background: #171717;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 100%;
  background: #939393;
`;

const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 80%;
  background: #292929;
  color: #fff;
  border-radius: 10px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #969696;
  margin-top: 50px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  background: #424242;
  width: 300px;
  height: 100%;
  margin-left: 100px;
  align-items: center;
`;

const EnhancedButton = styled.div`
  display: flex;
  width: 250px;
  background: white;
  border-radius: 10px;
  height: 50px;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
`;

const AdContainer = styled.div`
  display: flex;
  width: 250px;
  background: white;
  height: 500px;
  margin-top: 50px;
  border-radius: 10px;
`;

const Logo = styled.svg`
  width: 50px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #c2bfbf;
  width: 900px;
  height: 100%;
  margin-left: 70px;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  background: #424242;
  width: 350px;
  height: 100%;
  margin-left: 70px;
`;

export const Home = () => {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/login");
  };

  return (
    <>
      <Header>
        <HeaderLogo></HeaderLogo>
        <LoginButton onClick={Login}>Login</LoginButton>
      </Header>
      <Container>
        <LeftSide>
          <EnhancedButton>
            <Logo></Logo>DLA CIEBIE
          </EnhancedButton>
          <EnhancedButton>
            <Logo></Logo>POPULARNE
          </EnhancedButton>
          <AdContainer> tu beda reklamki</AdContainer>
        </LeftSide>
        <Content></Content>
        <RightSide></RightSide>
      </Container>
    </>
  );
};

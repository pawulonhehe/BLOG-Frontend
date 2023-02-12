import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #424242;
  width: 900px;
  height: 500px;
  border-radius: 20px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 870px;
  height: 370px;
  border-radius: 16px;
`;

const Footer = styled.div`
  display: flex;
  width: 870px;
  height: 50px;
  background: #d9d9d9;
  border-radius: 16px;
  align-items: center;
`;

const EnhancedButton = styled.button`
  display: flex;
  width: 150px;
  border-radius: 15px;
  height: 40px;
  border: none;
  margin-left: 8px;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  color: #424242;
`;

const Logo = styled.svg`
  width: 40px;
  height: 25px;
  color: #424242;
  margin-left: 8px;
`;

const Post = () => {
  return (
    <Container>
      <Content></Content>
      <Footer>
        <EnhancedButton>
          <Logo>
            <FaHeart size={25} />
          </Logo>
          LUBIĘ TO
        </EnhancedButton>
      </Footer>
    </Container>
  );
};

export default Post;

import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #424242;
  width: 750px;
  height: 500px;
  border-radius: 20px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  width: 750px;
  height: 50px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

const HeaderText = styled.div`
  display: flex;
  width: 63%;
  height: 100%;
  align-items: center;
  margin-left: 3%;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
`;

const HeaderHashtag = styled.div`
  display: flex;
  width: 10%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #fff;
  font-size: 12px;
`;

const HashtagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  border-radius: 10px;
  height: 20px;
  width: 50px;
`;

const HeaderAuthor = styled.div`
  display: flex;
  width: 10%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #fff;
  font-size: 12px;
`;

const HeaderDate = styled.div`
  display: flex;
  width: 12%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 410px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  align-items: center;
  color: #fff;
  font-family: "Roboto", sans-serif;
`;

const Footer = styled.div`
  display: flex;
  width: 730px;
  height: 50px;
  background: #d9d9d9;
  border-radius: 14px;
  align-items: center;
  position: absolute;
  margin-top: 390px;
`;

const EnhancedButton = styled.button`
  display: flex;
  width: 140px;
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

const LikeCounter = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 12px;
  background: #424242;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 35px;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
`;

const Post = (props) => {
  console.log(props);
  return (
    <Container>
      <Header>
        <HeaderText>{props.title}</HeaderText>
        <HeaderHashtag>
          <HashtagContainer>{props.category_name}</HashtagContainer>
        </HeaderHashtag>
        <HeaderAuthor>{props.author}</HeaderAuthor>
        <HeaderDate>{props.date}</HeaderDate>
      </Header>
      <Content>{props.content}</Content>
      <Footer>
        <EnhancedButton>
          <Logo>
            <FaHeart size={25} />
          </Logo>
          <LikeCounter>{props.likes}</LikeCounter>
          LUBIĘ TO
        </EnhancedButton>
      </Footer>
    </Container>
  );
};

export default Post;

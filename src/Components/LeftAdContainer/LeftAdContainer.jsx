import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #d9d9d9;
  width: 300px;
  height: 700px;
  border-radius: 20px;
  margin-top: 20px;
  background: url("https://i.pinimg.com/564x/ac/65/d1/ac65d123ead7c59a3096dad843eb9919.jpg")
    center bottom no-repeat;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 24px;
  text-align: center;
  justify-content: center;
`;

const Article = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SubArticle = styled.div`
  display: flex;
  width: 100%;
  margin-left: 20px;
  font-size: 18px;
  color: #9c9c9c;
  justify-content: center;
`;

const LeftAdContainer = () => {
  return (
    <Container>
      <Article>ULTRACE 2023</Article>
      <SubArticle>10-11 july</SubArticle>
    </Container>
  );
};

export default LeftAdContainer;

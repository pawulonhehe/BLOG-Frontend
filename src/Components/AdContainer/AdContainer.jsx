import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #d9d9d9;
  width: 350px;
  height: 400px;
  border-radius: 20px;
  margin-top: 20px;
  background: url("https://i.pinimg.com/564x/a0/58/75/a0587559efb03b87c546a88f97f37e91.jpg")
    center top no-repeat;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 24px;
  text-align: center;
  justify-content: flex-end;
`;

const Article = styled.div`
  display: flex;
  width: 100%;
  margin-left: 20px;
`;

const SubArticle = styled.div`
  display: flex;
  width: 100%;
  margin-left: 20px;
  font-size: 18px;
  color: #9c9c9c;
  margin-bottom: 10px;
`;

const AdContainer = () => {
  return (
    <Container>
      <Article>Barbie</Article>
      <SubArticle>Returns to theaters 21 july</SubArticle>
    </Container>
  );
};

export default AdContainer;

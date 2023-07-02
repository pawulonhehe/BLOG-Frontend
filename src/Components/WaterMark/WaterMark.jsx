import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 12px;
  color: #c7c7c7;
  margin-right: 10px;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
`;

const WaterMark = () => {
  return <Container>Designed by Paweł Kardaś</Container>;
};

export default WaterMark;

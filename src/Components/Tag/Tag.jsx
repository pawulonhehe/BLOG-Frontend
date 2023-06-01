import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background: #ff3737;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 14px;
  align-items: center;
  border-radius: 10px;
  width: 100px;
  height: 25px;
  justify-content: center;
`;

const Tag = (props) => {
  return <Container>{props.name}</Container>;
};

export default Tag;

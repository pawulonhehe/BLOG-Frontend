import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background: #171717;
  color: #c9c9c9;
  border-radius: 3px;
  width: 100px;
  height: 25px;
  justify-content: center;
`;

const Tag = (props) => {
  return <Container>{props.name}</Container>;
};

export default Tag;

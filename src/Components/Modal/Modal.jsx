import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #292929;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  margin-top: -150px;
  z-index: 1;
`;

const Modal = () => {
  return <h1> Jesteś pewien? </h1>;
};

export default Modal;

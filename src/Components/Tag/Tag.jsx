import axios from "axios";
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

  &:hover {
    cursor: pointer;
    background: #460000;
  }
`;

const Tag = (props) => {
  const handleTagDelete = (tagname) => {
    axios
      .delete(`http://localhost:1234/tags/deleteTag/${tagname.id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container key={props.id} onClick={() => handleTagDelete(props)}>
        {props.name}
      </Container>
    </>
  );
};

export default Tag;

// try to move logic inside TagManager file

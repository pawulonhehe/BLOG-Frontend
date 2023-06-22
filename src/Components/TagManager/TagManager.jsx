import React, { useEffect } from "react";
import Tag from "../Tag/Tag";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 99.5%;
  height: 78.5%;
  color: #c9c9c9;
  margin: 5px;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  color: #000000;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 20px;
  align-items: center;
  justify-content: center;
`;

const TagContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: #c9c9c9;
  margin: 5px;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const AddTagContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: #c9c9c9;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const EnhancedButton = styled.div`
  display: flex;
  width: 100px;
  height: 30px;
  border-radius: 12px;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #d9d9d9;
  background: #424242;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #ff3737;
    color: #ffffff;
  }
`;

const EnhancedInput = styled.input`
  display: flex;
  width: 100px;
  height: 30px;
  border-radius: 12px;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 900;
  color: #000000;
  margin-bottom: 12px;
  border: none;
  justify-content: center;
  text-align: center;
`;

const TagManager = () => {
  const [ExistingTags, setExistingTags] = useState([]);
  const [NewTag, setNewTag] = useState("");

  const AddTag = () => {
    if (NewTag !== "") {
      axios
        .post("http://localhost:1234/tags/addTag", {
          name: NewTag,
        })
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Wpisz nazwę tagu!");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:1234/tags")
      .then((res) => {
        setExistingTags(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Title>Istniejące tagi</Title>
      <TagContainer>
        {ExistingTags.map((tag) => {
          return <Tag {...tag} />;
        })}
        <Title>Stwórz nowy tag</Title>
        <AddTagContainer>
          <EnhancedInput
            placeholder="Nazwa tagu"
            type="text"
            onChange={(e) => {
              setNewTag(e.target.value);
            }}
          />
          <EnhancedButton onClick={AddTag}>Dodaj</EnhancedButton>
        </AddTagContainer>
      </TagContainer>
    </Container>
  );
};

export default TagManager;

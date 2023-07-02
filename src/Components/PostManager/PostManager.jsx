import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 500px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
  justify-content: center;
`;

const EnhancedTitleInput = styled.input`
  background: #fff;
  font-size: 20px;
  font-weight: 800;
  font-family: "Roboto", sans-serif;
  width: 450px;
  height: 40px;
  border-radius: 10px;
  text-align: center;
`;

const EnhancedContentInput = styled.textarea`
  background: #fff;
  font-size: 16px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  width: 450px;
  height: 150px;
  border-radius: 10px;
  text-align: center;
`;

const EnhancedSelect = styled.select`
  background: #fff;
  width: 455px;
  height: 40px;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
`;

const EnhancedFileInput = styled.input`
  background: #fff;
  width: 455px;
  height: 40px;
  border-radius: 10px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
`;

const PostManager = () => {
  const [title, setTitle] = React.useState();
  const [content, setContent] = React.useState();
  const [tags, setTags] = React.useState();
  const [image, setImage] = React.useState();
  const [selectedTags, setSelectedTags] = React.useState("");

  useEffect(() => {
    axios
      .get("http://localhost:1234/tags/")
      .then((res) => {
        setTags(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddPost = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:1234/posts/addPost",
        {
          title: title,
          content: content,
          category_fk: selectedTags,
          image: image,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <FormContainer>
        <form>
          <Row>
            <EnhancedTitleInput
              type="text"
              placeholder="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Row>
          <Row>
            <EnhancedContentInput
              type="text"
              placeholder="content"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </Row>
          <Row>
            <EnhancedSelect
              onChange={(e) => {
                setSelectedTags(e.target.value);
              }}
            >
              <option value="0">Wybierz tagi</option>
              {tags &&
                tags.map((tag) => {
                  return (
                    <option key={tag.id} value={tag.id}>
                      {tag.name}
                    </option>
                  );
                })}
            </EnhancedSelect>
          </Row>
          <Row>
            <EnhancedFileInput
              type="file"
              placeholder="zdjecie"
              onChange={(newValue) => {
                setImage(newValue);
              }}
            />
          </Row>
          <Row>
            <button onClick={handleAddPost}>Add post</button>
          </Row>
        </form>
      </FormContainer>
    </Container>
  );
};

export default PostManager;

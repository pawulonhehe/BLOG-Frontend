import React, { useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #424242;
  width: 60%;
  height: 500px;
  border-radius: 20px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

const EnhancedTitleInput = styled.input`
  background: #fff;
  font-size: 20px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  width: 250px;
  height: 40px;
  border-radius: 10px;
`;

const EnhancedContentInput = styled.textarea`
  background: #fff;
  font-size: 16px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  width: 250px;
  height: 100px;
  border-radius: 10px;
`;

const EnhancedSelect = styled(Select)`
  background: #fff;
  width: 250px;
  height: 40px;
  border-radius: 10px;
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
          tags: tags,
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

  const changeTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
    console.log(content);
  };

  console.log(selectedTags);

  return (
    <Container>
      <form>
        <EnhancedTitleInput
          type="text"
          placeholder="title"
          onChange={changeTitle}
        />
        <EnhancedContentInput
          type="text"
          placeholder="content"
          onChange={changeContent}
        />
        <EnhancedSelect
          value={selectedTags}
          onChange={(selectedOptions) => {
            setSelectedTags(selectedOptions);
          }}
          options={tags?.map((tag) => ({ value: tag._id, label: tag.name }))}
        />
        <input
          type="file"
          placeholder="zdjecie"
          onChange={(newValue) => {
            setImage(newValue);
          }}
        />
        <button onClick={handleAddPost}>Add post</button>
      </form>
    </Container>
  );
};

export default PostManager;

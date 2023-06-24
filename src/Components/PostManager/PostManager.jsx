import React, { useEffect } from "react";
import axios from "axios";
import Select from "react-select";

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
    <div>
      <form>
        <input type="text" placeholder="title" onChange={changeTitle} />
        <input type="text" placeholder="content" onChange={changeContent} />

        <Select
          value={selectedTags}
          onChange={(selectedOptions) => {
            setSelectedTags(selectedOptions);
          }}
          options={tags?.map((tag) => ({ value: tag._id, label: tag.name }))}
        />

        {/* <select
          value={tags}
          onChange={(e) => {
            setTags(e.target.value);
          }}
        >
          {tags &&
            tags.map((tag) => {
              return <option value={tag._id}>{tag.name}</option>;
            })}
        </select> */}

        <input
          type="file"
          placeholder="zdjecie"
          onChange={(newValue) => {
            setImage(newValue);
          }}
        />
        <button onClick={handleAddPost}>Add post</button>
      </form>
    </div>
  );
};

export default PostManager;

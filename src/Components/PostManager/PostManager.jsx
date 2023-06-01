import React, { useEffect } from "react";
import axios from "axios";

const PostManager = () => {
  const [user, setUser] = React.useState(null);
  const [title, setTitle] = React.useState();
  const [content, setContent] = React.useState();
  const [tags, setTags] = React.useState();
  const [image, setImage] = React.useState();

  useEffect(() => {
    axios
      .get("http://localhost:1234/api/users", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  axios
    .post(
      "http://localhost:1234/api/addPost",
      {
        title: title,
        content: content,
        tags: tags,
        image: image,
      },
      { withCredentials: true }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="tytul"
          onChange={(event, newValue) => {
            setTitle(newValue);
          }}
        />
        <input
          type="text"
          placeholder="tresc"
          onChange={(event, newValue) => {
            setContent(newValue);
          }}
        />
        <input
          type="text"
          placeholder="tagi"
          onChange={(event, newValue) => {
            setTags(newValue);
          }}
        />
        <input
          type="file"
          placeholder="zdjecie"
          onChange={(event, newValue) => {
            setImage(newValue);
          }}
        />
      </form>
    </div>
  );
};

export default PostManager;

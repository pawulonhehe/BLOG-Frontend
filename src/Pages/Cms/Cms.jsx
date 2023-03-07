import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Tag from "../../Components/Tag";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #171717;
  color: #c9c9c9;
`;

const LeftSideMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 100%;
  background: #292929;
  align-items: center;
`;

const EnhancedButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  background: #424242;
  color: #c9c9c9;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  margin-top: 10px;
  border-radius: 10px;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    border-radius: 50%;
  }
  justify-content: space-between;
  width: 120px;
  margin-top: 10px;
`;

const CenterMenu = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #8f4343;
  color: #c9c9c9;
  flex-direction: column;
`;

const Dashboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  background: #241616;
  color: #c9c9c9;
`;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  background: #835d5d;
  color: #c9c9c9;
  flex-direction: column;
`;

export const Cms = () => {
  const [user, setUser] = React.useState(null);
  const [title, setTitle] = React.useState();
  const [content, setContent] = React.useState();
  const [tags, setTags] = React.useState();
  const [image, setImage] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(false);

  const changeCurrentPageToPosts = () => {
    setCurrentPage(true);
  };

  const changeCurrentPageToTags = () => {
    setCurrentPage(false);
  };

  React.useEffect(() => {
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

  console.log(currentPage);
  return (
    <Container>
      <LeftSideMenu>
        <UserContainer>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="user"
            width="50px"
            height="50px"
          />
          <p>pawulon</p>
        </UserContainer>

        <EnhancedButton onClick={changeCurrentPageToPosts}>
          Posty
        </EnhancedButton>
        <EnhancedButton onClick={changeCurrentPageToTags}>Tagi</EnhancedButton>
      </LeftSideMenu>
      <CenterMenu>
        <Dashboard>staty jakies</Dashboard>
        <MainContainer>
          {currentPage ? (
            <>
              <form>
                <input
                  type="text"
                  placeholder="tytul"
                  onChange={(event, newValue) => {
                    setTitle(newValue);
                    console.log(title);
                  }}
                />
                <input
                  type="text"
                  placeholder="tresc"
                  onChange={(event, newValue) => {
                    setContent(newValue);
                    console.log(content);
                  }}
                />
                <input
                  type="text"
                  placeholder="tagi"
                  onChange={(event, newValue) => {
                    setTags(newValue);
                    console.log(tags);
                  }}
                />
                <input
                  type="file"
                  placeholder="zdjecie"
                  onChange={(event, newValue) => {
                    setImage(newValue);
                    console.log(image);
                  }}
                />
              </form>
            </>
          ) : (
            <>
              <Tag name={"aha"} />
              <Tag name={"kubica"} />
              <Tag name={"alonso"} />
              <Tag name={"elo"} />
            </>
          )}
        </MainContainer>
      </CenterMenu>
    </Container>
  );
};

export default Cms;

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Post from "../../Components/Post/Post";
import LiveScore from "../../Components/LiveScore/LiveScore";
import AdContainer from "../../Components/AdContainer/AdContainer";
import LeftAdContainer from "../../Components/LeftAdContainer/LeftAdContainer";
import { FaFire, FaHome, FaSmile } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background: #171717;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  position: fixed;
  top: 0%;
  z-index: 99;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 100%;
  margin-left: 15px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 40px;
  color: #939393;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 250px;
  height: 100%;
`;

const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 60%;
  background: #292929;
  color: #c9c9c9;
  border-radius: 10px;
  margin-right: 15px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;

  &:hover {
    cursor: pointer;
    background: #424242;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
  margin-right: 2222px;
`;

const mediaQueriesL = [
  { max: 1850, left: 10 },
  { max: 1800, left: 9 },
  { max: 1750, left: 8 },
  { max: 1700, left: 7 },
  { max: 1650, left: 6 },
  { max: 1600, left: 5 },
  { max: 1550, left: 4 },
  { max: 1500, left: 2 },
  { max: 1450, left: -1 },
  { max: 1400, left: -3 },
];

const mediaQueryStylesL = mediaQueriesL.map(
  ({ max, left }) => `
    @media (max-width: ${max}px) {
      position: fixed;
      top: 0%;
      left: ${left}%;
      bottom: 0%;
    }
`
);

const LeftSide = styled.div`
  ${mediaQueryStylesL.join("")}
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  align-items: center;
  position: fixed;
  top: 0%;
  left: 11%;
  margin-top: 80px;
  z-index: 2;

  @media (max-width: 1360px) {
    display: none;
  }
`;

const mediaQueriesR = [
  { max: 1850, right: 10 },
  { max: 1800, right: 9 },
  { max: 1750, right: 8 },
  { max: 1700, right: 7 },
  { max: 1650, right: 6 },
  { max: 1600, right: 5 },
  { max: 1550, right: 4 },
  { max: 1500, right: 2 },
  { max: 1450, right: -1 },
  { max: 1400, right: -3 },
];

const mediaQueryStylesR = mediaQueriesR.map(
  ({ max, right }) => `
    @media (max-width: ${max}px) {
      position: fixed;
      top: 0%;
      right: ${right}%;
      bottom: 0%;
    }
`
);

const RightSide = styled.div`
  ${mediaQueryStylesR.join("")}
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;
  top: 0%;
  right: 11%;
  position: fixed;
  margin-top: 80px;
  align-items: center;
  z-index: 2;

  @media (max-width: 1360px) {
    display: none;
  }
`;

const EnhancedButton = styled.div`
  display: flex;
  width: 300px;
  background: #424242;
  border-radius: 10px;
  height: 50px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  color: #fff;

  &:hover {
    cursor: pointer;
    background: #616161;
  }
`;

const Logo = styled.svg`
  width: 60px;
  height: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 820px;
  height: 100%;
  align-items: center;
  margin-right: 50px;
`;

const EnhancedH1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 30px;
  color: #fff;
  margin-top: 50px;
`;

export const Home = () => {
  const navigate = useNavigate();
  const [postsType, setPostsType] = React.useState(true);

  const changePostsTypeToFY = () => {
    setPostsType(false);
  };
  const changePostsTypeToPopular = () => {
    setPostsType(true);
  };
  const NavigateToLogin = () => {
    navigate("/login");
  };
  const NavigateToCms = () => {
    navigate("/cms");
  };

  const [popularPosts, setPopularPosts] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1234/posts")
      .then((res) => {
        setPopularPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     NavigateToLogin();
  //   }
  // }, []);

  var token = localStorage.getItem("token");
  const isAdmin = token ? jwt_decode(token).ismod === 1 : false;

  return (
    <>
      <Header>
        <HeaderLogo>EPICGOALZ</HeaderLogo>
        <ButtonsContainer>
          {/* {isAdmin() ? (
            <LoginButton onClick={NavigateToCms}>CMS</LoginButton>
          ) : null}
          <LoginButton onClick={NavigateToLogin}>Log in</LoginButton> */}

          {isAdmin ? (
            <LoginButton onClick={NavigateToCms}>CMS</LoginButton>
          ) : null}
          <LoginButton onClick={NavigateToLogin}>Log in</LoginButton>
        </ButtonsContainer>
      </Header>
      <Container>
        <LeftSide>
          <EnhancedButton onClick={changePostsTypeToFY}>
            <Logo>
              <FaHome />
            </Logo>
            FOR YOU
          </EnhancedButton>
          <EnhancedButton onClick={changePostsTypeToPopular}>
            <Logo>
              <FaFire />
            </Logo>
            POPULAR
          </EnhancedButton>
          <LeftAdContainer />
        </LeftSide>
        <Content>
          {postsType ? (
            <>
              {popularPosts.map((post) => (
                <Post
                  key={post.id}
                  title={post.title}
                  content={post.content}
                  author={post.name}
                  date={post.time_date}
                  likes={post.likes}
                  category_name={post.category_name}
                  id={post.id}
                />
              ))}
            </>
          ) : (
            <EnhancedH1>
              Expect some cool stuff here soon! <FaSmile />
            </EnhancedH1>
          )}
        </Content>
        <RightSide>
          <LiveScore />
          <AdContainer />
        </RightSide>
      </Container>
    </>
  );
};

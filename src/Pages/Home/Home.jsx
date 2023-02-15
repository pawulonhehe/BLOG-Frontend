import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Post from "../../Components/Post";
import LiveScore from "../../Components/LiveScore";
import AdContainer from "../../Components/AdContainer";
import { FaFire, FaHome } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background: #171717;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
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
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  /* background: #969696; */
  margin-top: 40px;
  justify-content: center;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  align-items: center;
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
`;

const Ad = styled.div`
  display: flex;
  width: 300px;
  background: #d9d9d9;
  height: 500px;
  margin-top: 50px;
  border-radius: 10px;
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
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;
`;

export const Home = () => {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/login");
  };

  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1234/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header>
        <HeaderLogo>EPICGOALZ</HeaderLogo>
        <LoginButton onClick={Login}>Zaloguj</LoginButton>
      </Header>
      <Container>
        <LeftSide>
          <EnhancedButton>
            <Logo>
              <FaHome />
            </Logo>
            DLA CIEBIE
          </EnhancedButton>
          <EnhancedButton>
            <Logo>
              <FaFire />
            </Logo>
            POPULARNE
          </EnhancedButton>
          <Ad>tu beda reklamki</Ad>
        </LeftSide>
        <Content>
          {posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              content={post.content}
              author={post.author}
              date={post.time_date}
              likes={post.likes}
              category_name={post.category_name}
            />
          ))}
        </Content>
        <RightSide>
          <LiveScore />
          <AdContainer />
        </RightSide>
      </Container>
    </>
  );
};

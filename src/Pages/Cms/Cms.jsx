import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

export const Cms = () => {
  const [user, setUser] = React.useState(null);

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
        <EnhancedButton>Home</EnhancedButton>
        <EnhancedButton>Posty</EnhancedButton>
        <EnhancedButton>Uzytnicy</EnhancedButton>
      </LeftSideMenu>
      <CenterMenu>
        <Dashboard>staty jakies</Dashboard>
      </CenterMenu>
    </Container>
  );
};

export default Cms;

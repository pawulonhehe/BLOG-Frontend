import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #424242;
  width: 350px;
  height: 415px;
  border-radius: 20px;
  margin-top: 20px;
  gap: 10px;
`;

const Header = styled.div`
  display: flex;
  width: 350px;
  height: 50px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: #323232;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 36px;
  color: #ff3737;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  background: #323232;
  gap: 25px;
`;

const Column = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  background: none;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
`;

const LiveTime = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  flex-direction: column;
  color: #ff3737;
  margin-top: 4px;
`;

const LiveScr = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  flex-direction: column;
  color: white;
`;

const FlagContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 50px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const CountryName = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  color: #9c9c9c;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  text-align: center;
`;

const LiveScore = () => {
  return (
    <Container>
      <Header>LIVE</Header>
      <Row>
        <Column>
          <FlagContainer>
            <img
              src="https://i.imgur.com/YEoByan.png"
              alt="flag"
              width="50px"
              height="30px"
            />
          </FlagContainer>
          <CountryName>Maroco</CountryName>
        </Column>
        <Column>
          <LiveTime>64'</LiveTime>
          <LiveScr>1 : 0</LiveScr>
        </Column>
        <Column>
          <FlagContainer>
            <img
              src="https://i.imgur.com/C9Dac8l.png"
              alt="flag"
              width="50px"
              height="30px"
            />
          </FlagContainer>
          <CountryName>Portugal</CountryName>
        </Column>
      </Row>
      <Row>
        <Column>
          <FlagContainer>
            <img
              src="https://i.imgur.com/YEoByan.png"
              alt="flag"
              width="50px"
              height="30px"
            />
          </FlagContainer>
          <CountryName>Maroco</CountryName>
        </Column>
        <Column>
          <LiveTime>64'</LiveTime>
          <LiveScr>1 : 0</LiveScr>
        </Column>
        <Column>
          <FlagContainer>
            <img
              src="https://i.imgur.com/C9Dac8l.png"
              alt="flag"
              width="50px"
              height="30px"
            />
          </FlagContainer>
          <CountryName>Portugal</CountryName>
        </Column>
      </Row>
      <Row>
        <Column>
          <FlagContainer>
            <img
              src="https://i.imgur.com/YEoByan.png"
              alt="flag"
              width="50px"
              height="30px"
            />
          </FlagContainer>
          <CountryName>Maroco</CountryName>
        </Column>
        <Column>
          <LiveTime>64'</LiveTime>
          <LiveScr>1 : 0</LiveScr>
        </Column>
        <Column>
          <FlagContainer>
            <img
              src="https://i.imgur.com/C9Dac8l.png"
              alt="flag"
              width="50px"
              height="30px"
            />
          </FlagContainer>
          <CountryName>Portugal</CountryName>
        </Column>
      </Row>
      <Row>
        <Column>
          <FlagContainer>
            <img
              src="https://i.imgur.com/YEoByan.png"
              alt="flag"
              width="50px"
              height="30px"
            />
          </FlagContainer>
          <CountryName>Maroco</CountryName>
        </Column>
        <Column>
          <LiveTime>64'</LiveTime>
          <LiveScr>1 : 0</LiveScr>
        </Column>
        <Column>
          <FlagContainer>
            <img
              src="https://i.imgur.com/C9Dac8l.png"
              alt="flag"
              width="50px"
              height="30px"
            />
          </FlagContainer>
          <CountryName>Portugal</CountryName>
        </Column>
      </Row>
      <Row>
        <Column>
          <FlagContainer>
            <img
              src="https://i.imgur.com/YEoByan.png"
              alt="flag"
              width="50px"
              height="30px"
            />
          </FlagContainer>
          <CountryName>Maroco</CountryName>
        </Column>
        <Column>
          <LiveTime>64'</LiveTime>
          <LiveScr>1 : 0</LiveScr>
        </Column>
        <Column>
          <FlagContainer>
            <img
              src="https://i.imgur.com/C9Dac8l.png"
              alt="flag"
              width="50px"
              height="30px"
            />
          </FlagContainer>
          <CountryName>Portugal</CountryName>
        </Column>
      </Row>
    </Container>
  );
};

export default LiveScore;

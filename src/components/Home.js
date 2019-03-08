import React from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { HomeContainer, Container } from "../styles/Styles";

const Home = () => {
  const { width, device } = useWindowWidth();

  return (
    <HomeContainer device={device} width={width}>
      <Container>
        <h1>{width}px</h1>
        <h4>{device}</h4>
      </Container>
      <Container>
        <h1>{width}px</h1>
        <h4>{device}</h4>
      </Container>
    </HomeContainer>
  );
};

export default Home;

import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: ${props => {
    return props.device === "Mobile" || props.device === "Tablet"
      ? "column"
      : "row";
  }};
  align-items: center;
  justify-content: ${props => {
    return props.device === "Tablet" ? "space-between" : "center";
  }};
  padding: 1em;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  min-height: 250px;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 1em;
`;

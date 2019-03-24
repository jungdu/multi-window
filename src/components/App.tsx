import * as React from "react";
import Desk from "./desk";
import styled from "styled-components";

class App extends React.Component {
  public render() {
    return (
      <AppContainer className="App">
        <Desk />
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

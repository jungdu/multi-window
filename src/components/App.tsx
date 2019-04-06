import * as React from "react";
import Window from "./window";
import styled from "styled-components";

class App extends React.Component {
  public render() {
    return (
      <AppContainer className="App">
        <Window />
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

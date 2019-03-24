import * as React from "react";
import styled from "styled-components";

const icon = () => {
  return <IconDiv>icon</IconDiv>;
};

export default icon;

const IconDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: #555;
  color: white;
  flex-basis: 100px;
`;

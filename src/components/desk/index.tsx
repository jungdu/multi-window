import * as React from "react";
import styled from "styled-components";
import Icon from "./icon";

interface IDeskProps {}

type Props = IDeskProps;

const Desk = (props: Props) => {
  return (
    <DeskContainer>
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
    </DeskContainer>
  );
};

export default Desk;

const DeskContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

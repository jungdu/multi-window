import * as React from "react";
import styled from "styled-components";
import Icon from "./icon";

interface IDeskProps {}

type Props = IDeskProps;

const Desk = (props: Props) => {
  return (
    <DeskContainer>
      <Icon fileName="first_file" />
      <Icon fileName="second_file" />
      <Icon fileName="second_file" />
      <Icon
        fileName="music"
        img="https://s3.ap-northeast-2.amazonaws.com/gamesite.test/music.png"
      />
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
  width: 0;
  height: 100%;
  flex-direction: column;
`;

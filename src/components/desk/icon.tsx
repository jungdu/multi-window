import * as React from "react";
import styled from "styled-components";

interface IIconProps {
  img?: string;
  fileName?: string;
}

type Props = IIconProps;

const icon = (props: Props) => {
  const imgSrc = props.img
    ? props.img
    : "https://s3.ap-northeast-2.amazonaws.com/gamesite.test/iconmonstr-file-3-240.png";
  const fileName = props.fileName ? props.fileName : "filename";
  return (
    <IconDiv>
      <img className="iconImg" src={imgSrc} alt="icon image" />
      <p className="iconName"> {fileName} </p>
    </IconDiv>
  );
};
// copyright : https://iconmonstr.com/
export default icon;

const IconDiv = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: none;
  color: #333;
  flex-basis: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .iconImg {
    width: 60%;
    height: 60%;
  }
  &:hover {
    background-color: #dfdfdf;
  }
`;

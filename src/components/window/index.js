import React, { useState } from "react";
import styled from "styled-components";

const Window = () => {
  const [divPos, setDivPos] = useState([10, 10]);
  let vec;

  const moveMouseEvent = event => {
    setDivPos([event.clientX + vec[0], event.clientY + vec[1]]);
  };

  const onMouseDown = e => {
    vec = [divPos[0] - e.clientX, divPos[1] - e.clientY];
    window.addEventListener("mousemove", moveMouseEvent);
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", moveMouseEvent);
    });
  };

  return (
    <WindowContainer
      style={{
        left: divPos[0],
        top: divPos[1],
      }}
    >
      <WindowTop onMouseDown={onMouseDown} />
      <LeftBar />
      <RightBar />
      <BottomBar />
    </WindowContainer>
  );
};

export default Window;

const WindowContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: #ddd;
  position: absolute;
  overflow: hidden;
`;

const WindowTop = styled.div`
  width: 100%;
  height: 17px;
  background-color: #444;
`;

const LeftBar = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  width: 3px;
  background-color: black;
  cursor: ew-resize;
`;

const RightBar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background-color: black;
  cursor: ew-resize;
`;

const BottomBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: black;
  position: absolute;
  cursor: ns-resize;
`;

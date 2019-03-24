import * as React from "react";
import styled from "styled-components";

type Props = {};

const Window = (props: Props) => {
  const [divPos, setDivPos] = React.useState([10, 10]);
  const [width, setWidth] = React.useState(350);
  const [height, setHeight] = React.useState(350);
  let vec: [number, number];

  const moveWindowEvent = (event: MouseEvent) => {
    setDivPos([event.clientX + vec[0], event.clientY + vec[1]]);
  };

  const resizeWithEvent = (event: MouseEvent) => {};

  const resizeWith: React.MouseEventHandler = (e: React.MouseEvent) => {
    console.log(e.clientX);
    window.addEventListener("mousemove", resizeWithEvent);
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", resizeWithEvent);
    });
  };

  const moveWindow: React.MouseEventHandler = (e: React.MouseEvent) => {
    vec = [divPos[0] - e.clientX, divPos[1] - e.clientY];
    window.addEventListener("mousemove", moveWindowEvent);
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", moveWindowEvent);
    });
  };

  return (
    <WindowContainer
      style={{
        left: divPos[0],
        top: divPos[1],
        width,
        height,
      }}
    >
      <WindowTop onMouseDown={moveWindow} />
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

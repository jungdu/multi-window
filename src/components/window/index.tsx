import * as React from "react";
import styled from "styled-components";

interface IProps {}

const Window = (props: IProps) => {
  const [divPos, setDivPos] = React.useState([10, 10]);
  const [width, setWidth] = React.useState(350);
  const [height] = React.useState(350);
  let vec: [number, number];
  let clickedWidth: number;
  let clickedPos: [number, number];

  const moveWindowEvent = (event: MouseEvent) => {
    setDivPos([event.clientX + vec[0], event.clientY + vec[1]]);
  };

  const resizeEBarHandler = (event: MouseEvent) => {
    setWidth(clickedWidth + event.clientX - clickedPos[0]);
  };

  const resizeEBar: React.MouseEventHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    clickedWidth = width;
    clickedPos = [e.clientX, e.clientY];
    window.addEventListener("mousemove", resizeEBarHandler);
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", resizeEBarHandler);
    });
  };

  const resizeWBarHandler = (event: MouseEvent) => {
    const resizeWidth: number = clickedWidth + clickedPos[0] - event.clientX;
    if (resizeWidth > 0) {
      setDivPos([event.clientX, divPos[1]]);
      setWidth(resizeWidth);
    } else {
      return;
    }
  };

  const resizeWBar: React.MouseEventHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    clickedWidth = width;
    clickedPos = [e.clientX, e.clientY];
    window.addEventListener("mousemove", resizeWBarHandler);
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", resizeWBarHandler);
    });
  };

  const moveWindow: React.MouseEventHandler = (e: React.MouseEvent) => {
    e.preventDefault();
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
      <LeftBar onMouseDown={resizeWBar} />
      <RightBar onMouseDown={resizeEBar} />
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

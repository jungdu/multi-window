import * as React from "react";
import styled from "styled-components";

interface IProps {}

const Window = (props: IProps) => {
  const [divPos, setDivPos] = React.useState([10, 10]);
  const [width, setWidth] = React.useState(350);
  const [height, setHeight] = React.useState(350);
  let vec: [number, number];
  let clickedWidth: number;
  let clickedHeight: number;
  let clickedPos: [number, number];

  type MouseHandlerType = (event: MouseEvent) => void;

  const resizeEBarHandler = (event: MouseEvent) => {
    setWidth(clickedWidth + event.clientX - clickedPos[0]);
  };

  const addWindowHandler = (handler: MouseHandlerType) => {
    window.addEventListener("mousemove", handler);
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", handler);
    });
  };

  const resizeSBar: React.MouseEventHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    clickedHeight = height;
    clickedPos = [e.clientX, e.clientY];
    addWindowHandler(resizeSBarHandler);
  };

  const resizeSBarHandler: MouseHandlerType = (event: MouseEvent) => {
    setHeight(clickedHeight + event.clientY - clickedPos[1]);
  };

  const resizeEBar: React.MouseEventHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    clickedWidth = width;
    clickedPos = [e.clientX, e.clientY];
    addWindowHandler(resizeEBarHandler);
  };

  const resizeWBarHandler: MouseHandlerType = (event: MouseEvent) => {
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
    addWindowHandler(resizeWBarHandler);
  };

  const moveWindowHandler: MouseHandlerType = (event: MouseEvent) => {
    setDivPos([event.clientX + vec[0], event.clientY + vec[1]]);
  };

  const moveWindow: React.MouseEventHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    vec = [divPos[0] - e.clientX, divPos[1] - e.clientY];
    addWindowHandler(moveWindowHandler);
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
      <BottomBar onMouseDown={resizeSBar} />
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

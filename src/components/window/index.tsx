import * as React from "react";
import styled from "styled-components";

interface IWindowProps {
  minHeight?: number;
  minWidth?: number;
  title?: string;
  children?: React.ReactNode;
}

type IProps = IWindowProps;

const Window = (props: IProps) => {
  const [divPos, setDivPos] = React.useState([10, 10]);
  const [width, setWidth] = React.useState(350);
  const [height, setHeight] = React.useState(350);
  const minHeight = props.minHeight ? props.minHeight : 100;
  const minWidth = props.minWidth ? props.minWidth : 100;
  let vec: [number, number];
  let clickedWidth: number;
  let clickedHeight: number;
  let clickedPos: [number, number];

  type MouseHandlerType = (event: MouseEvent) => void;

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
    const resizeHeight = clickedHeight + event.clientY - clickedPos[1];
    if (resizeHeight > minHeight) {
      setHeight(resizeHeight);
    }
  };

  const resizeEBarHandler = (event: MouseEvent) => {
    const resizeWidth = clickedWidth + event.clientX - clickedPos[0];
    if (resizeWidth > minWidth) {
      setWidth(clickedWidth + event.clientX - clickedPos[0]);
    }
  };

  const resizeEBar: React.MouseEventHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    clickedWidth = width;
    clickedPos = [e.clientX, e.clientY];
    addWindowHandler(resizeEBarHandler);
  };

  const resizeWBarHandler: MouseHandlerType = (event: MouseEvent) => {
    const resizeWidth: number = clickedWidth + clickedPos[0] - event.clientX;
    if (resizeWidth > minWidth) {
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
      <WindowTop onMouseDown={moveWindow}>
        <p className="closeBtn">
          <i className="fas fa-window-close" />
        </p>
        <p className="caret-down">
          <i className="fas fa-caret-down" />
        </p>
        <p className="title">{props.title ? props.title : "window"}</p>
      </WindowTop>
      <WindowContent>{props.children ? props.children : "EmptyContent"}</WindowContent>
      <LeftBar onMouseDown={resizeWBar} />
      <RightBar onMouseDown={resizeEBar} />
      <BottomBar onMouseDown={resizeSBar} />
      <LeftBottomBar />
      <RightBottomBar />
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

const WindowContent = styled.div`
  width: 100%;
  height: calc(100% - 20px);
  padding: 0 3px;
  background-color: azure;
`;
const WindowTop = styled.div`
  width: 100%;
  height: 20px;
  background-color: lightslategray;
  display: flex;
  flex-direction: row-reverse;
  color: #f5f5f5;
  padding: 0 5px;
  cursor: move;
  p {
    padding: 0 5px;
  }
  .caret-down {
    margin-left: auto;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
  .closeBtn {
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;

const LeftBar = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  width: 3px;
  background-color: lightslategray;
  cursor: ew-resize;
`;

const RightBar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background-color: lightslategray;
  cursor: ew-resize;
`;

const BottomBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: lightslategray;
  cursor: ns-resize;
`;

const RightBottomBar = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  background-color: none;
  cursor: nw-resize;
`;

const LeftBottomBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  background-color: none;
  cursor: ne-resize;
`;

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import "./App.css";
import { sceneArr } from "./scenes/scene";

const App = () => {
  const [collision, setCollision] = useState(sceneArr);
  const [xPosition, setXPosition] = useState(32);
  const [yPosition, setYPosition] = useState(5);
  const [xDestination, setXDestination] = useState();
  const [yDestination, setYDestination] = useState();
  const [speed, setSpeed] = useState(0.6);
  const [steps, setSteps] = useState(20);
  const [direction, setDirection] = useState("right");
  const [tile, setTile] = useState(1);
  const [walk, setWalk] = useState(false);
  const [description, setDescription] = useState();

  const interaction = (e, i) => {
    console.log(e.detail);
    if (e.detail === 2) {
      if (collision[i].description !== "Nothing there") {
        const sound = new Audio("./assets/sound.wav");
        setDescription(collision[i].description);
        sound.play();
        setTimeout(() => {
          setDescription();
        }, 1000);
      } else {
        alert(collision[i].description);
      }
    }
  };

  const rightClick = async (e, box) => {
    e.preventDefault();
    if (box.move) {
      if (yPosition > box.yLocation) {
        setDirection("left");
      } else {
        setDirection("right");
      }
      let tempNum;
      if (yPosition > box.yLocation) {
        tempNum = tile - box.tile;
      } else {
        tempNum = box.tile - tile;
      }
      console.log(tempNum);
      const tempSpeed = 0.6 * tempNum;
      const tempSteps = 20 * tempNum;
      setSpeed(tempSpeed);
      setSteps(tempSteps);
      setXDestination(box.xLocation);
      setYDestination(box.yLocation);
      setWalk(true);
      setTile(box.tile);
      setTimeout(() => {
        setWalk(false);
        setXPosition(box.xLocation);
        setYPosition(box.yLocation);
        setSpeed(0.6);
        setSteps(20);
        setXDestination();
        setYDestination();
      }, 600 * tempNum - 20);
    }
  };

  return (
    <div className="App">
      <Scene>
        {collision.map((box, i) => {
          return (
            <Box
              key={i}
              image={box.imageUrl}
              onClick={(e) => {
                e.preventDefault();
                interaction(e, i);
              }}
              onContextMenu={(e) => rightClick(e, box)}
            />
          );
        })}
        <Character
          xPosition={xPosition}
          yPosition={yPosition}
          walk={walk}
          x={{ start: xPosition, end: xDestination }}
          y={{ start: yPosition, end: yDestination }}
          speed={speed}
          steps={steps}
          direction={direction}
        />
        <TextBox>{description}</TextBox>
      </Scene>
    </div>
  );
};

const Scene = styled.div`
  display: flex;
  text-align: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-image: url("./assets/casinoScene.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 50vw;
`;

const Box = styled.div`
  background-color: ${(props) => (props.image ? null : "transparent")};
  background-image: url(${(props) => (props.image ? props.image : null)});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  width: 10%;
`;

const WalkAnimation = keyframes`
  from {
    background-position-x: 8%;
  } to {
    background-position-x: 54%;
  }
`;

const DirectionAnimation = (x, y) => keyframes`
  from {
    left: ${y.start}vw;
    top: ${x.start}vw;
  } to {
    left: ${y.end}vw;
    top: ${x.end}vw;
  }
`;

const Character = styled.div`
  background-image: url("./assets/sprite.png");
  position: absolute;
  height: 17vw;
  width: 10vw;
  background-size: 1430%;
  background-position-x: 0%;
  top: ${(props) => props.xPosition}vw;
  left: ${(props) => props.yPosition}vw;
  animation: ${(props) => (props.walk ? WalkAnimation : null)} 0.6s steps(6)
      infinite,
    ${(props) => (props.walk ? DirectionAnimation(props.x, props.y) : null)}
      ${(props) => props.speed}s steps(140) 1;
  transform: ${(props) => (props.direction === "left" ? "scaleX(-1)" : null)};
`;

const TextBox = styled.p`
  position: absolute;
  width: 100%;
  text-align: center;
  color: white;
  top: 40vw;
`;

export default App;

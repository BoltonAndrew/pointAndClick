import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import "./App.css";
import { sceneArr } from "./utils/scene";

const App = () => {
  const [collision, setCollision] = useState(sceneArr);
  const [position, setPosition] = useState(5);
  const [walk, setWalk] = useState(true);

  const interaction = (e, i) => {
    console.log(e.detail);
    if (e.detail === 2) {
      if (collision[i].description !== "Nothing there") {
        const sound = new Audio("./assets/sound.wav");
        sound.play();
      } else {
        alert(collision[i].description);
      }
    }
  };

  const rightClick = (e) => {
    // e.preventDefault();
    // alert("move");
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
              onContextMenu={rightClick}
            />
          );
        })}
        <Character
          position={position}
          walk={walk}
          num={{ start: position, end: 10 }}
        />
      </Scene>
    </div>
  );
};

const Scene = styled.div`
  display: flex;
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

const DirectionAnimation = (y) => keyframes`
  from {
    left: ${y.start}vw;
  } to {
    left: ${y.end}vw;
  }
`;

const Character = styled.div`
  background-image: url("./assets/sprite.png");
  position: absolute;
  height: 17vw;
  width: 10vw;
  background-size: 1430%;
  background-position-x: 0%;
  top: 32vw;
  left: 10vw;
  animation: ${(props) => (props.walk ? WalkAnimation : null)},
    ${(props) => (props.walk ? DirectionAnimation(props.num) : null)};
  animation-duration: 0.6s;
  animation-iteration-count: 4;
  animation-timing-function: steps(6);
`;

export default App;

import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { sceneArr } from "./utils/scene";

const App = () => {
  const [collision, setCollision] = useState(sceneArr);
  const [position, setPosition] = useState(5);
  const [walk, setWalk] = useState(false);

  const interaction = (e, i) => {
    console.log(e.detail);
    if (e.detail === 2) {
      // alert(collision[i].description);
      if (collision[i].description !== "Nothing there") {
        const sound = new Audio("./assets/sound.wav");
        sound.play();
      }
    }
  };

  const rightClick = (e) => {
    e.preventDefault();
    alert("move");
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
        <Character position={position} />
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

const Character = styled.div`
  background-image: url("./assets/sprite.png");
  position: absolute;
  height: 17vw;
  width: 10vw;
  background-size: 1430%;
  background-position-x: 0%;
  top: 32vw;
  left: 5vw;
`;

export default App;

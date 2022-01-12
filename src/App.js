import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { sceneArr } from "./utils/scene";

const App = () => {
  const [collision, setCollision] = useState(sceneArr);

  const interaction = (i) => {
    alert(collision[i].description);
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
                interaction(i);
              }}
            />
          );
        })}
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
  background-size: 100vw;
  width: 100vw;
  height: 100vh;
`;

const Box = styled.div`
  background-color: ${(props) => (props.image ? null : "transparent")};
  background-image: url(${(props) => (props.image ? props.image : null)});
  background-size: 60%;
  background-repeat: no-repeat;
  width: 10%;
`;

export default App;

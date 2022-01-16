import styled from "styled-components";
import sprites from "../assets/spriteSheets";

export default Character = ({ playerData }) => {
  return (
    <CharacterContainer
      spriteSheet={sprites.mainCharacter}
      xPosition={playerData.xPosition}
      yPosition={playerData.yPosition}
      walk={playerData.walk}
      x={{ start: playerData.xPosition, end: playerData.xDestination }}
      y={{ start: playerData.yPosition, end: playerData.yDestination }}
      speed={playerData.speed}
      steps={playerData.steps}
      direction={playerData.direction}
    />
  );
};

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

const CharacterContainer = styled.div`
  background-image: url(${(props) => props.spriteSheet});
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

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import maps from "../assets/collisionArrays/maps";
import { interaction, rightClick } from "../handlers/scene";

export default CollisionMap = ({ scene }) => {
  return (
    <>
      {maps[scene].map((box, i) => {
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
    </>
  );
};

const Box = styled.div`
  background-color: ${(props) => (props.image ? null : "transparent")};
  background-image: url(${(props) => (props.image ? props.image : null)});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  width: 10%;
`;

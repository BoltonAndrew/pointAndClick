import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const Inventory = ({ modalOpen, setModalOpen }) => {
  const [contents, setContents] = useState([
    "./assets/newspaper.png",
    "./assets/newspaper.png",
    "./assets/newspaper.png",
    "./assets/newspaper.png",
  ]);

  return (
    <InventoryBag show={modalOpen}>
      <Modal.Dialog>
        <Modal.Header>
          <CloseInvBttn onClick={() => setModalOpen(false)}>X</CloseInvBttn>
          <Modal.Title>Inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {contents.map((item, i) => (
            <ItemImage key={i} src={item} />
          ))}
        </Modal.Body>
      </Modal.Dialog>
    </InventoryBag>
  );
};

const InventoryBag = styled(Modal)`
  text-align: center;
  background-color: #624a2e;
  position: absolute;
  width: 20vw;
  height: 20vw;
  top: 20vw;
  left: 40vw;
`;

const CloseInvBttn = styled.button`
  font-family: "discworld";
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  outline: inherit;
  float: right;
  width: 2vw;
  height: 1vw;
`;

const ItemImage = styled.img`
  width: 50%;
`;

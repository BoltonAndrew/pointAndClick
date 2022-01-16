import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const Inventory = ({
  modalOpen,
  setModalOpen,
  heldItem,
  setHeldItem,
}) => {
  const [contents, setContents] = useState([]);

  const itemHandler = (e) => {
    e.preventDefault();
    if (heldItem) {
      setContents([...contents, heldItem]);
    }
    setHeldItem();
  };

  return (
    <InventoryBag show={modalOpen} heldItem={heldItem}>
      <Modal.Dialog>
        <Modal.Header>
          <CloseInvBttn onClick={() => setModalOpen(false)}>X</CloseInvBttn>
          <Modal.Title>Inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body onClick={itemHandler}>
          {contents.length > 0 ? (
            contents.map((item, i) => <ItemImage key={i} src={item} />)
          ) : (
            <p>+</p>
          )}
        </Modal.Body>
      </Modal.Dialog>
    </InventoryBag>
  );
};

const InventoryBag = styled(Modal)`
  outline: none;
  box-shadow: none;
  text-align: center;
  font-size: 2vw;
  background-color: #624a2e;
  position: absolute;
  width: 20vw;
  height: 20vw;
  top: 20vw;
  left: 40vw;
  cursor: url(${(props) => (props.heldItem ? "./assets/newspaper.svg" : null)}),
    auto;
`;

const CloseInvBttn = styled.button`
  font-family: "discworld";
  font-size: 2vw;
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

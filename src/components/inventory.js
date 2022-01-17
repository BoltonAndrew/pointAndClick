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

  const inventoryHandler = (item, i) => {
    setHeldItem(item);
    const tempArr = contents;
    tempArr.splice(i, 1);
    setContents(tempArr);
  };

  const itemHandler = (e) => {
    e.preventDefault();
    if (heldItem) {
      setContents([...contents, heldItem]);
    }
    setHeldItem();
  };

  return (
    <InventoryBag show={modalOpen} helditem={heldItem}>
      <Modal.Dialog>
        <Modal.Header>
          <CloseInvBttn onClick={() => setModalOpen(false)}>X</CloseInvBttn>
          <Modal.Title>Inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {contents.length > 0 &&
            contents.map((item, i) => (
              <ItemImage
                key={i}
                src={item}
                onClick={() => inventoryHandler(item, i)}
              />
            ))}
          <p onClick={itemHandler}>+</p>
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
  cursor: url(${(props) => (props.helditem ? props.helditem : null)}), auto;
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

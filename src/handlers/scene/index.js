export const interaction = (e, i) => {
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

export const rightClick = async (e, box) => {
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

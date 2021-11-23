//@ts-nocheck

import { Box, Center } from '@chakra-ui/react';
import { ReactP5Wrapper } from "react-p5-wrapper";

function sketch(p5) {
  const width = window.innerWidth / 1.05;
  const height = window.innerHeight / 2.2;

  const random = (max) => {
    return Math.floor(Math.random() * max);
  }

  class Ball {
    constructor(x, y, size, speedX, speedY, dirX, dirY, weight, color) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speedX = speedX;
      this.speedY = speedY;
      this.dirX = dirX;
      this.dirY = dirY;
      this.weight = weight;
      this.color = (random(255), random(255), random(255));
    }
  }

  const ballArr = [];
  const ballNumber = 500;

  const createBall = () => {
    return new Ball(
      random(width),  // x
      random(height), // y
      random(10),      // size
      random(1, 5),   // speedX
      random(1, 5),   // speedY
      random(-1, 1),  // dirX
      random(-1, 1),  // dirY
      random(1, 5),   // weight
    );
  }

  for (let i = 0; i < ballNumber; i++) {
    ballArr.push(createBall());
  }

  console.log(ballArr);

  function ball() {
    p5.circle(0, 0, 10);
    p5.noStroke();
    for (let i = 0; i < ballNumber; i++) {
      p5.circle(ballArr[i].x, ballArr[i].y, ballArr[i].size);
    }
  }

  p5.setup = () => {
    p5.createCanvas(width, height, p5.WEBGL);
  }
  p5.draw = () => {
    p5.background("#38A169");
    p5.translate(- width / 2, - height / 2);
    ball();
    ball();
    ball();
  };

}

export default function P5Box() {
  return (
    <>
      <Box>some small title</Box>
      <Box>
        <Center borderRadius='10px'>
          <ReactP5Wrapper sketch={sketch} />
        </Center>
      </Box>
    </>
  );
}
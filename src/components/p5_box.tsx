//@ts-nocheck

import { Box, Center, Text } from '@chakra-ui/react';
import { ReactP5Wrapper } from "react-p5-wrapper";


function sketch(p5) {
  const width = window.innerWidth / 1.05;
  const height = window.innerHeight / 2.2;

  const random = (max) => {
    return Math.floor(Math.random() * max);
  }

  p5.setup = () => {
    p5.createCanvas(width, height, p5.WEBGL);
  }
  p5.draw = () => {
    p5.background("#38A169");
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
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
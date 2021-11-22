//@ts-nocheck

import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import Sketch from 'react-p5';

export default function P5Box(props) {
  let x = 200;
  const y = 200;
  const width = window.innerWidth / 1.05;
  const height = window.innerHeight / 2;
  //@ts-ignore
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(x, y, 50, 50);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x = x + 0.25;
  };
  return (
    <>
      <Box>some graphics</Box>
      <Box w='600' h='300px'>
        <Center borderRadius='10px'>
          <Sketch setup={setup} draw={draw} />
        </Center>
      </Box>
    </>
  );
}

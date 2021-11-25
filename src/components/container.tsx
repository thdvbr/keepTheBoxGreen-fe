import React from 'react';
import { Box, Center, VStack, StackDivider } from '@chakra-ui/react';

import P5Box from './p5_box';

export default function Container() {
  return (
    <Box
      position='absolute'
      // bg='green.500'
      top='0'
      w='100vw'
      h='100vh'
      zIndex='0'
      p={4}

    >
      <Box>
        <P5Box />
      </Box>
    </Box>
  );
}

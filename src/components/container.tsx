import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';

export default function Container() {
  return (
    <Box
      position='absolute'
      bg='green.500'
      top='0'
      w='100vw'
      h='100vh'
      zIndex='-1'
      p={4}
      color='white'>
      <Center h='100%'>
        <Text>some graphics</Text>
      </Center>
    </Box>
  );
}

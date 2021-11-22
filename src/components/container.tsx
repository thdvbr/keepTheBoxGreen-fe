import React from 'react';
import { Box, Center, Text, VStack, StackDivider } from '@chakra-ui/react';

import P5Box from './p5_box';

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
      <Center h='100%' borderRadius='10px' mt='50px'>
        <VStack
          width='100%'
          divider={<StackDivider borderColor='green.100' />}
          spacing={4}
          align='stretch'>
          <Center h='40px' bg='green.600' borderRadius='10px'>
            some title
          </Center>
          <Box h='50vh' bg='green.400' borderRadius='10px'>
            <P5Box />
          </Box>
        </VStack>
      </Center>
    </Box>
  );
}

// @ts-nocheck

import { Box, Center, Text } from '@chakra-ui/react';
import ScriptTag from 'react-script-tag';

export default function P5Box() {
  return (
    <>
      <Box _hover={{ cursor: 'pointer' }}><Text fontSize='2xl' color='white'><b>#KeepTheBoxGreen</b></Text></Box>
      <Box>
        <Center borderRadius='10px'>
          <ScriptTag type="text/javascript" src="sketch.js" />
        </Center>
      </Box>
    </>
  );
}
//@ts-nocheck

import { Box, Center } from '@chakra-ui/react';
import ScriptTag from 'react-script-tag';

export default function P5Box() {
  return (
    <>
      <Box>some small title</Box>
      <Box>
        <Center borderRadius='10px'>
          <ScriptTag type="text/javascript" src="sketch.js" />
        </Center>
      </Box>
    </>
  );
}
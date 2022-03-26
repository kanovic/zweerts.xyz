import React from 'react';
import { Box, Heading, useColorMode } from '@chakra-ui/react';

export default function Logo(props) {
  const { colorMode } = useColorMode();
  return (
    <Box {...props}>
      <Heading size={'xl'}>ZWEERTS.xyz</Heading>
    </Box>
  );
}

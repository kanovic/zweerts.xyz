import React from 'react';
import { Box, Text, useColorMode } from '@chakra-ui/react';

export default function Logo(props) {
  const { colorMode } = useColorMode();
  return (
    <Box {...props}>
      <Text fontSize="5xl">ZWEERTS.xyz</Text>
    </Box>
  );
}

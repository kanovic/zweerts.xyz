import { Flex, useColorMode } from '@chakra-ui/react';

export default function Container(props) {
  const { colorMode } = useColorMode();
  const color = { light: 'black', dark: 'white' };
  return (
    <Flex
      direction="column"
      alignItems="center"
      color={color[colorMode]}
      {...props}
    />
  );
}

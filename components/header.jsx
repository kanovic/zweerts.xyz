import React from 'react';
import NextLink from 'next/link';
import { Link, Box, Flex, Text, Stack, useColorMode } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

import Logo from '../components/logo';

const NavBar = props => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <NavBarContainer {...props}>
        <Logo flexGrow={1} />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    </>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      display={{ base: 'flex', md: 'none' }}
      alignItems={'center'}
      onClick={toggle}
    >
      {isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={5} h={5} />}
    </Box>
  );
};

const ColorToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      display={{ base: 'flex' }}
      alignItems={'center'}
      onClick={toggleColorMode}
    >
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <NextLink href={to}>
      <Link>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    </NextLink>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'flex-start', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[5, 5, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/blog">Blog</MenuItem>
        <MenuItem to="/koeneraad">
          Koeneraad {'('}NL{')'}
        </MenuItem>
        <ColorToggle />
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;

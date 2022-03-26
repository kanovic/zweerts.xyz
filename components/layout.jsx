import Head from 'next/head';
import Footer from './footer';
import NavBar from './header';
import { Flex, Box } from '@chakra-ui/react';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title} | ZWEERTS.xyz</title>
      </Head>
      <Flex direction={'column'} height={'100vh'}>
        <NavBar />
        <Box as={'main'} flexGrow={'1'}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  );
}

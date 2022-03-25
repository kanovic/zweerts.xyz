import Head from 'next/head';
import Footer from './footer';
import NavBar from './header';
import { Flex } from '@chakra-ui/react';

export default function Layout({ children, title }) {
  return (
    <Flex direction={'column'} height={'100vh'}>
      <Head>
        <title>{title} | ZWEERTS.xyz</title>
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </Flex>
  );
}

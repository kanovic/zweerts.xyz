import NextLink from 'next/link';
import {
  Heading,
  Text,
  Link,
  Box,
  StackDivider,
  UnorderedList,
  ListItem,
  Stack,
} from '@chakra-ui/react';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout title="Home">
      <Stack divider={<StackDivider />} spacing={5} paddingX={8}>
        <Box>
          <Heading size="lg">About this website</Heading>
          <Text>
            This is my personal domain where I run my web services on.
            <br />
            In the blog section I will post about things that matter to me like
            hobbies and {"'"}freelancing{"'"} locally {'('}NL{')'} under the
            name{' '}
            <NextLink href="/koeneraad">
              <Link color="teal.500">Koeneraad</Link>
            </NextLink>
          </Text>
        </Box>
        <Box>
          <Heading size="lg">About me</Heading>
          <Text>
            I am a computer and internet technology generalist. I like to learn
            and develop concepts from new technologies to feed my hunger for
            tech knowledge.
          </Text>
          <br />
          <Text>
            My strengths are:
            <UnorderedList>
              <ListItem>
                Flexible, i.e. I can adapt quickly to new environments
              </ListItem>

              <ListItem>Passionate in what I do</ListItem>
              <ListItem>Customer oriented</ListItem>
              <ListItem>
                Perseverance, I need to solve problems {':)))'}
              </ListItem>
            </UnorderedList>
          </Text>
          <br />
          <Text>
            In my free time I like to play golf, explore our beautiful nature
            and connect with friends.
          </Text>
        </Box>
        <Box>
          <Heading size="lg">Contact</Heading>
          <Text>
            For personal question you can reach me at{' '}
            <NextLink href="mailto:koen@zweerts.xyz">
              <Link color="teal.500">koen@zweerts.xyz</Link>
            </NextLink>
          </Text>
          <Text>
            For projects or business related questions contact me at{' '}
            <NextLink href="mailto:info@koeneraad.com">
              <Link color="teal.500">info@koeneraad.com</Link>
            </NextLink>
          </Text>
        </Box>
      </Stack>
    </Layout>
  );
}

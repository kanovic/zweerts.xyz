import { getAllPostsSlugs, getPostData } from '../../lib/posts';
import { getCategoryBySlug } from '../../lib/categories';
import Date from '../../components/date';
import NextLink from 'next/link';
import Layout from '../../components/layout';
import {
  Stack,
  Box,
  Badge,
  Link,
  Heading,
  Text,
  Button,
  StackDivider,
} from '@chakra-ui/react';

export default function Post({ post }) {
  return (
    <Layout post title={post.title}>
      <Stack
        divider={<StackDivider />}
        as={'article'}
        spacing={'5'}
        paddingX={'8'}
        direction={'column'}
      >
        <Box>
          <Heading size={'lg'}>{post.title}</Heading>
          <Text as={'small'}>
            <Date datestring={post.date} />
          </Text>
          <Badge>
            <NextLink href={post.category.permalink}>
              <Link color={'teal.500'}>{post.category.subject}</Link>
            </NextLink>
          </Badge>
        </Box>

        <Box dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

        <Box>
          <NextLink href="/blog">
            <Button colorScheme="teal" size="sm">
              Back to blog
            </Button>
          </NextLink>
        </Box>
      </Stack>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);

  return {
    props: {
      post: {
        ...postData,
        category: getCategoryBySlug(postData.category),
      },
    },
  };
}

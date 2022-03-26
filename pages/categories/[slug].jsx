import NextLink from 'next/link';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getSortedCategories, getCategoryBySlug } from '../../lib/categories';
import { getSortedPostsData } from '../../lib/posts';
import {
  Box,
  Heading,
  Stack,
  Link,
  Text,
  StackDivider,
  Button,
} from '@chakra-ui/react';

export default function Category({ category }) {
  return (
    <Layout post title={category.subject}>
      <Stack
        divider={<StackDivider />}
        direction={'column'}
        spacing={'5'}
        paddingX={'8'}
      >
        <Box>
          <Heading size={'lg'}>{category.subject} Posts</Heading>
        </Box>
        <Stack>
          {category.posts.map(post => (
            <Box key={post.slug}>
              <Heading size={'lg'}>
                <NextLink href={`/posts/${post.slug}`}>
                  <Link>{post.title}</Link>
                </NextLink>
              </Heading>
              <Text as={'small'}>
                <Date datestring={post.date} />{' '}
              </Text>
            </Box>
          ))}
        </Stack>
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

export function getStaticProps({ params }) {
  const category = getCategoryBySlug(params.slug);
  return {
    props: {
      category: {
        ...category,
        posts: getSortedPostsData().filter(
          post => post.category === category.slug,
        ),
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: getSortedCategories().map(category => ({
      params: {
        slug: category.slug,
      },
    })),
  };
}

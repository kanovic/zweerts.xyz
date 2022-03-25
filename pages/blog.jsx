import { getSortedPostsData } from '../lib/posts';
import { getSortedCategories } from '../lib/categories';
import NextLink from 'next/link';
import Date from '../components/date';
import Layout from '../components/layout';
import { getCategoryBySlug } from '../lib/categories';
import {
  Badge,
  Stack,
  Link,
  Heading,
  Box,
  StackDivider,
  Text,
} from '@chakra-ui/react';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      posts: allPostsData.map(post => ({
        ...post,
        category: getCategoryBySlug(post.category),
      })),
      categories: getSortedCategories(),
    },
  };
}

export default function Blog({ posts, categories }) {
  return (
    <Layout title="Blog">
      <Stack divider={<StackDivider />} spacing={5} paddingX={8}>
        <Box>
          <Heading paddingBottom={'2'} size={'sm'}>
            Categories
          </Heading>
          <Stack direction={'row'}>
            {categories.map(category => (
              <Badge key={category.slug}>
                <NextLink href={category.permalink}>
                  <Link color={'teal.500'}>{category.subject}</Link>
                </NextLink>
                {/* <p>{category.description}</p> */}
              </Badge>
            ))}
          </Stack>
        </Box>
        <Box>
          <Stack spacing={'5'} direction={'column'}>
            {posts.map(({ slug, date, title, category }) => (
              <Box key={slug}>
                <Heading paddingBottom={'2'} size={'lg'}>
                  <NextLink href={`/posts/${slug}`}>
                    <Link>{title}</Link>
                  </NextLink>
                </Heading>
                <Text as={'small'}>
                  <Date datestring={date} />
                </Text>
                {/* Category:{' '}
                <NextLink href={category.permalink}>
                  <Link color={'teal.500'}>{category.subject}</Link>
                </NextLink> */}
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Layout>
  );
}

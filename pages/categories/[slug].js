import Link from 'next/link';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getSortedCategories, getCategoryBySlug } from '../../lib/categories';
import { getSortedPostsData } from '../../lib/posts';

export default function Category({ category }) {
  return (
    <Layout post title={category.subject}>
      <h2>Posts: {category.subject}</h2>
      <ul>
        {category.posts.map(post => (
          <li key={post.slug}>
            <h3>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h3>
            <Date datestring={post.date} />{' '}
          </li>
        ))}
      </ul>
      <Link href="/blog">
        <a>Back to blog</a>
      </Link>
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

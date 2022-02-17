import { getSortedPostsData } from '../lib/posts';
import { getSortedCategories } from '../lib/categories';
import Link from 'next/link';
import Date from '../components/date';
import Layout from '../components/layout';
import { getCategoryBySlug } from '../lib/categories';

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
      <section>
        <h2>Categories</h2>
        <ul>
          {categories.map(category => (
            <li key={category.slug}>
              <h3>
                <Link href={category.permalink}>
                  <a>{category.subject}</a>
                </Link>
              </h3>
              <p>{category.description}</p>
            </li>
          ))}
        </ul>
        <h2>Posts</h2>
        <ul>
          {posts.map(({ slug, date, title, category }) => (
            <li key={slug}>
              <h3>
                <Link href={`/posts/${slug}`}>
                  <a>{title}</a>
                </Link>
              </h3>
              <Date datestring={date} />
              Category:{' '}
              <Link href={category.permalink}>
                <a>{category.subject}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Layout from '../components/layout';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <Layout title="Blog">
        <section>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ slug, date, title }) => (
              <li key={slug}>
                <h3>
                  <Link href={`/posts/${slug}`}>
                    <a>{title}</a>
                  </Link>
                </h3>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}

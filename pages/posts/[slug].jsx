import { getAllPostsSlugs, getPostData } from '../../lib/posts';
import { getCategoryBySlug } from '../../lib/categories';
import Date from '../../components/date';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Post({ post }) {
  return (
    <>
      <Layout post title={post.title}>
        <article>
          <h2>{post.title}</h2>
          <Date datestring={post.date} />
          Category:{' '}
          <Link href={post.category.permalink}>
            <a>{post.category.subject}</a>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
        <Link href="/blog">
          <a>{'<--'} Back to blog</a>
        </Link>
      </Layout>
    </>
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

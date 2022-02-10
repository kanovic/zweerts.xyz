import { getAllPostsSlugs, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Post({ postData }) {
  return (
    <>
      <Layout post title={postData.title}>
        <article>
          <h2>{postData.title}</h2>
          <Date datestring={postData.date} />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        <Link href="/blog">
          <a>Back to blog</a>
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
      postData,
    },
  };
}

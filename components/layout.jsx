import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, home, title, post }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="My personal website talking about things that matter to me"
        />
        <title>{title} | ZWEERTS.xyz</title>
      </Head>
      <h1>ZWEERTS.xyz</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <main>{children}</main>
      {!home && !post && (
        <Link href="/">
          <a>Back to home</a>
        </Link>
      )}
    </>
  );
}

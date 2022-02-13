import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
      <Layout title="Home" home />
      <h2>About this website</h2>
      <p>
        This is my personal domain where I run my web and email server.
        <br />
        In the blog section I will post about things that matter to me:
        <br />
        <ol>
          <li>
            Hobbies:
            <br />
            <ul>
              <li>Underground house/hip-hop</li>
              <li>Golf</li>
              <li>Technology</li>
            </ul>
          </li>
          <li>
            {"'"}Freelancing{"'"} under the name{' '}
            <a href="https://koeneraad.com" target={'_blank'} rel="noreferrer">
              <em>Koeneraad</em>
            </a>
          </li>
        </ol>
      </p>
    </>
  );
}

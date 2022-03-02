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
        In the blog section I will post about things that matter to me like
        hobbies and {"'"}freelancing{"'"} under the name{' '}
        <a href="https://koeneraad.com" target={'_blank'} rel="noreferrer">
          <em>Koeneraad</em>
        </a>
      </p>
      <h2>About me</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste impedit
        sed pariatur enim totam quo? Unde fugit ipsa soluta voluptatem, sequi
        autem hic ea nisi, deserunt eveniet, dolore non at.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti rerum
        eligendi quidem ea laboriosam? Modi error inventore, autem saepe, rerum
        odit doloribus eos ipsam sed quaerat voluptates officiis quae a fugit
        nihil hic nobis! Ducimus id dolore delectus consequuntur repudiandae.
      </p>
      <h2>Contact</h2>
      <p>
        For personal question you can reach me at{' '}
        <a href="mailto:koen@zweerts.xyz">koen@zweerts.xyz</a>
      </p>
      <p>
        For projects or business related questions contact me at{' '}
        <a href="mailto:info@koeneraad.com">info@koeneraad.com</a>
      </p>
    </>
  );
}

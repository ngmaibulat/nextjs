import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

import Link from 'next/link';
import Date from '../components/date';
import Footer from '../components/footer';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps()
{
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home(props)
{
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Link href="/demo/first">Page</Link>
        <Link href="/static/test.html">Static</Link>

        <ul>
          {props.allPostsData.map(({ id, date, title }) => (
          
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>

          ))}
        </ul>

        <div className={styles.grid}>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

        </div>
      </main>


      <Footer />

    </div>
  )
}

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.css';

import Layout from '../../components/layout';


export async function getStaticProps()
{
    // Get external data from the file system, API, DB, etc.
    const links = [
        'https://youtube.com',
        'https://vimeo.com',
        'https://brilliant.org',
        'https://nextjs.org/learn/basics/data-fetching/with-data'
    ];
  
    // The value of the `props` key will be
    // passed to the `Home` component
    
    return {
        props: {
            links,
        }
    }
}

function mapLinks(links)
{
    return links.map(item => <li key={item}><Link href={item}>{item}</Link></li>)
}

export default function firstPost(props)
{
    return (
    <Layout>

    <Head>
        <title>Create Next Thing!</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <p className="lead">
        This is a lead paragraph. It stands out from regular paragraphs.
    </p>
    <Link href="/">Home</Link>
    <h3>Links</h3>
    <ul>
    {mapLinks(props.links)}
    </ul>

    <Image
    src="/img/01.jpg" // Route of the image file
    // height={300} // Desired size with correct aspect ratio
    // width={300} // Desired size with correct aspect ratio

    width={512}
    height={342}

    alt="Lady"
    />

    </Layout>
    );
}

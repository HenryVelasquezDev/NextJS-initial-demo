import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function AboutPage(){
    return (
        <>
          <Head>
            <title>Home - NextJs</title>
            <meta name="description" content="About page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={`${styles.main} ${inter.className}`}>
            
            <div className={styles.description}>
              <p>
               Ir a <a href="/" >Home</a>
              </p>
            </div>
            
            <div className={styles.description}>
              <p>
                Get started by editing&nbsp;
                <code className={styles.code}>pages/about.jsx</code>
              </p>
            </div>
          </main>
        </>
      )
}

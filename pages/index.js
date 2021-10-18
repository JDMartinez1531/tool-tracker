import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Map from "../components/Map";
import Nav from "../components/Nav";
import Header from "../components/Header";


export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>Tool Tracker</title>
          <meta name="description" content="Interactive map for tracking custom locations" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Tool Tracker
          </h1>

          <div className={styles.mapContainer}>
            {/* <Map /> */}
          </div>
        </main>

        <footer className={styles.footer}>
          <div
          >
            Developed by {""}
            <span className={styles.logo}>
              Joshua Martinez
            </span>
          </div>
        </footer>
      </div>
    </>
  )
}

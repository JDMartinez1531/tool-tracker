import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Map from "../components/Map";
import Nav from "../components/Nav";
import { TablePagination, TableCell } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListCard from "../components/ListCard";

export default function Home() {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <Head>
                    <title>Tool Tracker</title>
                    <meta name="description" content="Interactive map for tracking custom locations" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Job Sites
                    </h1>
                </main>

                <ListCard />

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

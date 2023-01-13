import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

const inter = Inter({ subsets: ["latin"] });

export default function Storage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Navbar />
        </Container>
      </main>
    </>
  );
}
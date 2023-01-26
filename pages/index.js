import Head from "next/head";
import "@fontsource/montserrat";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Disney Clone</title>
        <meta name="description" content="Disney, your dream land!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </>
  );
}

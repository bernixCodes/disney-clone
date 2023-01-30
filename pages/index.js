import Head from "next/head";
import "@fontsource/montserrat";
import Header from "@/components/Header";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
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

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}

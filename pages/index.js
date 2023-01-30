import Head from "next/head";
import "@fontsource/montserrat";
import Header from "@/components/Header";
import { getSession, useSession } from "next-auth/react";
import Hero from "./../components/Hero";
import Slider from "@/components/Slider";
import Brands from "./../components/Brands";

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
      {!session ? (
        <Hero />
      ) : (
        <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
          <Slider />
          <Brands />
        </main>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}

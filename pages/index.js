import Head from "next/head";
import "@fontsource/montserrat";
import Header from "@/components/Header";
import { getSession, useSession } from "next-auth/react";
import Hero from "./../components/Hero";
import Slider from "@/components/Slider";
import Brands from "./../components/Brands";
import MoviesCollection from "@/components/MoviesCollection";
import ShowsCollection from "@/components/ShowsCollection";

export default function Home({
  upcomingMovies,
  popularMovies,
  topRatedShows,
  popularShows,
}) {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Disney Clone</title>
        <meta name="description" content="Disney, your dream land!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>

      <Header />
      {!session ? (
        <Hero />
      ) : (
        <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
          <Slider />
          <Brands />
          <MoviesCollection
            movieType={upcomingMovies}
            title="Upcoming Movies"
          />
          <ShowsCollection movieType={popularShows} title="Popular Shows" />
          <MoviesCollection movieType={popularMovies} title="Popular Movies" />
          <ShowsCollection movieType={topRatedShows} title="Top Rated Shows" />
        </main>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const [
    upcomingMoviesRes,
    popularMoviesRes,
    topRatedShowsRes,
    popularShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.movieApiKey}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.movieApiKey}&language=en-US&page=2`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.movieApiKey}&language=en-US&page=1`
    ),
    fetch(`
      https://api.themoviedb.org/3/tv/popular?api_key=${process.env.movieApiKey}&language=en-US&page=2`),
  ]);

  const [upcomingMovies, popularMovies, topRatedShows, popularShows] =
    await Promise.all([
      upcomingMoviesRes.json(),
      popularMoviesRes.json(),
      topRatedShowsRes.json(),
      popularShowsRes.json(),
    ]);
  return {
    props: {
      session,
      upcomingMovies: upcomingMovies.results,
      popularMovies: popularMovies.results,
      topRatedShows: topRatedShows.results,
      popularShows: popularShows.results,
    },
  };
}

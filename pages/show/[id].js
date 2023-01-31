import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import { getSession, useSession } from "next-auth/react";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";

const Show = ({ data }) => {
  const router = useRouter();
  console.log("data", data);
  const { data: session } = useSession();
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);

  const index = data.videos.results.findIndex((ele) => ele.type === "Trailer");
  return (
    <div>
      <Head>
        <title>{data.name || data.original_name}</title>
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <Header />

      {!session ? (
        <Hero />
      ) : (
        <section className="relative z-50">
          <div className="relative min-h-[calc(100vh-72px)]">
            <Image
              src={
                `${BASE_URL}${data.backdrop_path}` ||
                `${BASE_URL}${data.poster_path}`
              }
              style={{ objectFit: "cover" }}
              fill
              alt=""
            />
          </div>
          <div className="absolute inset-y-28  md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {data.name || data.original_name}
            </h1>
            <div className="flex items-center space-x-3 md:space-x-5">
              <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                <img
                  className="h-6 md:h-8 "
                  src="/images/play-icon-black.svg"
                  alt=""
                />
                <span className="uppercase font-medium tracking-wide">
                  Play
                </span>
              </button>

              <button
                onClick={() => setShowPlayer(true)}
                className="text-xs md:text-base bg-black/30 text-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
              >
                <img
                  className="h-6 md:h-8 "
                  src="/images/play-icon-white.svg"
                  alt=""
                />
                <span className="uppercase font-medium tracking-wide">
                  Trailer
                </span>
              </button>

              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <AiOutlinePlus className="h-6 " />
              </div>

              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <img src="/images/group-icon.svg" alt="" />
              </div>
            </div>

            <p>
              {data.release_date || data.first_air_date} .{" "}
              {Math.floor(data.runtime / 60)}h {Math.floor(data.runtime % 60)}m
              . {data.genres.map((genre) => genre.name + " ")}
            </p>
            <h4 className="text-sm md:text-lg max-w-4xl">{data.overview}</h4>
          </div>

          {showPlayer && (
            <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
          )}
          <div
            className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
              showPlayer ? "opacity-100 z-50" : " opacity-0"
            }`}
          >
            <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
              <span className="font-semibold">Play Trailer</span>
              <div
                onClick={() => setShowPlayer(false)}
                className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0f0f0f]"
              >
                <AiOutlineClose className="h-5" />
              </div>
            </div>
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${data.videos?.results[index]?.key}}`}
                width="100%"
                height={"100%"}
                style={{ position: "absolute", top: "0", left: "0" }}
                controls={true}
                playing={showPlayer}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Show;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.query;
  const request = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.movieApiKey}&language=en-US&append_to_response=videos`
  );
  const data = await request.json();

  return {
    props: {
      session,
      data,
    },
  };
}

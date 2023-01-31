import Image from "next/image";
import { useRouter } from "next/router";

const ShowThumbnail = ({ movie }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const router = useRouter();

  return (
    <div
      title={movie.title}
      onClick={() => router.push(`/show/${movie.id}`)}
      className="flex min-w-[250px] min-h-[170px] object-cover md:min-w-[300px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
    >
      <Image
        src={
          `${BASE_URL}${movie.backdrop_path}` ||
          `${BASE_URL}${movie.poster_path}`
        }
        width={300}
        height={210}
        className="rounded-lg object-cover"
        alt=""
      />
    </div>
  );
};

export default ShowThumbnail;

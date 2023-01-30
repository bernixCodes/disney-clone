import Image from "next/image";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillStar,
} from "react-icons/ai";

import { MdMovie } from "react-icons/md";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="sticky top-0 bg-[#040714] text-white z-[1000] h-[72px] flex items-center px-10 md:px-12">
      <Image
        src={"/images/logo.svg"}
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />

      {session && (
        <div className="hidden ml-10 md:flex items-center space-x-6">
          <a className="header-link group">
            <AiFillHome className="h-4" />
            <span className="span">Home</span>
          </a>
          <a className="header-link group">
            <AiOutlineSearch className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <AiOutlinePlus className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <AiFillStar className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="" className="h-4" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <MdMovie className="h-4" />
            <span className="span">Series</span>
          </a>
        </div>
      )}

      {!session ? (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200 "
          onClick={() => signIn()}
        >
          Login
        </button>
      ) : (
        <Image
          src={session.user.image}
          alt=""
          width={36}
          height={36}
          className={`ml-auto  rounded-full object-cover cursor-pointer`}
          onClick={() => signOut()}
        />
      )}
    </div>
  );
};

export default Header;

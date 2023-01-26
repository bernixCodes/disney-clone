import Image from "next/image";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillStar,
} from "react-icons/ai";

import { BiCameraMovie } from "react-icons/bi";
import { MdMovie } from "react-icons/md";
import { signIn } from "next-auth/react";

const Header = () => {
  return (
    <div className="sticky top-0 bg-[#040714] text-white z-[1000] h-[72px] flex items-center px-10 md:px-12">
      <Image
        src={"/images/logo.svg"}
        width={80}
        height={80}
        className="cursor-pointer"
      />

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

      <button
        className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200 "
        onClick={signIn}
      >
        Login
      </button>
    </div>
  );
};

export default Header;

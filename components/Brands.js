import Image from "next/image";

const Brands = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1440px] mx-auto ">
      <div className="brand group">
        <Image
          src={"/images/disnep.png"}
          fill
          style={{ objectFit: "cover" }}
          alt=""
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/disney.mp4" type="video/mp4"></source>
        </video>
      </div>

      <div className="brand group">
        <Image
          src={"/images/marvel.png"}
          fill
          style={{ objectFit: "cover" }}
          alt=""
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/marvel.mp4" type="video/mp4"></source>
        </video>
      </div>

      <div className="brand group">
        <Image
          src={"/images/national-geographic.png"}
          fill
          style={{ objectFit: "cover" }}
          alt=""
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source
            src="/videos/national-geographic.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>

      <div className="brand group">
        <Image
          src={"/images/pixar.png"}
          fill
          style={{ objectFit: "cover" }}
          alt=""
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/pixar.mp4" type="video/mp4"></source>
        </video>
      </div>

      <div className="brand group">
        <Image
          src={"/images/starwars.png"}
          fill
          style={{ objectFit: "cover" }}
          alt=""
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/star-wars.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
};

export default Brands;

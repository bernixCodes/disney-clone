import Head from "next/head";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <Head>
        <title>Log in | Disnry+</title>
        <link rel="icon" href="/images/favicon.svg" />
      </Head>

      <div className="relative min-h-[calc(100vh-72px)]">
        <Image
          src={"/images/hero-background.jpg"}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex justify-center items-center">
        <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16">
          <Image
            src={"/images/cta-logo-one.svg"}
            width="600"
            height={150}
            className="object-contain"
          />
          <button className="uppercase bg-blue-600 text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]">
            Get all there
          </button>

          <p className="text-xs text-center">
            Get Premier Access to Raya and the last Dragon for an additional fee
            with a Disney+ subscription. As of 31/01/23, the price of Disney+ is
            increased.
          </p>

          <Image
            src={"/images/cta-logo-two.png"}
            width="600"
            height={70}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

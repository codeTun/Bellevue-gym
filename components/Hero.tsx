"use client";
import { SparklesCore } from "./ui/sparkles";

function Hero() {
  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md relative">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm z-0 w-full h-full"
        style={{ backgroundImage: 'url("/img/hero-image.jpg")' }}
      ></div>

      <h1 className="md:text-5xl text-2xl lg:text-8xl font-bold text-center text-white relative z-20">
        SPORTING CLUB
      </h1>
      <div className="w-[40rem] h-40 relative z-10">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export default Hero;

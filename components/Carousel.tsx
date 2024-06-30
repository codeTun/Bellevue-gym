"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

import carouselData from "../data/carouselData.json"; // Assuming the JSON file is named carouselData.json and is in the same directory

function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
const Caroussel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % carouselData.carouselItems.length
      );
    }, 4000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel className="rounded-lg overflow-hidden">
        <CarouselContent>
          <CarouselItem key={currentIndex}>
            <div className="relative group">
              <img
                src={carouselData.carouselItems[currentIndex].imageSrc}
                alt={carouselData.carouselItems[currentIndex].altText}
                width={carouselData.carouselItems[currentIndex].width}
                height={carouselData.carouselItems[currentIndex].height}
                className="w-full h-[400px] object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)] flex items-end p-6 transition-all duration-300 group-hover:from-[rgba(0,0,0,0.3)] group-hover:to-[rgba(0,0,0,0.1)]">
                <div className="text-white space-y-2">
                  <h3 className="text-2xl font-bold">
                    {carouselData.carouselItems[currentIndex].title}
                  </h3>
                  <p className="text-lg">
                    {carouselData.carouselItems[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-colors"
          onClick={() =>
            setCurrentIndex(
              currentIndex === 0
                ? carouselData.carouselItems.length - 1
                : currentIndex - 1
            )
          }
        >
          <ChevronLeftIcon className="w-6 h-6 text-black" />
        </CarouselPrevious>
        <CarouselNext
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-colors"
          onClick={() =>
            setCurrentIndex(
              (currentIndex + 1) % carouselData.carouselItems.length
            )
          }
        >
          <ChevronRightIcon className="w-6 h-6 text-black" />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default Caroussel;

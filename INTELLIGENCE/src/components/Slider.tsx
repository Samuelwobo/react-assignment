import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&q=80",
    species: "SPECIES",
    title: "Siberian Tiger",
    status: "Endangered"
  },
  {
    image: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&q=80",
    species: "SPECIES",
    title: "Snow Leopard",
    status: "Vulnerable"
  },
  {
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80",
    species: "SPECIES",
    title: "Giant Panda",
    status: "Vulnerable"
  },
  {
    image: "https://images.unsplash.com/photo-1474314170901-f351b68f544f?auto=format&fit=crop&q=80",
    species: "SPECIES",
    title: "Red Panda",
    status: "Endangered"
  }
];

const Slider = () => {
  return (
    <div className="relative h-screen">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-screen">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-[#1A1F2C]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1F2C]"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                  <div className="max-w-4xl w-full animate-fade-in">
                    <p className="text-sm uppercase tracking-wider mb-2 text-primary">{slide.species}</p>
                    <h1 className="text-6xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-xl text-gray-300">{slide.status}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default Slider;
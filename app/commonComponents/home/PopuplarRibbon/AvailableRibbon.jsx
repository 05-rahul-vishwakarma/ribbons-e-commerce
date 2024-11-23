"use client";

import Image from "next/image";
import React from "react";

import caroselImage from "@/app/assets/images/home/insideCarousel.png";

export default function AvailableRibbon() {
  const image = [
    { image: caroselImage, title: "", id: "section1" },
    { image: caroselImage, title: "", id: "section2" },
    { image: caroselImage, title: "", id: "section3" },
    { image: caroselImage, title: "", id: "section4" },
    { image: caroselImage, title: "", id: "section5" },
    { image: caroselImage, title: "", id: "section6" },
    { image: caroselImage, title: "", id: "section7" },
    { image: caroselImage, title: "", id: "section8" },
    { image: caroselImage, title: "", id: "section9" },
    { image: caroselImage, title: "", id: "section10" },
    { image: caroselImage, title: "", id: "section11" },
    { image: caroselImage, title: "", id: "section12" },
    { image: caroselImage, title: "", id: "section13" },
    { image: caroselImage, title: "", id: "section14" },
    { image: caroselImage, title: "", id: "section15" },
    { image: caroselImage, title: "", id: "section15" },
    { image: caroselImage, title: "", id: "section15" },
  ];
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="mt-10 w-[95%] mx-auto">
      <div className=" ">
        <h1 className="font-semibold text-center text-3xl">
          Available Top Ribbons
        </h1>
        <div className="flex overflow-x-auto mt-5  pl-4 sapce-x-4 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-transparent ">
          {image.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-1/6 flex flex-col items-center space-y-2">
             
                <Image
                  src={item.image} // Use a placeholder or actual image URL
                  alt={item.title}
                  width={200}
                  height={200}
                  className="rounded-t-lg object-cover w-40 h-40"
                />
              <p>{item.id}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="w-12 h-1 bg-blue-500 rounded-md"></div> */}
    </section>
  );
}

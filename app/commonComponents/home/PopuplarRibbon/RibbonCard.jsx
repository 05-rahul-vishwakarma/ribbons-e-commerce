import Image from "next/image";
import React from "react";
import caroselImage from "@/app/assets/images/home/insideCarousel.png";

export default function RibbonCard() {
  const cardDetail = [
    {
      title: "Printed SAtin Ribbons",
      image: caroselImage,
      btnTitle: "CUSTOMIZED ->",
    },
    {
      title: "Printed SAtin Ribbons",
      image: caroselImage,
      btnTitle: "CUSTOMIZED ->",
    },
    {
      title: "Printed SAtin Ribbons",
      image: caroselImage,
      btnTitle: "CUSTOMIZED ->",
    },
    {
      title: "Printed SAtin Ribbons",
      image: caroselImage,
      btnTitle: "CUSTOMIZED ->",
    },
    {
      title: "Printed SAtin Ribbons",
      image: caroselImage,
      btnTitle: "CUSTOMIZED ->",
    },
    {
      title: "Printed SAtin Ribbons",
      image: caroselImage,
      btnTitle: "CUSTOMIZED ->",
    },
    {
      title: "Printed SAtin Ribbons",
      image: caroselImage,
      btnTitle: "CUSTOMIZED ->",
    },
    {
      title: "Printed SAtin Ribbons",
      image: caroselImage,
      btnTitle: "CUSTOMIZED ->",
    },
  ];
  return (
    <section className="flex flex-wrap w-[95%] mx-auto ">
      {cardDetail.map((item, index) => (
        <div key={index} className=" sm:w-1/2 md:w-1/4 p-4 ">
          {/* adjust accourding to screen */}
          <div className="text-grey-300 text-center">
            <h2>{item.title}</h2>
          </div>

          <div className="">
            <Image
              src={item.image} // Use a placeholder or actual image URL
              alt={item.image}
              width={400}
              height={800}
              quality={100}
              className="object-cover h-full"
            />
          </div>

          <div className=" flex  items-center justify-center">
            <button className="bg-orange-500  text-white font-bold py-3 px-10 rounded-full">
              {item.btnTitle}
            </button>
          </div>

        </div>
      ))}
    </section>
  );
}

import Image from "next/image";
import React from "react";
import caroselImage from "@/app/assets/images/home/insideCarousel.png";

export default function DiscovermoreRibbon() {
  const items = [
    {
      heading: "GET INSPIRED WITH INSTAGRAM",
      descriptions:
        "Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      btn: "DISCOVER MORE ->",
    },
  ];
  const image1 = [{ image: caroselImage }];
  const image2 = [{ image: caroselImage }];
  return (
    <section className=" mt-12 p-10 flex w-[95%]  mx-auto flex justify-between justify-center items-center ">
      {items.map((item, index) => (
        <div key={index} className="w-[35vh] ">
          <h3 className="text-lg font-semibold">{item.heading}</h3>
          <div className="text-gray-700 mt-5">{item.descriptions}</div>
          <section>
            <div className="justify-center text-grey-300 mt-10">
            <button className="bg-orange-500 hover:bg-gray-200 text-black font-bold py-3 px-10 rounded-full mt-5">{item.btn}</button>
            </div>
          </section>
        </div>
      ))}

      <div>
        {image1.map((item, index) => (
          <div key={index} className=" w-[45vh]">
            <Image
              src={item.image} // Use a placeholder or actual image URL
              alt={item.title}
             
              className="rounded-t-lg object-cover w-full"
            />
          </div>
        ))}
      </div>
      <div>
        {image2.map((item, index) => (
          <div key={index} className=" w-[45vh]">
            <Image
              src={item.image} // Use a placeholder or actual image URL
              alt={item.title}
              
              className="rounded-t-lg object-cover w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

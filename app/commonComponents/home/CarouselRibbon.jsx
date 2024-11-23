import React from "react";

export default function CarouselRibbon() {
  const items = [
    {
      title: "The Ribbon",
      discription:
        "the Ribbon pack is one of the well known organisations that is Providing Customized Fail or Leaf Printed Ribobns as-well-as wide ranfe of gifting & decorative ribbons like imported waven edge",
      btn: "KNOW MORE",
    },
  ];
  return (
    <section className="h-full">
     
      {items.map((item, index) => (
        <div key={index} className="w-full h-full mt-[110] p-8">
          <div className="text-5xl font semi-bold font-bold tracking-widest"> <h1>{item.title}</h1></div>
         <div className="mt-5 text-base tracking-wide h-[50%]">

          <p>{item.discription}</p>
         </div>
          <button className="bg-orange-500 hover:bg-green-700 text-white font-bold py-3 px-10 rounded mt-5">{item.btn}</button>
        </div>
      ))}
    </section>
  );
}

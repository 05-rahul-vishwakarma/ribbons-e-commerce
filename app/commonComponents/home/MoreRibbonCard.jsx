import React from "react";

export default function MoreRibbonCard() {
  const cardItem = [
    {
      heading: "WANT TO GET CUSTOMIZED RIBBONS?",
      description:
        "Choose ribbons from our wide range of qualities, sizes & colors and get them customised according to your need.",
      btn: "DISCOVER MORE",
    },
  ];

  return (
    <div className=" mt-12 w-full bg-gray-100 ">
      {" "}
      {/* Center main container */}
      {cardItem.map((item, index) => (
        <div
          key={index}
          className="w-[95%] h-[13.33vh] flex justify-center justify-between items-center mx-auto p-8"
        >
          {" "}
          {/* Center card */}
          <div className=" ">
            {" "}
            {/* Center content within card */}
            <div className="">
              {" "}
              {/* Text center alignment */}
              <h3 className="text-gray-700 text-lg">{item.heading}</h3>
              <div className="text-gray-500">{item.description}</div>
            </div>
          </div>
          <div>
            <button className="bg-orange-500 hover:bg-gray-200 text-black font-bold py-3 px-10 rounded-full ">
              {item.btn}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

import Image from "next/image";
import React from "react";

export default function RibbonCard() {
  const cardDetail = [
    {
      title: "Printed SAtin Ribbons",
      image: "",
      heading: "Card with an images",
      btnTitle: "CUSTOMIZED ->",
    },
    {
      title: "Printed SAtin Ribbons",
      image: "",
      heading: "Card with an images",
      btnTitle: "CUSTOMIZED ->",
    },
    {
      title: "Printed SAtin Ribbons",
      image: "",
      heading: "Card with an images",
      btnTitle: "CUSTOMIZED ->",
    },
    {
      title: "Printed SAtin Ribbons",
      image: "",
      heading: "Card with an images",
      btnTitle: "CUSTOMIZED ->",
    },
    {
      title: "Printed SAtin Ribbons",
      image: "",
      heading: "Card with an images",
      btnTitle: "CUSTOMIZED ->",
    },
    {
      title: "Printed SAtin Ribbons",
      image: "",
      heading: "Card with an images",
      btnTitle: "CUSTOMIZED ->",
    },
    {
      title: "Printed SAtin Ribbons",
      image: "",
      heading: "Card with an images",
      btnTitle: "CUSTOMIZED ->",
    },
    {
      title: "Printed SAtin Ribbons",
      image: "",
      heading: "Card with an images",
      btnTitle: "CUSTOMIZED ->",
    },
  ];
  return (
    <section className="flex flex-wrap justify-center mt-5 p-10">
      {cardDetail.map((item, index) => (
        <div key={index} className="top-[75] mt-5 w-[20%]  sm:w-1/2 md:w-1/4 px-2 mb-4">
          {/* adjust accourding to screen */}
          <div className="mt-5 top-[20vh] h-[40%]">
            <div className="ml-5">
              <h3 className="text-black-300 font-bold mb-4 text-center">
                {item.title}
              </h3>
              <div className="bg-white rounded-lg shadow-lg">
                <Image
                  src={item.image || "/placeholder.png"} // Use a placeholder or actual image URL
                  alt={item.title}
                  width={500}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-32"
                />
                <div className="p-6">
                  <h2 className="font-bold mb-2 text-2xl text-center text-purple-800">
                    {item.heading}
                  </h2>

                  <section>
                    <div className="justify-center text-grey-300 ">
                      <a
                        href="!"
                        className="button button--winona p-0 bg-orange-500 hover:bg-white-700 hover:text-white relative block focus:outline-none border-2 border-solid rounded-full text-center font-semibold uppercase tracking-widest align-middle overflow-hidden r-10"
                        data-text="Read More"
                      >
                        <span className="align-middle block p-3">
                          {item.btnTitle}
                        </span>
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

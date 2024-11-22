import Image from "next/image";
import React from "react";

export default function DiscovermoreRibbon() {
  const items = [
    {
      heading: "GET INSPIRED WITH INSTAGRAM",
      descriptions:
        "Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      btn: "DISCOVER MORE ->",
    },
  ];
  const images = [{ image: "" }, { image: "" }];
  return (
    <section className="h-[30vh] mt-12 p-10 relative flex">
      {items.map((item, index) => (
        <div key={index} className="w-[30vh]">
          <h3 className="text-lg font-semibold">{item.heading}</h3>
          <div className="text-gray-700 mt-5">{item.descriptions}</div>
          <section>
            <div className="justify-center text-grey-300 mt-10">
              <a
                href="!"
                className="button button--winona p-0 bg-orange-500 hover:bg-white-700 hover:text-white relative block focus:outline-none border-2 border-solid rounded-full text-center font-semibold uppercase tracking-widest align-middle overflow-hidden r-10"
                data-text="Read More"
              >
                <span className="align-middle block p-3 pr-10 pl-10">
                  {item.btn}
                </span>
              </a>
            </div>
          </section>
        </div>
      ))}

      <div>
        {images.map((item, index) => (
          <div key={index} className="relative flex-row">
            <Image
              src={item.image || "/placeholder.png"} // Use a placeholder or actual image URL
              alt={item.title}
              width={800}
              height={800}
              className="rounded-t-lg object-cover w-full h-32"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

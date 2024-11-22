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
    <div className="h-auto mt-12 relative flex-row">
      {cardItem.map((item, index) => (
        <div key={index}>
          <div className="bg-gray-100 w-full h-[13.33vh] flex justify-between items-center p-4">
            <div>
              <h3 className="text-lg font-semibold">{item.heading}</h3>
              <div className="text-gray-700">{item.description}</div>
            </div>
            <section>
                  <div className="justify-center text-grey-300 ">
                  <a
                href="!"
                className="button button--winona p-0 bg-orange-500 hover:bg-white-700 hover:text-white relative block focus:outline-none border-2 border-solid rounded-full text-center font-semibold uppercase tracking-widest align-middle overflow-hidden r-10"
                data-text="Read More"
              >
                      <span className="align-middle block p-3 pr-10 pl-10">{item.btn}</span>
                    </a>
                  </div>
                </section>
          </div>
        </div>
      ))}
    </div>
  );
}

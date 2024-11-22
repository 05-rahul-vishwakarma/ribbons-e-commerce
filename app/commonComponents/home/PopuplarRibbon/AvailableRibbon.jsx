"use client"

import Image from "next/image";
import React from "react";

export default function AvailableRibbon() {
  const image = [
    { image: "/placeholder1.png", title: "", id: "section1" },  
    { image: "/placeholder2.png", title: "", id: "section2" },  
    { image: "/placeholder3.png", title: "", id: "section3" },  
    { image: "/placeholder4.png", title: "", id: "section4" },  
    { image: "/placeholder5.png", title: "", id: "section5" },  
    { image: "/placeholder6.png", title: "", id: "section6" }, 
  ];
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if(section) {
      section.scrollIntoView({ behavior: "smooth"});
    }
  };
  return (
    <section className="mt-10">
      <h1 className="font-semibold text-center text-lg">Available Top Ribbons</h1>
      <div className="flex overflow-x-auto mt-5  pl-10 sapce-x-4">
      
        {image.map((item, index) => (
        
          <div key={index}className=" ml-10 item-center">
           
            <div  className="  ">
              <Image
                src={item.image || "/placeholder.png"} // Use a placeholder or actual image URL
                alt={item.title}
                width={200}
                height={200}
                className="rounded-t-lg object-cover w-full h-32"
              />
               <button  
              onClick={() => scrollToSection(item.id)}  
              className="mt-2 bg-blue-500 text-white rounded px-4 py-2"  
            >  
              {item.title}  
            </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

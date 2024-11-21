import Image from "next/image";
import { FaHandsHelping, FaAward, FaCogs, FaRecycle } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="h-auto mt-12 relative">
      {/* Icon Row */}
      <div className="bg-gray-100 w-[96%] h-[60vh] ">
        <IconRow />
      </div>

      {/* Footer Content */}
      <div className="text-white absolute bg-gray-900 w-[96%] right-0 top-28 rounded-tl-2xl pt-12 pb-6">
        <div
          className="grid gap-6 p-6 bg-gray-900 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center "
        >
          <FooterLeftSection />
          <FooterMiddleSection />
          <FooterRightSection />
        </div>
      </div>

    </div>
  );
}

function IconRow() {
  const items = [
    { icon: <FaHandsHelping size={40} />, label: "ONE-STOP SERVICE" },
    { icon: <FaAward size={40} />, label: "CERTIFIED QUALITY" },
    { icon: <FaCogs size={40} />, label: "EXCLUSIVE CUSTOMIZATION" },
    { icon: <FaRecycle size={40} />, label: "TYPE OF MATERIAL" },
  ];

  return (
    <div className="bg-gray-100 py-6">
      <div className="flex pl-8 justify-center space-x-4 sm:space-x-8 lg:space-x-12">
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-gray-700 mb-2 block mx-auto w-min ">{item.icon}</div>
            <p className="text-sm font-semibold">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FooterLeftSection() {
  return (
    <div>
      <Image
        src="/logo.png"
        alt="Logo"
        width={150}
        height={80}
        className="w-16 h-14"
      />
      <p className="mt-4 text-sm">
        We take great pride in designing secure and safe havens for each and
        every one of our homes.
      </p>
      <div className="flex mt-4">
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 w-full rounded-l-md text-black"
        />
        <button className="bg-orange-500 text-white px-4 rounded-r-md">
          Search
        </button>
      </div>
    </div>
  );
}

function FooterMiddleSection() {
  const links = ["About", "Services", "Project", "News", "Contact Us"];

  return (
    <div>
      <h3 className="font-bold mb-4">Useful Links</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
}

function FooterRightSection() {
  const posts = ["Simple Concepts", "Room of Ideas", "20 Days of Innovation"];

  return (
    <div>
      <h3 className="font-bold mb-4">Recent Posts</h3>
      <ul className="space-y-2 text-sm">
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
}

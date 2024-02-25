import React from "react";
import logo from "@/img_resource/logo.png";
import Image from "next/image";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Menu",
      path: "/menu",
    },
    {
      name: "Chefs",
      path: "/chefs",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="bg-white py-3">
      <div className="lg:w-[1400px] mx-auto flex justify-between items-center">
        {/* logo. */}
        <Image src={logo} alt="logo" width={200} height={70} />
        <div className="flex justify-center item-center gap-4">
          {routes.map((item, idx) => (
            <Link href={item.path} className="text-black font-bold" key={idx}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="text-black flex justify-center item-center gap-8 text-4xl">
          <Link href="/user_cart" className="relative">
          <CgShoppingCart className="bg-[#ffebda] p-2 rounded-full" ></CgShoppingCart>
          <span className="bg-[#ff7c08] text-white p-1 text-xs font-semibold absolute top-[-14px] left-[25px] rounded-full">13</span>
          </Link>
          <Link href="/user_profile"><FaUser className="bg-[#ffebda] p-2 rounded-full"/></Link> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;

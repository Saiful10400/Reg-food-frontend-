import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const TopContact = () => {
  return (
    <div className="bg-[#231f40] h-[50px]">
      <div className="w-[1400px] mx-auto flex h-full justify-center items-center">
        <div className="w-1/2 bg-[#ff7c08] h-full -skew-x-[30deg] flex justify-center items-center">
          <div className="skew-x-[30deg] flex mx-auto gap-4 w-3/5">
            <div className="flex justify-center items-center text-md ">
              <MdEmail />
              <span className="ml-2">RegFood@gmail.com</span>
            </div>
            <div className="flex justify-center items-center text-md">
              <FaPhoneAlt />
              <span className="ml-2">+96487452145214</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center text-[28px] text-gray-100 gap-2 ">
          <FaFacebookF className="bg-[#ff7c08] rounded-full p-1" />
          <FaXTwitter className="bg-[#ff7c08] rounded-full p-1" />
          <FaLinkedinIn className="bg-[#ff7c08] rounded-full p-1" />
          <FaInstagram className="bg-[#ff7c08] rounded-full p-1" />
        </div>
      </div>
    </div>
  );
};

export default TopContact;

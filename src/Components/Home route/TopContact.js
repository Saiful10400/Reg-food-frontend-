import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import ContactButton from "@/Shared/ContactButton";
const TopContact = () => {
  return (
    <div className="bg-[#231f40] h-[50px]">
      <div className="lg:w-[1400px] mx-auto flex h-full justify-center items-center">
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
        <ContactButton></ContactButton>
      </div>
    </div>
  );
};

export default TopContact;

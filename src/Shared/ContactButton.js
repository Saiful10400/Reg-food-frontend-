import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactButton = () => {
    return (
        <div className="w-1/2 flex justify-end items-center text-[28px] text-gray-100 gap-2 ">
          <FaFacebookF className="bg-[#ff7c08] rounded-full p-1" />
          <FaXTwitter className="bg-[#ff7c08] rounded-full p-1" />
          <FaLinkedinIn className="bg-[#ff7c08] rounded-full p-1" />
          <FaInstagram className="bg-[#ff7c08] rounded-full p-1" />
        </div>
    );
};

export default ContactButton;
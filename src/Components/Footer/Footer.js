import React from 'react';
import "./footer.css"
import logo from "../../../src/img_resource/white logo.png"
import Image from 'next/image';
import ContactButton from '@/Shared/ContactButton';
const Footer = () => {
    return (
        <div className='min-h-[50vh] py-28' id='footerContainer'>
           {/* children parent div */}
           <div className='lg:w-[1400px] mx-auto flex justify-between items-center'>
            <div className='text-start'>
                <Image className='w-[200px]' src={logo} alt='logo image.'></Image>
                <p className='w-[410px] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.</p>
                <div className='mt-4'>
                <ContactButton></ContactButton>
                </div>
            </div>
            <div>short link</div>
            <div>help link</div>
            <div>Contact us.</div>
           </div>
        </div>
    );
};

export default Footer;
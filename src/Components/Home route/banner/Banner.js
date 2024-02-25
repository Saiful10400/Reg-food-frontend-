import React from 'react';
import "./banner.css"
import offerIMg from "../../../img_resource/background_resources/offer.png"
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='min-h-[85vh] overflow-y-hidden flex justify-center items-center gap-64' id='banner_container'>
            {/* text */}

            <div>
                <h1 className='text-2xl text-[#ff7c08]'>Satisfy Your Cravings</h1>
                <h1 className='font-bold text-6xl'>
                Delicious Foods With <br/> Wonderful Eating
                </h1>
                <p className='font-lg font-light mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugit <br/> minimaet debitis ut distinctio optio.</p>
                <div className='border w-[500px] rounded-full h-[70px] relative'>
                    <input className='pl-4 pr-32 w-full h-full rounded-full bg-white text-black text-lg' placeholder='Search...'/>
                    <button className='btn absolute top-[11px] right-[14px] rounded-full text-lg text-white border-none btn-primary bg-[#ff7c08]'>Search</button>
                </div>
            </div>
            {/* offer image. */}
            <div className=' relative'>
            <div className='offer_container rounded-full'>
            <div className='rounded-full offer_content overflow-hidden '>
                <Image src={offerIMg} alt='offer image.'></Image>
            </div>
            </div>
            <div className='border-[6px] absolute top-[19px] left-[-10px] border-white w-[150px] h-[150px] text-center flex justify-center items-center rounded-full  bg-[#ff7c08]'>
                <h1 className='text-white font-bold text-3xl'>
                    35% <br/> off
                </h1>
            </div>
            </div>
           
        </div>
    );
};

export default Banner;
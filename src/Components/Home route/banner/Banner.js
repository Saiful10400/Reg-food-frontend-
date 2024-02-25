import React from 'react';
import "./banner.css"
import offerIMg from "../../../img_resource/background_resources/offer.png"
import Image from 'next/image';

// import mini components.
import tomato from "../../../img_resource/background_resources/miniComponent/tomato.png"
import mint from "../../../img_resource/background_resources/miniComponent/mint.png"
import capsicum from "../../../img_resource/background_resources/miniComponent/capsicum.png"
import twosliceTomato from "../../../img_resource/background_resources/miniComponent/2sliceTomato.png"
import singleTomatoslice from "../../../img_resource/background_resources/miniComponent/singleTomatoSlice.png"
import pudina from "../../../img_resource/background_resources/miniComponent/pudina.png"

const Banner = () => {
    return (
        <div className='min-h-[88vh] overflow-y-hidden flex justify-center items-center gap-64' id='banner_container'>
            {/* text */}

            <div>
                <h1 className='text-2xl font-bold text-[#ff7c08]'>Satisfy Your Cravings</h1>
                <h1 className='font-bold text-6xl mt-4'>
                Delicious Foods With <br/> Wonderful Eating
                </h1>
                <p className='font-lg font-light mt-4 mb-8'>Delight your taste buds! Explore our online restaurant for a culinary journey. <br/>From starters to desserts, savor the finest ingredients delivered to your doorstep. <br/> Order now for a delicious experience!</p>
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
           
           {/* mini components. */}

           <Image id='tomato' className='absolute top-[180px] left-[40px] ' src={tomato} alt='tomato'></Image>
           <Image id='pudina' className='absolute top-[180px] left-[800px] ' src={pudina} alt='pudina'></Image>
           <Image id='mint' className='absolute top-[500px] left-[40px] ' src={mint} alt='mint'></Image>
           <Image id="capsicum" className='absolute bottom-[50px] left-[40px] ' src={capsicum} alt='capsicum'></Image>
           <Image id="twosliceTomato"className='absolute top-[180px] right-[40px] ' src={twosliceTomato} alt='twosliceTomato'></Image>
           <Image id='tomatoSlice' className='absolute bottom-[100px] right-[60px] ' src={singleTomatoslice} alt='singleTomatoSlice'></Image>
           
        </div>
    );
};

export default Banner;
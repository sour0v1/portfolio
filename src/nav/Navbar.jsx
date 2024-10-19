import React, { useState } from 'react';
import Banner from '../banner/Banner';
import { CiMenuKebab } from 'react-icons/ci';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    console.log(menu);
    // space-y-4 shadow-lg py-6 absolute w-full bg-white rounded-b-lg transition-transform  duration-300 origin-top ${open ? '' : 'scale-y-0'}`}>
    return (
        <div  id='home' className="relative bg-[#191919] overflow-hidden font-roboto px-4 lg:px-0 mb-12 h-screen">
            <div className='max-w-7xl mx-auto w-full flex justify-between items-center text-slate-200 my-4 h-12 lg:border-none relative'>
                <h2 className='font-bold border rounded-full border-white px-4 py-2 text-xl'>S</h2>
                <ul className={`flex flex-col lg:flex-row justify-end items-center lg:gap-9 absolute lg:relative top-14 lg:top-auto w-full bg-[#191919] pb-2 lg:pb-0 transition-transform  origin-top ${menu ? 'duration-300' : 'scale-y-0 lg:scale-100 duration-75'}`}>
                    {/* <a href='#home' className='border-t lg:border-none inline-block lg:inline w-full lg:w-auto text-center lg:text-start py-2 lg:py-0 hover:text-gray-400'>Home</a> */}
                    <a href='#skills' className='border-t lg:border-none inline-block lg:inline w-full lg:w-auto text-center lg:text-start py-2 lg:py-0 hover:text-gray-400'>Skills</a>
                    <a href='#projects' className='border-t lg:border-none inline-block lg:inline w-full lg:w-auto text-center lg:text-start py-2 lg:py-0 hover:text-gray-400'>Projects</a>
                    <a href='#contact' className='border-t lg:border-none inline-block lg:inline w-full lg:w-auto text-center lg:text-start py-2 lg:py-0 border-b hover:text-gray-400'>Contact</a>
                </ul>
                <h2 onClick={() => setMenu(!menu)} className='text-2xl lg:hidden block'><CiMenuKebab /></h2>
            </div>
            <Banner></Banner>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-16 bg-white rounded-t-[80%]"></div>
        </div>
    );
};

export default Navbar;
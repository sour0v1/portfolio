import React from 'react';
import Banner from '../banner/Banner';

const Navbar = () => {
    return (
        <div className="relative bg-black overflow-hidden">
            <div className='max-w-7xl mx-auto w-full flex justify-between items-center text-slate-200 my-4'>
                <h2 className='font-bold border rounded-full border-white px-4 py-2 text-xl'>S</h2>
                <ul className='flex justify-end items-center gap-9'>
                    <li>Home</li>
                    <li>Skill</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <Banner></Banner>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-16 bg-white border-b rounded-t-[80%]"></div>
        </div>
    );
};

export default Navbar;
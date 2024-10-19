import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const newYear = new Date().getFullYear();
    return (
        <div className="relative bg-[#191919] overflow-hidden font-roboto px-4 lg:px-0 text-slate-200">
            <div className='mt-16 text-center py-9 space-y-2'>
                <h1 className='text-2xl font-bold'>Sourov Das</h1>
                <p className='w-2/4 mx-auto'>Frontend Developer passionate about building user-friendly websites. Currently studying Political Science at Nation University, blending creativity with technical skills.</p>
                <div className='text-center flex justify-center items-center gap-3 pt-1'>
                    <a className='text-2xl inline-block' href="https://www.linkedin.com/in/das-sourov/"><FaLinkedin /></a>
                    <a className='text-2xl inline-block' href="https://github.com/sour0v1"><FaGithub /></a>
                </div>
                <p className='pt-4 text-sm'>© {newYear} Sourov Das. All Rights Reserved.</p>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-16 bg-white rounded-b-[80%]"></div>
        </div>
    );
};

export default Footer;
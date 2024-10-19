import React from 'react';
import { BiLogoMongodb } from 'react-icons/bi';
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiFirebaseFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiAxios, SiExpress, SiReactquery } from 'react-icons/si';

const Skill = () => {
    return (
        <div id='skills' className='max-w-5xl mx-auto font-roboto  text-center text-[#191919] px-4 lg:px-0'>
            <div className='space-y-2'>
                <h2 className='text-4xl font-medium'>My Skills</h2>
                <p>An overview of the tools and technologies I use.</p>
            </div>

            <div className='mt-12 space-y-4'>
                <div className='space-y-2'>
                    <h3 className='text-start text-xl font-medium'>Language</h3>
                    <div className='flex justify-start lg:justify-normal items-center gap-2 flex-wrap'>
                        <div className='flex items-center gap-3 bg-[#191919] text-slate-200 w-fit px-6 py-3'>
                            <p className='text-xl'><FaHtml5 /></p>
                            <p className='uppercase'>Html</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 bg-[#191919] text-slate-200 w-fit px-6 py-3'>
                            <p className='text-xl'><FaCss3 /></p>
                            <p className='uppercase'>Css</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 bg-[#191919] text-slate-200 w-fit px-6 py-3'>
                            <p className='text-xl bg-slate-200 text-[#191919]'><IoLogoJavascript /></p>
                            <p className=''>Javascript</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <h3 className='text-start text-xl font-medium'>Technology</h3>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <div className='flex justify-center items-center gap-3 bg-[#191919] text-slate-200 w-fit px-6 py-3'>
                            <p className='text-xl'><RiTailwindCssFill /></p>
                            <p className=''>Tailwind CSS</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 bg-[#191919] text-slate-200 w-fit px-6 py-3'>
                            <p className='text-xl'><FaReact /></p>
                            <p className=''>React</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 bg-[#191919] text-slate-200 w-fit px-6 py-3'>
                            <p className='text-xl bg-slate-200 text-[#191919]'><FaNodeJs /></p>
                            <p className=''>Node.js</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 bg-[#191919] text-slate-200 w-fit px-6 py-3'>
                            <p className='text-xl bg-slate-200 text-[#191919]'><SiExpress /></p>
                            <p className=''>Express.js</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 bg-[#191919] text-slate-200 w-fit px-6 py-3'>
                            <p className='text-xl bg-slate-200 text-[#191919]'><BiLogoMongodb /></p>
                            <p className=''>MongoDB</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 bg-[#191919] text-slate-200 w-fit px-6 py-3'>
                            <p className='text-xl bg-slate-200 text-[#191919]'><RiFirebaseFill /></p>
                            <p className=''>Firebase</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 bg-[#191919] text-slate-200 w-fit px-6 py-3'>
                            {/* <p className='text-xl bg-slate-200 text-[#191919]'><RiFirebaseFill /></p> */}
                            <p className=''>JWT</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <h3 className='text-start text-xl font-medium'>Tools</h3>
                    <div className='flex items-center flex-wrap gap-2'>
                        <div className='flex justify-center items-center gap-3 bg-[#191919] text-slate-200 w-fit px-6 py-3'>
                            <p className='text-xl'><SiAxios /></p>
                            <p className='uppercase'>Axios</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 bg-[#191919] text-slate-200 w-fit px-6 py-3'>
                            <p className='text-xl'><SiReactquery /></p>
                            <p className='uppercase'>React Query</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
import React from 'react';
import sg from '../assets/sg.png'
import mfs from '../assets/mfs.png'
import uni from '../assets/uni.png'
import { TbWorld } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <div id='projects' className='max-w-5xl mx-auto font-roboto  text-center text-[#191919] px-4 lg:px-0 my-16'>
            <div className='space-y-2'>
                <h2 className='text-4xl font-medium'>Projects</h2>
                <p>A showcase of the work I’ve built and designed</p>
            </div>
            <div className='mt-12 flex flex-col lg:flex-row justify-center items-center gap-6 '>
                <div className='bg-white p-6 rounded-2xl border w-full lg:w-1/3 h-[550px] hover:border-[#191919]'>
                    <div className='w-full space-y-3 flex flex-col justify-between h-full'>
                        <div className='border overflow-hidden rounded-lg'>
                            <img className='h-48 w-full hover:scale-110 transition-transform duration-300 ease-in-out' src={sg} alt="" />
                        </div>
                        <div className='text-start'>
                            <h3 className='text-xl font-medium mb-1'>Swapanshray Granthagar</h3>
                            An easy-to-use web application where users can browse books by category, search by title or author, and request to borrow books. The platform also allows users to register as members through a dedicated form. Admin can add books, add members, manage memberships, and process borrowing requests efficiently.
                        </div>
                        <div className='flex-grow'></div>
                        <div className='flex justify-start items-center gap-4'>

                            <div className='flex justify-center items-center gap-1'>
                                <a href='https://github.com/sour0v1/sg-client' className='inline-block text-2xl'><FaGithub /></a>
                                <a href='https://github.com/sour0v1/sg-client' className='inline-block'>client</a>
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <a href='https://github.com/sour0v1/sg-server/' className='inline-block text-2xl'><FaGithub /></a>
                                <a href='https://github.com/sour0v1/sg-server/' className='inline-block'>server</a>
                            </div>
                            <a href='https://swapnashray-granthagar.web.app/' className='inline-block text-2xl'><TbWorld /></a>
                        </div>
                    </div>
                </div>

                <div className='bg-whit p-6 rounded-2xl border w-full lg:w-1/3 h-[550px] hover:border-[#191919]'>
                    <div className='w-full space-y-3 flex flex-col justify-between h-full'>
                        <div className='border overflow-hidden rounded-lg'>
                            <img className='h-48 w-full hover:scale-110 transition-transform duration-300 ease-in-out' src={mfs} alt="" />
                        </div>
                        <div className='text-start'>
                            <h3 className='text-xl font-medium mb-1'>Paymate</h3>
                            <p>A user-friendly web application interface where users can register, send money, request cash in/out, and view transaction history. Agents can manage and accept cash in/out requests and access transaction records.</p>
                        </div>
                        <div className='flex-grow'></div>
                        <div className='flex justify-start items-center gap-4'>

                            <div className='flex justify-center items-center gap-1'>
                                <a href='https://github.com/sour0v1/mfs-paymate-client' className='inline-block text-2xl'><FaGithub /></a>
                                <a href='https://github.com/sour0v1/mfs-paymate-client' className='inline-block'>client</a>
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <a href='https://github.com/sour0v1/mfs-paymate-server' className='inline-block text-2xl'><FaGithub /></a>
                                <a href='https://github.com/sour0v1/mfs-paymate-server' className='inline-block'>server</a>
                            </div>
                            <a href='https://mfs-paymate.web.app/' className='inline-block text-2xl'><TbWorld /></a>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-6 rounded-2xl border w-full lg:w-1/3 h-[550px] hover:border-[#191919]'>
                    <div className='w-full space-y-3 flex flex-col justify-between h-full'>
                        <div className='border overflow-hidden rounded-lg'>
                            <img className='h-48 w-full hover:scale-110 transition-transform duration-300 ease-in-out' src={uni} alt="" />
                        </div>
                        <div className='text-start'>
                            <h3 className='text-xl font-medium mb-1'>UniReside</h3>
                            <p>Unireside is a university hostel management platform that simplifies operations. Students can explore meal options, request food, and manage subscriptions. The platform ensures smooth and efficient service for both students and administrators.</p>
                        </div>
                        <div className='flex-grow'></div>
                        <div className='flex justify-start items-center gap-4'>

                            <div className='flex justify-center items-center gap-1'>
                                <a href='https://github.com/sour0v1/uni-reside-client' className='inline-block text-2xl'><FaGithub /></a>
                                <a href='https://github.com/sour0v1/uni-reside-client' className='inline-block'>client</a>
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <a href='https://github.com/sour0v1/uni-reside-server' className='inline-block text-2xl'><FaGithub /></a>
                                <a href='https://github.com/sour0v1/uni-reside-server' className='inline-block'>server</a>
                            </div>
                            <a href='https://uni-reside.web.app/' className='inline-block text-2xl'><TbWorld /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
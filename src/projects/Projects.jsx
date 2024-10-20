import React from 'react';
import sg from '../assets/sgg.png'
import mfs from '../assets/mfs.png'
import uni from '../assets/uni.png'
import { TbWorld } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';

// Have to implement in the project
// 1.add core feature - 3
// 2.used technology

const Projects = () => {
    return (
        <div id='projects' className='max-w-5xl mx-auto font-roboto  text-center text-[#191919] px-4 lg:px-0 my-16'>
            <div className='space-y-2'>
                <h2 className='text-4xl font-medium'>Projects</h2>
                <p>A showcase of the work I’ve built and designed</p>
            </div>
            <div className='mt-12 flex flex-col lg:flex-row justify-center items-center gap-6 '>
                <div className='bg-white p-6 rounded-2xl border w-full lg:w-1/3 h-[650px] hover:border-[#191919]'>
                    <div className='w-full space-y-3 flex flex-col justify-between h-full'>
                        <div className='border overflow-hidden rounded-lg'>
                            <a href="https://swapnashray-granthagar.web.app/">
                                <img className='h-48 w-full hover:scale-110 transition-transform duration-300 ease-in-out' src={sg} alt="" />
                            </a>
                        </div>
                        <div className='text-start'>
                            <h3 className='text-xl font-medium mb-1'>Swapanshray Granthagar</h3>
                            A user-friendly web app for browsing, searching, and borrowing books. Members register via a form, and admins manage books, members, and requests.
                        </div>
                        <div>
                            <h4 className='font-medium text-left'>Features</h4>
                            <ul className=' text-left list-disc pl-7'>
                                <li className=''>Book Borrowing</li>
                                <li className=''>Search books by title or author</li>
                                <li className=''>Member Registration</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='font-medium text-left'>Used Technology</h4>
                            <div className='flex flex-wrap'>
                                <span className='pr-3'>React</span>
                                <span className='pr-3'>Axios</span>
                                <span className='pr-3'>React Query</span>
                                <span className='pr-3'>Firebase</span>
                                <span className='pr-3'>Express.js</span>
                                <span className='pr-3'>MongoDB</span>
                            </div>
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

                <div className='bg-whit p-6 rounded-2xl border w-full lg:w-1/3 h-[650px] hover:border-[#191919]'>
                    <div className='w-full space-y-3 flex flex-col justify-between h-full'>
                        <div className='border overflow-hidden rounded-lg'>
                            <a href="https://mfs-paymate.web.app/">
                                <img className='h-48 w-full hover:scale-110 transition-transform duration-300 ease-in-out' src={mfs} alt="" />
                            </a>
                        </div>
                        <div className='text-start'>
                            <h3 className='text-xl font-medium mb-1'>Paymate</h3>
                            <p>A user-friendly app where users register, send money, request cash in/out, and view transactions. Agents manage cash requests and access records.</p>
                        </div>
                        <div>
                            <h4 className='font-medium text-left'>Features</h4>
                            <ul className=' text-left list-disc pl-7'>
                                <li className=''>Money Transfer</li>
                                <li className=''>Request cash in/out</li>
                                <li className=''>View transaction history</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='font-medium text-left'>Used Technology</h4>
                            <div className='flex flex-wrap'>
                                <span className='pr-3'>React</span>
                                <span className='pr-3'>Axios</span>
                                <span className='pr-3'>React Query</span>
                                <span className='pr-3'>Firebase</span>
                                <span className='pr-3'>Express.js</span>
                                <span className='pr-3'>JWT</span>
                                <span className='pr-3'>MongoDB</span>
                            </div>
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

                <div className='bg-white p-6 rounded-2xl border w-full lg:w-1/3 h-[650px] hover:border-[#191919]'>
                    <div className='w-full space-y-3 flex flex-col justify-between h-full'>
                        <div className='border overflow-hidden rounded-lg'>
                            <a href="https://uni-reside.web.app/">
                                <img className='h-48 w-full hover:scale-110 transition-transform duration-300 ease-in-out' src={uni} alt="" />
                            </a>
                        </div>
                        <div className='text-start'>
                            <h3 className='text-xl font-medium mb-1'>UniReside</h3>
                            <p>Unireside is a hostel management platform where students explore meals, request food, and manage subscriptions, ensuring smooth service for all.</p>
                        </div>
                        <div>
                            <h4 className='font-medium text-left'>Features</h4>
                            <ul className=' text-left list-disc pl-7'>
                                <li className=''>Meal Options</li>
                                <li className=''>Food Requests</li>
                                <li className=''>Subscription Management</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='font-medium text-left'>Used Technology</h4>
                            <div className='flex flex-wrap'>
                                <span className='pr-3'>React</span>
                                <span className='pr-3'>Axios</span>
                                <span className='pr-3'>React Query</span>
                                <span className='pr-3'>Firebase</span>
                                <span className='pr-3'>Express.js</span>
                                <span className='pr-3'>MongoDB</span>
                            </div>
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
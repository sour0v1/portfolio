import React from 'react';

const Banner = () => {
    return (
        <div className='text-slate-200 max-w-5xl mx-auto space-y-4 mb-32 flex flex-col lg:block justify-center lg:justify-start items-center px-4 lg:px-0 mt-10'>
            <p>Hi, I am</p>
            <div className='space-y-2'>
                <h2 className='text-4xl font-bold'>Sourov Das</h2>
                <h4 className='font-semibold'>Frontend Web Developer</h4>
            </div>
            <p className='lg:w-2/3 pb-3 text-center lg:text-start'>I am a frontend developer skilled in React, with basic knowledge of Express and MongoDB. My goal is to enhance my expertise in building efficient web applications and contribute to impactful projects.</p>
            <a href='https://drive.google.com/file/d/1iQ30E9pTl6IqLwhobL_rZCNBpihtFC0t/view?usp=sharing' className='uppercase border px-6 py-3 inline-block'>Resume</a>
        </div>
    );
};

export default Banner;
import React from 'react';

const Banner = () => {
    return (
        <div className='text-slate-200 max-w-5xl mx-auto space-y-4 mb-24'>
            <p>Hi, I am</p>
            <div className='space-y-2'>
                <h2 className='text-4xl font-bold'>Sourov Das</h2>
                <h4 className='font-semibold'>Frontend Web Developer</h4>
            </div>
            <p className='w-2/3 pb-3'>I am a frontend developer skilled in React, with basic knowledge of Express and MongoDB. My goal is to enhance my expertise in building efficient web applications and contribute to impactful projects.</p>
            <button className='uppercase border px-6 py-3 inline-block'>Resume</button>
        </div>
    );
};

export default Banner;
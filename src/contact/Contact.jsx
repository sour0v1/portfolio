import React from 'react';

const Contact = () => {
    return (
        <div className='max-w-5xl mx-auto font-roboto  text-center text-[#191919] px-4 lg:px-0 my-16'>
            <div className='space-y-2'>
                <h2 className='text-4xl font-medium'>Get in Touch</h2>
                <p>Feel free to reach out for collaborations, questions, or opportunities</p>
            </div>

            <form className='bg-gray-200 rounded-lg p-4 lg:p-9 border mt-12 space-y-6'>
                {/* <div className='flex flex-col justify-start gap-2  w-2/3 mx-auto'>
                    <span className='border text-left'>Your name</span>
                   
                </div> */}
                <input className='py-2 px-4 w-full lg:w-2/3 outline-none' type="text" placeholder='Your name' />
                <input className='py-2 px-4 w-full lg:w-2/3 outline-none' type="email" placeholder='Your email' />
                <textarea className='inline-block h-36 w-full lg:w-2/3 py-2 px-3 outline-none' placeholder='Your message...'></textarea>
                <input className='bg-[#191919] text-slate-200 w-full lg:w-2/3 rounded-md py-2 hover:bg-opacity-80' type="submit" value={'Send'} />
            </form>
        </div>
    );
};

export default Contact;
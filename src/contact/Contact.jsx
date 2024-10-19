import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='max-w-5xl mx-auto font-roboto  text-center text-[#191919] px-4 lg:px-0 my-16'>
            <div className='space-y-2'>
                <h2 className='text-4xl font-medium'>Get in Touch</h2>
                <p>Feel free to reach out for collaborations, questions, or opportunities</p>
            </div>

            <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;
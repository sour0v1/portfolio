import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    // const [successMessage, setSuccessMessage] = useState(null);

    console.log(import.meta.env.VITE_SECRET_KEY)
    const handleForm = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        // const name = form.user_name.value;
        // const email = form.user_email.value;
        // const message = form.user_message.value;

        // const formData = {
        //     name, email, message
        // }
        // console.log(formData);


        emailjs.sendForm(
            import.meta.env.VITE_SECRET_KEY, import.meta.env.VITE_TEMPLATE_ID, form, import.meta.env.VITE_PUBLIC_KEY
        )
            .then(() => {
                setLoading(false);
                // Swal.fire('Success!');
                Swal.fire({
                    title: 'Success!',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#191919',
                  });
                form.reset();
            },
            )
            .catch((error) => {
                console.log('Failed... - ', error.text);
                setLoading(false);
                Swal.fire({
                    title: 'Failed...!',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#191919',
                  });

            })


    }

    return (
        <div>
            <form onSubmit={handleForm} className='bg-gray-200 rounded-lg p-4 lg:p-9 border mt-12 space-y-6'>
                {/* <div className='flex flex-col justify-start gap-2  w-2/3 mx-auto'>
                    <span className='border text-left'>Your name</span>
                   
                </div> */}
                <input className='py-2 px-4 w-full lg:w-2/3 outline-none' name='user_name' type="text" placeholder='Your name' required />
                <input className='py-2 px-4 w-full lg:w-2/3 outline-none' name='user_email' type="email" placeholder='Your email' required />
                <textarea className='inline-block h-36 w-full lg:w-2/3 py-2 px-3 outline-none' placeholder='Your message...' name='user_message' required></textarea>
                {
                    loading ?
                        <p className='bg-[#191919] text-slate-200 w-full lg:w-2/3 rounded-md py-2 hover:bg-opacity-80 mx-auto'> Sending... </p> :
                        <input className='bg-[#191919] text-slate-200 w-full lg:w-2/3 rounded-md py-2 hover:bg-opacity-80' type="submit" value={'Send'} />
                }
            </form>
        </div>
    );
};

export default ContactForm;
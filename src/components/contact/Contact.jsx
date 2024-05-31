import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_aekctjg', 'template_rlktq3p', form.current, {
                publicKey: '_eyO-XDDN11aCxnop',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    // Clear input fields after successful submission
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <section className='contact section' id='contact'>
            <h2 className="section_title">Contact Me</h2>
            <span className='section_subtitle'>Get in touch</span>

            <div className="contact_container container grid">
                <div>
                    <form ref={form} onSubmit={sendEmail} className="contact_form">
                        <div className="contact_form-div">
                            <label className="contact_form-tag">Name</label>
                            <input type="text" name='name' className='contact_form-input' placeholder='Enter your name' required />
                        </div>

                        <div className="contact_form-div">
                            <label className="contact_form-tag">Email</label>
                            <input type="email" name='email' className='contact_form-input' placeholder='Enter your email address' required />
                        </div>

                        <div className="contact_form-div">
                            <label className="contact_form-tag">Message</label>
                            <textarea name='message' cols={30} rows={5} className='contact_form-input' placeholder='Write your message here' required></textarea>
                        </div>

                        <button type="submit" className="button button-flex">
                            Send Message <i className="uil uil-message say-hello-icon"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;

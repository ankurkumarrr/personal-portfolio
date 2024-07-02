import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container">
                <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"></i>
                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">ankurkumarrr1@gmail.com</span>
                    <a href="mailto:ankurkumarrr1@gmail.com" className="contact__button">
                        Email me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                </div>

                <div className="contact__card">
                    <i className="bx bxl-whatsapp contact__card-icon"></i>
                    <h3 className="contact__card-title">Whatsapp</h3>
                    <span className="contact__card-data">+91 7428623691</span>
                    <a
                        href="https://api.whatsapp.com/send?phone=7428623691&text=Hello,%20this%20is%20Ankur%20Kumar"
                        className="contact__button"
                    >
                        Whatsapp me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;

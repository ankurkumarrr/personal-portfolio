import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Ankur Kumar</h1>

            <ul className="footer__list">

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#quali" className="footer__link">Qualifications</a>
                </li>

            </ul>

            <div className="footer__social">

            <a href="https://www.github.com/ankurkumarrr" className="footer__social-link" target={'_blank'} rel="noopener noreferrer">
                <i className="bx bxl-github"></i>
            </a>

            <a href="https://linkedin.com/in/ankurkumarrr/" className="footer__social-link" target={'_blank'} rel="noopener noreferrer">
                <i className="bx bxl-linkedin"></i>
            </a>

            </div>

            <span className="footer__copy">
                &#169; Ankur Kumar. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer

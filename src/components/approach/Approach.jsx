import React, { useState } from 'react';
import './approach.css';

const Approach = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="approach section" id="approach">
            <h2 className="section__title">My Approach</h2>
            <span className="section__subtitle">spanish approach...</span>

            <div className="approach__container container grid">

                <div className="approach__content">
                    <div>
                        <i className="uil uil-web-grid approach__icon">
                            <h3 className="approach__title">Planning Strategy</h3>
                        </i>
                    </div>

                    <span className="approach__button" onClick={() => toggleTab(1)}>View More<i className="uil uil-arrow-right approach__button-icon"></i></span>

                    <div className={toggleState === 1 ? "approach__modal active-modal" : "approach__modal"}>
                        <div className="approach__modal-content">
                            <i className="uil uil-times approach__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="approach__modal-title">Plan Title</h3>
                            <p className="approach__modal-description">This is description 
                                a lot 
                            </p>

                            <ul className="approach__modal-approaches grid">
                                <li className="approach__modal-approach">
                                    <i className="uil uil-check-circle approach__modal-icon"></i>
                                    <p className="approach__modal-info">I develop</p>
                                </li>

                                <li className="approach__modal-approach">
                                    <i className="uil uil-check-circle approach__modal-icon"></i>
                                    <p className="approach__modal-info">I develop 2</p>
                                </li>

                                <li className="approach__modal-approach">
                                    <i className="uil uil-check-circle approach__modal-icon"></i>
                                    <p className="approach__modal-info">I develop 3</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="approach__content">
                    <div>
                        <i className="uil uil-arrow approach__icon">
                            <h3 className="approach__title">UI UX</h3>
                        </i>
                    </div>

                    <span className="approach__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right approach__button-icon"></i></span>

                    <div className={toggleState === 2 ? "approach__modal active-modal" : "approach__modal"}>
                        <div className="approach__modal-content">
                            <i className="uil uil-times approach__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="approach__modal-title">UI Title</h3>
                            <p className="approach__modal-description">This is description 
                                a lot 
                            </p>

                            <ul className="approach__modal-approaches grid">
                                <li className="approach__modal-approach">
                                    <i className="uil uil-check-circle approach__modal-icon"></i>
                                    <p className="approach__modal-info">I develop</p>
                                </li>

                                <li className="approach__modal-approach">
                                    <i className="uil uil-check-circle approach__modal-icon"></i>
                                    <p className="approach__modal-info">I develop 2</p>
                                </li>

                                <li className="approach__modal-approach">
                                    <i className="uil uil-check-circle approach__modal-icon"></i>
                                    <p className="approach__modal-info">I develop 3</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="approach__content">
                    <div>
                        <i className="uil uil-edit approach__icon">
                            <h3 className="approach__title">Visual Designer</h3>
                        </i>
                    </div>

                    <span className="approach__button" onClick={() => toggleTab(3)}>View More<i className="uil uil-arrow-right approach__button-icon"></i></span>

                    <div className={toggleState === 3 ? "approach__modal active-modal" : "approach__modal"}>
                        <div className="approach__modal-content">
                            <i className="uil uil-times approach__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="approach__modal-title">VD Title</h3>
                            <p className="approach__modal-description">This is description 
                                a lot 
                            </p>

                            <ul className="approach__modal-approaches grid">
                                <li className="approach__modal-approach">
                                    <i className="uil uil-check-circle approach__modal-icon"></i>
                                    <p className="approach__modal-info">I develop</p>
                                </li>

                                <li className="approach__modal-approach">
                                    <i className="uil uil-check-circle approach__modal-icon"></i>
                                    <p className="approach__modal-info">I develop 2</p>
                                </li>

                                <li className="approach__modal-approach">
                                    <i className="uil uil-check-circle approach__modal-icon"></i>
                                    <p className="approach__modal-info">I develop 3</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Approach;

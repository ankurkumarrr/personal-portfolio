import React from 'react';
import './skills.css';

const Tech = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Technical Skills</h3>

        <div className="skills__box">

            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Solidity</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Django</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">C/C++</h3>
                        <span className="skills__level">advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Tensorflow</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Verilog</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>

            

        </div>  
    </div>
  );
};

export default Tech

import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="quali">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Experience
          </div>

          <div className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
            >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__section">
          <div className = {toggleState === 1
          ? "qualification__content qualification__content-active"
          : "qualification__content"
          }>
            <div className="qualification__data">
              <div>
              <a target='_blank' rel="noreferrer" href="https://mellohealth.web.app"><h3 className="qualification__title">Mello <i href='' className="uil uil-arrow-up-right"></i></h3></a>
                <span className="qualification__subtitle">CoFounder</span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Apr '23 
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">IIT Patna</h3>
                <span className="qualification__subtitle">Research Intern</span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> May '23 - Nov. '23
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Innovya Technologies</h3>
                <span className="qualification__subtitle">Solutions Developer Intern</span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Oct. '22 - Jan. '23
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>

            
          </div>

          <div className={toggleState === 2
          ? "qualification__content qualification__content-active"
          : "qualification__content"
          }>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">IIT Patna</h3>
                <span className="qualification__subtitle">Electrical & Electronics</span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Tagore International School, New Delhi</h3>
                <span className="qualification__subtitle">Class XII (CBSE)</span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Tagore International School, New Delhi</h3>
                <span className="qualification__subtitle">Class X (CBSE)</span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

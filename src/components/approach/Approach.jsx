import React, { useState } from "react";
import "./approach.css";

const Approach = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="approach section">
      <h2 className="section__title">My Approach</h2>
      <span className="section__subtitle">El camino adecuado</span>

      <div className="approach__container container grid">
        <div className="approach__content">
          <div>
            <i className="uil uil-web-grid approach__icon">
              <h3 className="approach__title">
                Planning & <br /> Strategy
              </h3>
            </i>
          </div>

          <span className="approach__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right approach__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "approach__modal active-modal"
                : "approach__modal"
            }
          >
            <div className="approach__modal-content">
              <i
                className="uil uil-times approach__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="approach__modal-title">Planning & Strategy</h3>
              <p className="approach__modal-description">
                Establish a solid foundation by defining clear goals,
                understanding the scope, and formulating a strategic plan to
                guide the project.
              </p>

              <ul className="approach__modal-approaches grid">
                <li className="approach__modal-approach">
                  <i className="uil uil-check-circle approach__modal-icon"></i>
                  <p className="approach__modal-info">
                    Identify goals and objectives using SMART criteria
                  </p>
                </li>

                <li className="approach__modal-approach">
                  <i className="uil uil-check-circle approach__modal-icon"></i>
                  <p className="approach__modal-info">
                    Develop a strategic plan with timelines, resources, and
                    responsibilities
                  </p>
                </li>

                <li className="approach__modal-approach">
                  <i className="uil uil-check-circle approach__modal-icon"></i>
                  <p className="approach__modal-info">
                    Conduct risk assessment and develop mitigation strategies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="approach__content">
          <div>
            <i className="uil uil-arrow approach__icon">
              <h3 className="approach__title">Implementation & Execution</h3>
            </i>
          </div>

          <span className="approach__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right approach__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "approach__modal active-modal"
                : "approach__modal"
            }
          >
            <div className="approach__modal-content">
              <i
                className="uil uil-times approach__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="approach__modal-title">
                {" "}
                Implementation & Execution
              </h3>
              <p className="approach__modal-description">
                Efficiently execute the strategic plan, ensuring all tasks are
                completed as planned with quality and collaboration.
              </p>

              <ul className="approach__modal-approaches grid">
                <li className="approach__modal-approach">
                  <i className="uil uil-check-circle approach__modal-icon"></i>
                  <p className="approach__modal-info">
                    Allocate necessary resources appropriately
                  </p>
                </li>

                <li className="approach__modal-approach">
                  <i className="uil uil-check-circle approach__modal-icon"></i>
                  <p className="approach__modal-info">
                    Ensure clear communication and collaboration among team
                    members
                  </p>
                </li>

                <li className="approach__modal-approach">
                  <i className="uil uil-check-circle approach__modal-icon"></i>
                  <p className="approach__modal-info">
                    Monitor progress using project management tools and adjust
                    plans as needed
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="approach__content">
          <div>
            <i className="uil uil-edit approach__icon">
              <h3 className="approach__title">Review & Improvement</h3>
            </i>
          </div>

          <span className="approach__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right approach__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "approach__modal active-modal"
                : "approach__modal"
            }
          >
            <div className="approach__modal-content">
              <i
                className="uil uil-times approach__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="approach__modal-title">Review & Improvement</h3>
              <p className="approach__modal-description">
                Evaluate outcomes, gather feedback, and identify areas for
                improvement to refine processes for future projects.
              </p>

              <ul className="approach__modal-approaches grid">
                <li className="approach__modal-approach">
                  <i className="uil uil-check-circle approach__modal-icon"></i>
                  <p className="approach__modal-info">
                    Measure outcomes against goals using predefined metrics and
                    KPIs
                  </p>
                </li>

                <li className="approach__modal-approach">
                  <i className="uil uil-check-circle approach__modal-icon"></i>
                  <p className="approach__modal-info">
                    Gather insights from stakeholders and team members
                  </p>
                </li>

                <li className="approach__modal-approach">
                  <i className="uil uil-check-circle approach__modal-icon"></i>
                  <p className="approach__modal-info">
                    Implement a cycle of continuous improvement based on
                    findings and share best practices
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;

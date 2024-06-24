import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bxs-graduation about__icon' ></i>
            <h3 className="about__title">Student</h3>
            <span className="about__subtitle">IIT Patna (2021-25)</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase about__icon' ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">X + Projects</span>
        </div>

        <div className="about__box">
        <i class='bx bx-award about__icon' ></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">X+ years</span>
        </div>
    </div>
  )
}

export default Info

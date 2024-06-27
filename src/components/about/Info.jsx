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
        <i class='bx bx-selection about__icon' ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">20+ Projects</span>
        </div>

        <div className="about__box">
        <i class='bx bxs-briefcase-alt about__icon' ></i>
            <h3 className="about__title">Done</h3>
            <span className="about__subtitle">10+ Case Studies</span>
        </div>
    </div>
  )
}

export default Info

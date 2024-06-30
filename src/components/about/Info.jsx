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
        <i class='bx bx-medal about__icon' ></i>
            <h3 className="about__title">Bronze</h3>
            <span className="about__subtitle">InterIIT Tech 11.0</span>
        </div>

        <div className="about__box">
        <i class='bx bx-candles about__icon' ></i>
            <h3 className="about__title">QRC</h3>
            <span className="about__subtitle">WorldQuant</span>
        </div>
    </div>
  )
}

export default Info

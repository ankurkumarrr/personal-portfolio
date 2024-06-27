import React from 'react'
import './skills.css';
import Tech from './Tech';
import Nontech from './Nontect';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">A Brief</h2>
        <span className="section__subtitle">Mi Capacidades</span>

        <div className="skills__container container grid">
          <Tech />
          <Nontech />
        </div>
    </section>
  )
}

export default Skills

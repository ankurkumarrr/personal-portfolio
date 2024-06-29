import React, { useEffect, useState } from 'react';
import "./home.css";
import Social from "./Social";
import Data from './Data';
import ScrollDown from './ScrollDown';
import AboutImg from '../../assets/about.png'; 

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = AboutImg;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />

                <div className={`home__img ${imageLoaded ? 'loaded' : ''}`}>
                </div>

                <Data />
            </div>

            <ScrollDown />
        </div>
    </section>
  )
}

export default Home;

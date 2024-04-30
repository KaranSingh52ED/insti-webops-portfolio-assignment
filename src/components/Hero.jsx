import React from "react";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-main">
          <div className="hero-overall">
            <div className="hero-text">
              <h1>
                Full-stack / Web <br /> Developer{" "}
                <span>
                  <img src="assets/wave hand.png" />
                </span>
              </h1>
              <p>
                Hi, I'm  Karan Singh. A passionate Full-stack Web Developer and a programmer
              </p>
              <div className="profile-links">
                <a href="https://github.com/KaranSingh52ED">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/karan-singh-875797260">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <img src="assets/profile.png" alt="profile" />
          </div>

          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default Hero;

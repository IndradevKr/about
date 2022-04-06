import React from "react";
import "./style.css";
import images from "./images/Images";

function Hero(){
    return(
        <React.Fragment>
        <section className="container section-hero section">
            <div className="grid grid-column-two">
              <div className="hero-main-content">
                  <span className="hero-basic-text">Hello, I am</span> 
                  <h2 className="my__name">Indradev Mahato,</h2>
                  <h4 className="job-role">Web Developer</h4>
                   <p className="hero-para">I create beautiful, usable, professional websites using the best practice accessibility
                    and the latest web standards guidelines, resulting in semantic and SEO friendly.
                    </p>
                    <div className="hero__button">
                        <a href="#contact" className="btn hero-btn">Hire Me</a>
                    </div>
                </div>  

                <div className="hero-image">
                    <img src={images.heroImage} alt="Indradev Kumar Mahato" />
                </div>

            </div>
        </section>
        </React.Fragment>
    )
}
export default Hero;
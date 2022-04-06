import React from "react";
import images from "./images/Images";

function About(){
    return(
        <section id="about" className="container section-about section">
           <div className="grid grid-column-two grid-column-mobile">

            <div className="about-image">
                <img src={images.aboutImage} alt="Indradev Mahato" />
            </div>

            <div className="about-content">
                <h3 className="section-heading">About Me</h3>
                <p className="about-text">Hi, I am Indradev Kumar Mahato, <strong>a full-stack web developer focused on crafting great web experiences.</strong> Designing and coding have been my passion since the day I started working with computers. I enjoy creating beautifully designed, intuitive and functional websites.</p>
                <p className="about-text">I am a computer science graduate with a keen interest in full-stack web development.</p>
                <p className="about-text"> <em>I am very enthusiastic about <strong>looking for an opportunity</strong> to use my technical skills to contribute to organizational growth and enhance my skills.</em></p>
                
                <div className="reach-out">
                    <p className="reach-out-text">
                    <strong>Interested in working together, </strong><br/>
                    <a href="#contact" className="btn reach-out-btn">Reach out</a>
                    <a href={images.resume} className="btn download-cv-btn" download>Download Resume</a>
                    </p>   
                </div>

            </div>

           </div>
        </section>
    )
}
export default About;
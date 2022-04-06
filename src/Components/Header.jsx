import React from 'react';
import images from './images/Images';
import './style.css';

function Header(){
    const [isMobile, setIsMobile] = React.useState(false)

    return (
        <header className="header">
            <h1 className="brand__name">Indradev Mahato</h1>

            <nav className="navbar">
                <ul className= {isMobile ? "navbar__lists navbar__lists__mobile" :"navbar__lists"}>
                    <li> <a href="#about" className="navbar-link about-link">About</a> </li>  
                    <li> <a href="#skills" className="navbar-link service-link">Skills</a> </li>
                    <li> <a href="http://imtechseeker.herokuapp.com/" className="navbar-link blog-link" target="_blank" rel="noopener noreferrer">Blog</a> </li>  
                    <li> <a href={images.resume} className="navbar-link resume-link" download={true}>Resume</a> </li>
                    <li> <a href="#contact" className="navbar-link contact-link">Contact</a> </li>       
                </ul>
                <div className="social-link">
                <li> <a href="https://wa.me/+9779800803934/?text=Hello" target="_blank" rel="noopener noreferrer" className="whatsapp-icon"><i className="fa-brands fa-whatsapp"></i></a> </li>
                <li> <a href="https://www.linkedin.com/in/indradevkr8/" target="_blank" rel="noopener noreferrer" className="linkedIn-icon"><i className="fa-brands fa-linkedin"></i></a> </li>
                <li> <a href="https://github.com/IndradevKr" target="_blank" rel="noopener noreferrer" className="github-icon"><i className="fa-brands fa-github"></i></a> </li>
                </div>

                <div className="mobile-menu-mode"> 
                    <button className='hamburger-icon' onClick={ ()=> setIsMobile(!isMobile) }>
                        {isMobile ? <i className="fa-solid fa-x" style={ {fontSize: '2rem',border: 'none', backgroundColor: 'rgb(249, 249, 255)',}}></i> : <i className="fa-solid fa-bars"></i>}
                    </button>
                </div>
            </nav>
           
        </header>
    )
}
export default Header;
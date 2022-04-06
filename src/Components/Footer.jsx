import React from 'react';
import './style.css';

function Footer(){
    const date = new Date();
    const fullYear = date.getFullYear()
    return(
        <>
            <section className="footer-section">
                <div className="footer-container">
                    <footer>
                        <h5>
                        ©{fullYear} | Made with 💗 by Indradev Kumar Mahato
                        </h5>
                        </footer>
                </div>
            </section>
        </>
    )
}
export default Footer;
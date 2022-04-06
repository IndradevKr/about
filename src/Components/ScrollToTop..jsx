import React from "react";
import './style.css';

function ScrollToTop(){
    const [showIcon, setShowIcon] = React.useState(false);
    React.useEffect( () => {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY >= 400){
                setShowIcon(true);
            }else{
                setShowIcon(false);
            }
        });
    }, [] );

    function scrollTop(){
        return window.scrollTo({
            top: 0,
            behaviour: "smooth",
        });
    };

    return(
        <React.Fragment>
            {showIcon && (
            <div className="scroll-to-top">
                <i className="fa-solid fa-circle-up" id="scrollTop" onClick={scrollTop}></i>   
            </div> )}
        </React.Fragment>
    )
}
export default ScrollToTop;
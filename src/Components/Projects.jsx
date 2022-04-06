import React from "react";
import "./style.css";
import ProjectCard from "./ProjectCard";
import cardData from './CardItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Projects(props){
    // react-slick responsive carousel slider setting
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3600,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1480,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1100,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 740,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };
    return(
        <>
            <section className="section-projects section">
            <div className="section-heading">
                <h3>Latest Works</h3>
            </div>
            <div className="card-container">
            <Slider {...settings}>
            {
                cardData.map( item => {
                return (
                    <ProjectCard key={item.id} 
                    projectTitle={item.projectTitle} 
                    imageItem={item.image} 
                    primaryDesc={item.primaryDesc} 
                    secondaryDesc={item.secondaryDesc} 
                    projectLink={item.projectLink}
                    imgAlt= {item.imgAlt}
                    />
                )
                } )
            }
            </Slider>
            
        </div>
        </section>
        </>
    )
}
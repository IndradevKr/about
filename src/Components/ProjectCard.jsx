import React from "react";

export default function ProjectCard(props){
    return(
    <>          
        <div className="card">
            <div className="card__image">
                <img src={props.imageItem} alt={props.imgAlt} />
            </div>
            <div className="card__content">
                <h5>{props.projectTitle}</h5>
                <p>{props.primaryDesc}</p>
                <p>{props.secondaryDesc}</p>
            </div>
            <div className="card__button">
                <a href={props.projectLink} className="btn btn__card" target="_blank" rel="noopener noreferrer">Explore</a>
            </div>
        </div>
    </>
    )
}
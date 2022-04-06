import React from "react";
import "./style.css";

function Skills(){
    return(
        <React.Fragment>
            <section id="skills" className="container section-skills section">
                <div className="section-heading skill-heading">
                   <h3>My Skills</h3> 
                </div>

                <div className="grid grid-column-two">
                    
                <div className="skill-left">
                    
                    <div className="skill-category">
                        <span className="skill-set">Languages</span>
                         <div className="skill">
                            <h5>C</h5>
                            <div className="progress-bar progress-c">
                              <span>75%</span>  
                            </div>
                        </div>
                        <div className="skill">
                            <h5>JavaScript</h5>
                            <div className="progress-bar progress-javaScript">
                              <span>75%</span>  
                            </div>
                        </div>
                        <div className="skill">
                            <h5>Java</h5>
                            <div className="progress-bar progress-java">
                              <span>75%</span>  
                            </div>
                        </div>
                        <div className="skill">
                            <h5>Python</h5>
                            <div className="progress-bar progress-python">
                              <span>70%</span>  
                            </div>
                        </div>
                        <div className="skill">
                            <h5>HTML/CSS</h5>
                            <div className="progress-bar progress-html-css">
                              <span>85%</span>  
                            </div>
                        </div>
                        <div className="skill">
                            <h5>PHP</h5>
                            <div className="progress-bar progress-php">
                              <span>50%</span>  
                            </div>
                        </div>    
                    </div> 

                    <div className="skill-category">
                        <span className="skill-set">Database</span> 
                        <div className="skill">
                            <h5>SQL</h5>
                            <div className="progress-bar progress-sql">
                              <span>75%</span>  
                            </div>
                        </div>    
                    </div>

                </div>       
                <div className="skill-right">
                        
                    <div className="skill-category">
                        <span className="skill-set">Frameworks</span>
                        <div className="skill">
                            <h5>React</h5>
                            <div className="progress-bar progress-react">
                                <span>80%</span>  
                            </div>
                        </div>
                        <div className="skill">
                            <h5>Django</h5>
                            <div className="progress-bar progress-django">
                                <span>80%</span>  
                            </div>
                        </div>
                        <div className="skill">
                            <h5>Bootstrap</h5>
                            <div className="progress-bar progress-bootstrap">
                                <span>70%</span>  
                            </div>
                        </div>
                    </div>
                        
                    <div className="skill-category">
                        <span className="skill-set">CMS</span>
                        <div className="skill">
                            <h5>Wordpress</h5>
                            <div className="progress-bar progress-wordpress">
                                <span>80%</span>  
                            </div>
                        </div>
                    </div> 
                    
                    <div className="skill-category">
                        <span className="skill-set">Others</span>
                        <div className="skill">
                            <h5>Git</h5>
                            <div className="progress-bar progress-git">
                              <span>90%</span>  
                            </div>
                        </div>
                        <div className="skill">
                            <h5>Photoshop</h5>
                            <div className="progress-bar progress-photoshop">
                              <span>85%</span>  
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Skills;
import React from "react";
import { userEmail } from "../../Data/Data";


function HeroSection(){
    return(
        <section className="second-hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h2 className="second-hero-heading">
                            Andrew Garnett
                        </h2>
                        <h3 className="second-hero-subheading">
                            Effecting change through Technology
                        </h3>
                    </div>
                    <div className="col-lg-6 offset-lg-3">
                        <p className="second-hero-paragraph">
                            Software Engineer from Georgetown, Guyana. 25 but still curious. <br/> Currently exploring AI and open to collaborating on cool projects. <br/> Reach out below.
                        </p>
                        <div className="flex-all-center">
                            <a href={`mailTo:${userEmail}`} className="second-main-button">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
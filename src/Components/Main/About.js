import React from "react";
import Headings from "../../Common/Headings";


function About(){
    return(
        <section className="section-start">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Headings heading="About Me" />
                    </div>
                </div>
                <div className="row" style={{marginTop:"50px"}}>
                <div className="col-lg-6 flex-all-center-col">
                    <p className="second-about-text">
                        Recently completed my graduate studies at Edinburgh Business School and now focusing on projects that spark my interest. Building <a href="https://voxxil.gy">Voxxil</a> and <a href="https://frameperfectgy.com">FramePerfect</a>.
                    </p>
                    <p className="second-about-text">
                        I believe in spending time on things that matter - whether that's learning something new, creating something meaningful, or simply enjoying the journey along the way.
                    </p>
                </div>
                    <div className="col-lg-6">
                        <div className="center-img">
                            <img style={{width:"100%"}} src={process.env.PUBLIC_URL + '/img/second-hero-img-2.png'} alt="about-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;

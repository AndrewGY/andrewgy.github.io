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
                        At the heart of my current journey is a dual focus: advancing my academic studies and creating impact in my home country of Guyana. I am currently building, <a href="https://voxxil.gy">Voxxil</a> and FramePerfect. In parallel, I dedicate myself to fostering positive social change as the Vice-President and co-founder of <a href="https://unitygy.com">Unity Guyana</a>, a non-profit organization committed to empowering Guyanese youth in their professional endeavors.
                     </p>
                     <p className="second-about-text">
                        When it's time to recharge, I immerse myself in the worlds of PC gaming and explore my creativity through <a href="https://behance.net/andrewmgarnett">digital art</a>.
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

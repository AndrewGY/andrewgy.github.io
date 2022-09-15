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
                            My primary focus at this point in time is furthering my studies. Currently, I'm a post-grad student at Edinburgh Business School pursuing my MSc.
                            <br/><br/>I am also co-founder of two software startups: <a href={"https://frameperfectgy.com"}>FramePerfect</a> and <a href={"https://voxxil.gy"}>Voxxil</a> as well as Vice-President and co-founder of a Guyanese non-profit called <a href={"https://unitygy.com"}>Unity Guyana</a>.
                        </p>
                        <p className="second-about-text">
                            Lastly, in addition to the above, I work (now part-time) with the University of Guyana's Tactical Online Services unit as a Software Engineer.
                            <br/><br/>To unwind after it all, I typically indulge in PC gaming and digital art as my preferred personal hobbies.
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
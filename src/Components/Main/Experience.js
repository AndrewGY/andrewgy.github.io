import React from "react";
import Headings from "../../Common/Headings";
import {experience} from '../../Data/Data';

function Experience(){
    const experienceArray = experience.slice(0).reverse()
    return(
        <section className="section-start experience-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Headings heading="Experience" />
                    </div>
                    <div className="col-lg-10 offset-lg-1">
                        <div className="experience-main">
                            <div className="pulse-main">
                                <div className="circle pulse green"></div>
                            </div>
                            <div className="center-img">
                                <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="hero" />
                            </div>
                            <h6 className="my-company-name">
                                FramePerfect
                            </h6>
                            <p className="duration">
                                2018 - Present
                            </p>
                            <div className="flex-all-center-col">
                                <p className="my-company-description">
                                    Promoting data-driven decision making and the adoption of Artifical Intelligence into numerous industries within the Caribbean.
                                </p>
                                <a className="second-main-button" href="https://frameperfectgy.com" target="_blank">
                                    Learn more about us
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 offset-lg-1">
                        {experienceArray.map((i => (
                            <div className="experience-list" key={i.id}>
                                <div className="experience-overlay"></div>
                                <div className="experience-container">
                                    <div className="second-experience-box">
                                        <h6 className="experience-name">
                                            {i.role} - <span className="experience-company">{i.company}</span>
                                        </h6>
                                        <h6 className="experience-duration">
                                            {i.startTime} - {i.endTime}
                                        </h6>
                                    </div>
                                    {i.responsibilities.map((k => (
                                            <div className="experience-detail" key={k.id}>
                                                <img style={{width:"18px", marginTop:"5px"}} src={process.env.PUBLIC_URL + '/img/roles.svg'} alt="roles" />
                                                <p className="experience-roles">
                                                    {k.description}
                                                </p>
                                            </div>
                                    )))}
                                </div>
                            </div>
                        )))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;
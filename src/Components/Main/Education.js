import React from "react";
import Headings from "../../Common/Headings";
import { education } from "../../Data/Data";


function Education(){
    return(
        <section className="section-start grey-section education-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Headings heading="Education" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <div className="row">
                            {education.map((i, index) => (
                                <div className="col-lg-4">
                                    <div className="education-list" key={index}>
                                        <div>
                                            <img className="education-img" src={process.env.PUBLIC_URL + '/img/education.png'} alt="" />
                                            <div className="education-details">
                                                <h6 className="education-name">
                                                    {i.name}
                                                </h6>
                                                <p className="education-degree opacity-07">
                                                    {i.degree}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="education-duration">
                                            <p className="education-from-to">
                                                <span className="opacity-07">From:</span> {i.startingFrom}
                                            </p>
                                            <p className="education-from-to">
                                                <span className="opacity-07">To:</span> {i.endingAt}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </section>
    )
}

export default Education;
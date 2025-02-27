import React from "react";
import Headings from "../../Common/Headings";
import SmallHeadings from "../../Common/SmallHeadings";
import {awards} from '../../Data/Data';

function Awards(){
    return(
        <section id="awards" className="section-start">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Headings heading="Awards" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="center-img">
                            <img style={{width:"100%"}} src={process.env.PUBLIC_URL + '/img/Hackathon-winner.png'} alt="winner" />
                        </div>
                    </div>
                    <div className="col-lg-7"></div>
                    <div className="col-lg-4">
                        <div className="grey-section featured-award-box">
                            <div className="flex-all-center-col">
                                <p className="featured-award-info">
                                    Winner of the inaugural Verizon 5G for Change Webby Award in New York City against 149 other teams worldwide.
                                </p>
                                <a className="second-main-button" target="_blank" href="https://www.webbyawards.com/team-frameperfect-crowned-winner-5g-for-change-hackathon/">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
                <div className="row" style={{marginTop:"80px"}}>
                    <div className="col-lg-12">
                        <SmallHeadings heading="More Awards"/>
                    </div>
                    {awards.map((i => (
                        <div className="col-lg-4" key={i.id}>
                            <div className="other-awards grey-section">
                                <img className="other-awards-img" src={process.env.PUBLIC_URL + '/img/award.png'} alt="award" />
                                <h6 className="other-awards-name">
                                    {i.awardName}
                                </h6>
                                {
                                    i.rank !== "" 
                                    ?
                                    <p className="other-awards-rank">
                                        {i.rank}
                                    </p>
                                    :
                                    <></>
                                }
                                {
                                    i.description !== "" 
                                    ?
                                    <p className="other-awards-rank other-awards-description">
                                        {i.description}
                                    </p>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    )))}
                </div>
            </div>
        </section>
    )
}

export default Awards;
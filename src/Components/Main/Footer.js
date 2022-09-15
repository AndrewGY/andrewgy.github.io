import React from "react";
import { userEmail, userGithub, userLinkedin } from "../../Data/Data";



function Footer(){
    return(
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="footer-heading">Get Connected</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="flex-space-between flex-align-items-center" style={{marginTop:"50px"}}>
                            {/*
                            <a href={userLinkedin} target="_blank">
                                <img src={process.env.PUBLIC_URL + '/img/linkedin.svg'} />
                            </a>
                            */}
                            <a href={`mailTo:${userEmail}`} target="_blank">
                                <img src={process.env.PUBLIC_URL + '/img/mail.svg'} />
                            </a>
                            <a href={userGithub} target="_blank">
                                <img src={process.env.PUBLIC_URL + '/img/github-dark.svg'} />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
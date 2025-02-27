import React from "react";
import Headings from "../../Common/Headings";
import SmallHeadings from "../../Common/SmallHeadings";
import { featured_projects, projects } from "../../Data/Data";


function Projects(){
    const featured = featured_projects
    const normal_projects = projects;
    return(
        <section id="projects" className="section-start projects-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Headings heading="Projects" />
                    </div>
                </div>
                {featured.map((i, index) => (
                    <div key={index}>
                        {
                            index % 2 === 0 
                            ?
                            <div className="row">
                                <div className="col-lg-6" key={index}>
                                    <img className="project-img" src={process.env.PUBLIC_URL + `/img/${i.img}`} alt={i.img} />
                                </div>
                                <div className="col-lg-6">
                                    <div className="projects-box">
                                        <p className="featured-project">
                                            Featured Project
                                        </p>
                                        <h2 className="project-name">
                                            {i.projectName}
                                        </h2>
                                        <p className="project-description">
                                            {i.description}
                                        </p>
                                        <div className="project-tech">
                                            {i.tech.map((j => (
                                                <p className="project-tech-name" key={j.id}>
                                                    {j.techName}
                                                </p>
                                            )))}
                                        </div>
                                        <div className="projects-links">
                                            {
                                                i.url !== ""
                                                ?
                                                <a href={i.url} target="_blank">
                                                    <img className="links" src={process.env.PUBLIC_URL + '/img/link.svg'} alt="github" />
                                                </a>
                                                :
                                                <></>
                                            }
                                            {
                                                i.github !== ""
                                                ?
                                                <a href={i.github} target="_blank">
                                                    <img className="links" src={process.env.PUBLIC_URL + '/img/github.svg'} alt="github" />
                                                </a>
                                                :
                                                <></>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="row reverse">
                                <div className="col-lg-6">
                                    <div className="projects-box">
                                        <p className="featured-project">
                                            Featured Project
                                        </p>
                                        <h2 className="project-name">
                                            {i.projectName}
                                        </h2>
                                        <p className="project-description">
                                            {i.description}
                                        </p>
                                        <div className="project-tech">
                                            {i.tech.map((j => (
                                                <p className="project-tech-name" key={j.id}>
                                                    {j.techName}
                                                </p>
                                            )))}
                                        </div>
                                        <div className="projects-links">
                                            {
                                                i.url !== ""
                                                ?
                                                <a href={i.url} target="_blank">
                                                    <img className="links" src={process.env.PUBLIC_URL + '/img/link.svg'} alt="github" />
                                                </a>
                                                :
                                                <></>
                                            }
                                            {
                                                i.github !== ""
                                                ?
                                                <a href={i.github} target="_blank">
                                                    <img className="links" src={process.env.PUBLIC_URL + '/img/github.svg'} alt="github" />
                                                </a>
                                                :
                                                <></>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" key={index}>
                                    <img className="project-img" src={process.env.PUBLIC_URL + `/img/${i.img}`} alt={i.img} />
                                </div>
                            </div>
                        }
                    </div>
                ))}
                <div 
                    className="row" 
                    style={{
                        marginTop:"100px"
                    }}
                >
                    <div className="col-lg-12">
                        <SmallHeadings heading="More Projects"/>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="row">
                                {normal_projects.map((p, index) => (
                                    <div className="col-lg-4" key={index}>
                                        <div className="similar-projects">
                                            <div>
                                                <div className="flex-space-between">
                                                    <h2 className="project-name">
                                                        {p.projectName}
                                                    </h2>
                                                    <div style={{display:"flex"}}>
                                                        {
                                                            p.url !== ""
                                                            ?
                                                            <a href={p.url}>
                                                                <img className="project-links" src={process.env.PUBLIC_URL + '/img/link.svg'} />
                                                            </a>
                                                            :
                                                            <></>
                                                        }
                                                        {
                                                            p.github !== ""
                                                            ?
                                                            <a href={p.github}>
                                                                <img style={{marginLeft:"10px"}} className="project-links" src={process.env.PUBLIC_URL + '/img/github.svg'} />
                                                            </a>
                                                            :
                                                            <></>
                                                        }
                                                    </div>
                                                </div>
                                                <p className="project-description">
                                                    {p.description}
                                                </p>
                                            </div>
                                            <div style={{marginTop:"40px", display:"flex", flexWrap:"wrap"}}>
                                                {p.tech.map((i, index) => (
                                                    <p key={index} className="tech-names">
                                                        {i.techName}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Projects;
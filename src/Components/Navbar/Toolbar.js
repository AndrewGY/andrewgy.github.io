import React from 'react';
import {Link} from 'react-router-dom'


const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <Link to="/">
                <div className="toolbar-logo">
                    <img className='logo-img' src={process.env.PUBLIC_URL + '/img/word.png'} alt="logo" />
                </div>
            </Link>
            <div className="spacer"></div>
            <div className="toolbar-navigation-items">
                <ul>
                    <li>
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#awards">
                            Awards
                        </a>
                    </li>
                    <li>
                        <a href="https://blog.andrewgy.com" target="_blank" rel="noopener noreferrer">
                            Blog
                        </a>
                    </li>
                    {/* <li>
                        <a href={process.env.PUBLIC_URL + '/resume/Resume.pdf'} target="_blank">
                            Resume
                        </a>
                    </li> */}
                </ul>
            </div>
        </nav>
    </header>
)

export default Toolbar;
import React from 'react';

class Content extends React.Component {
    handleanchorLink() {
        document.querySelector('.sidebarContainer').classList.add('active');
    }
    render () {
        return (
            <div className="contentContainer">
                <section className="header">
                    <div onClick={() => this.handleanchorLink()}>
                        <i></i>
                    </div>
                </section>
                <section className="overview">
                    <h2>Overview</h2>
                    <div className="borderCont">I am a hard working and innovative developer with 3+ years of experience in full-stack and Mobile App development. I am self-taught in various technologies and framework, and love to step up to new challenges.
                    </div>
                </section>
                <section className="projects">
                    <h2>Projects</h2>
                    <div className="borderPrj">
                        <div className="borderCont">
                            <div className="title"><a href="https://www.gillette.com" target="_blank">Gillette - US</a></div>
                            <div className="text"></div>
                            <ul className="stackText">
                                <li>Big Commerce</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla JS</li>
                            </ul>
                        </div>
                        <div className="borderCont">
                            <div className="title"><a href="https://shop.braun.com/" target="_blank">Shop Braun - US</a></div>
                            <div className="text"></div>
                            <ul className="stackText">
                                <li>Big Commerce</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla JS</li>
                            </ul>
                        </div>          
                        <div className="borderCont">
                            <div className="title"><a href="https://theartofshaving.com/" target="_blank">The Art of Shaving - US</a></div>
                            <div className="text"></div>
                            <ul className="stackText">
                                <li>Big Commerce</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla JS</li>
                            </ul>
                        </div>
                        <div className="borderCont">
                            <div className="title"><a href="https://joyandglee.com/" target="_blank">Joy and Glee - US</a></div>
                            <div className="text"></div>
                            <ul className="stackText">
                                <li>Big Commerce</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla JS</li>
                            </ul>
                        </div>            
                        <div className="borderCont">
                            <div className="title"><a href="https://ec30clean.com/" target="_blank">EC30 Clean - US</a></div>
                            <div className="text"></div>
                            <ul className="stackText">
                                <li>Big Commerce</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla JS</li>
                            </ul>
                        </div>
                        <div className="borderCont">
                            <div className="title"><a href="https://www.gillettevenus.com/" target="_blank">Gillette Venus - US</a></div>
                            <div className="text"></div>
                            <ul className="stackText">
                                <li>Big Commerce</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla JS</li>
                            </ul>
                        </div>            
                        <div className="borderCont">
                            <div className="title"><a href="https://ondemand.gillette.ca/" target="_blank">Gillette - Canada</a></div>
                            <div className="text"></div>
                            <ul className="stackText">
                                <li>Big Commerce</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla JS</li>
                            </ul>
                        </div>            
                        <div className="borderCont">
                            <div className="title"><a href="https://joyshave.ca/" target="_blank">Joy and Glee - Canada</a></div>
                            <div className="text"></div>
                            <ul className="stackText">
                                <li>Big Commerce</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla JS</li>
                            </ul>
                        </div>         
                        <div className="borderCont">
                            <div className="title"><a href="https://olspice.com/" target="_blank">Old Spice - US</a></div>
                            <div className="text"></div>
                            <ul className="stackText">
                                <li>Big Commerce</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla JS</li>
                            </ul>
                        </div>         
                        <div className="borderCont">
                            <div className="title"><a href="https://shop.secret.com/" target="_blank">Shop Secret - US</a></div>
                            <div className="text"></div>
                            <ul className="stackText">
                                <li>Big Commerce</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla JS</li>
                            </ul>
                        </div>         
                        <div className="borderCont">
                            <div className="title"><a href="https://mybrisa.com/" target="_blank">Brisa - US</a></div>
                            <div className="text"></div>
                            <ul className="stackText">
                                <li>Big Commerce</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla JS</li>
                            </ul>
                        </div>       
                        <div className="borderCont">
                            <div className="title"><a href="https://crestwhitesmile.com/" target="_blank">Crest White Smile - US</a></div>
                            <div className="text"></div>
                            <ul className="stackText">
                                <li>Big Commerce</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla JS</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="work">
                    <h2>Work</h2>
                    <div className="borderCont">
                        <div className="title">Software Developer - Stagwell Tech <span>(Sep. 2017 - Present)</span></div>
                    </div>            
                    <div className="borderCont">
                        <div className="title">Front End Developer - West Corporation <span>(Jan 2017 - Aug 2017)</span></div>
                    </div>
                </section>
                <section className="education">
                    <h2>Education</h2>
                    <div className="borderCont">
                        <div className="title">M.Sc. in Robotics - KCL <span>(Sep. 2017 - Present)</span></div>
                    </div>            
                    <div className="borderCont">
                        <div className="title">West Corporation - AUD <span>(Jan 2017 - Aug 2017)</span></div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Content;

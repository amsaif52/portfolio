import React from 'react';

class Sidebar extends React.Component {
    handleanchorLink(anchorText) {
        const top = document.querySelector(anchorText).offsetTop;
        document.querySelector('.sidebarContainer').classList.remove('active');
        window.scrollTo({top: top, behavior: 'smooth'});
    }
    closeOffcanvas() {
        document.querySelector('.sidebarContainer').classList.remove('active');
    }
    render() {
        return (
            <div className="sidebarContainer">
                <div>
                    <a href="javascript:void(0)" class="closeOffcanvas" onClick={() => this.closeOffcanvas()}>×</a>
                    <div className="portfolio">
                        <img src="./1516465915778.jpg" alt="Portfolio"/>
                        <h1>Ali Asgar Merchant</h1>
                        <p><a href="mailto:aliasgar.saif@q-coders.com">aliasgar.saif@q-coders.com</a></p>
                    </div>
                    <ul>
                        <li><a href="javascript:void(0);" onClick={() => this.handleanchorLink('.overview')}>Overview</a></li>
                        <li><a href="javascript:void(0);" onClick={() => this.handleanchorLink('.projects')}>Projects</a></li>
                        <li><a href="javascript:void(0);" onClick={() => this.handleanchorLink('.work')}>Work</a></li>
                        <li><a href="javascript:void(0);" onClick={() => this.handleanchorLink('.education')}>Education</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;

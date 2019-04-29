import React, { Component } from "react";

import { APP_TITLE, BITBUCKET_STATUS_API_OVERALL_STATUS, BITBUCKET_STATUS_API_SERVICES, BITBUCKET_STATUS_API_CURRENT_INCIDENTS, BITBUCKET_STATUS_API_RECENT_INCIDENTS } from '../../utilities/constants';
import * as helpers from '../../utilities/helper-functions/helpers';

import "./about.scss";

class About extends Component {

    componentDidMount() {
        helpers.goToTopOfPage();
    }

    render() {

        return (

            <div className="outer-container-about">
                <div className="container-main-content-about">

                    <div className="container-card about">

                        <header>
                            <h1>{APP_TITLE}</h1>
                        </header>

                        <p>This app monitors the status of the Bitbucket Status API, and associated services.</p>
                        <p><a href="https://bitbucket.status.atlassian.com/api#status" target="_blank" rel="noopener noreferrer">Atlassian Bitbucket Status API Documentation and Functionality</a></p>
                        <p>&nbsp;</p>
                        <p>The following API endpoints are used in this app:</p>
                        <ul>
                            <li><span>Status</span> - gets the status rollup for the whole page - <span className="api-endpoint">{BITBUCKET_STATUS_API_OVERALL_STATUS}</span></li>
                            <li><span>Components</span> - gets the components for the page - <span className="api-endpoint">{BITBUCKET_STATUS_API_SERVICES}</span></li>
                            <li><span>Unresolved Incidents</span> - gets a list of any unresolved incidents - <span className="api-endpoint">{BITBUCKET_STATUS_API_CURRENT_INCIDENTS}</span></li>
                            <li><span>All Incidents</span> - gets a list of the 50 most recent incidents - <span className="api-endpoint">{BITBUCKET_STATUS_API_RECENT_INCIDENTS}</span></li>
                        </ul>
                    </div>

                    <div className="container-card technical">
                        <h2>Technologies Used</h2>
                        <ul>
                            <li>React</li>
                            <li>React Router</li>
                            <li>SCSS (CSS preprocessor)</li>
                            <li>HTML5</li>
                            <li>CSS3 Flexbox and Grid</li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    };
};

export default About;

import React from 'react';

import { STATUS_API_NONE } from '../../utilities/constants';


const StatusOverall = ({ statusIndicator, statusDescription }) => {

    return (

        <div className="container-card status-overall">
            <header>Overall Status</header>
            {statusIndicator !== STATUS_API_NONE && <p className={`status-indicator ${statusIndicator}`}>{statusIndicator}</p>}
            <p className={`status-description ${statusIndicator}`}>{statusDescription}</p>
        </div>

    );
}
 
export default StatusOverall;

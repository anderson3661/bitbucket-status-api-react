import React from 'react';


const IncidentsCurrent = ({ numberOfCurrentIncidents }) => {

    return (

        <div className="container-card incidents-current">
            <header>Number of Current Incidents:<span>{numberOfCurrentIncidents}</span></header>
        </div>

    );
}
 
export default IncidentsCurrent;

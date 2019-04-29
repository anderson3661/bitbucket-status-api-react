import React from 'react';

import { SERVICES_OPERATIONAL } from '../../utilities/constants';


const StatusServices = ({ statusOfServices }) => {

    return (

        <div className="container-card status-services">
            <header>Services Status</header>
            <table>
                <tbody>
                    {statusOfServices.map((type, i) => {
                        return (
                            <tr key={i} className={type.status === SERVICES_OPERATIONAL ? 'operational' : ''}>
                                <td className="service">{type.name}</td>
                                <td className={`status ${type.status === SERVICES_OPERATIONAL ? 'operational' : ''}`}>{type.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    );
}
 
export default StatusServices;

import React, { Component } from 'react';

import { STATUS_API_NONE, FREQUENCY_OF_UPDATES } from '../../utilities/constants';
import { api_overall_status, api_services_status, api_current_incidents, api_recent_incidents } from './api-call-helpers';
import StatusOverall from './status-overall';
import StatusServices from './status-services';
import IncidentsCurrent from './incidents-current';
import IncidentsRecent from './incidents-recent';
import WidgetControls from './widget-controls';

import './widgets.scss';


class Widgets extends Component {

    frequencyOfAPICallsInterval;
    
    state = {
        statusIndicator: STATUS_API_NONE,
        statusDescription: '',
        statusOfServices: [],
        currentIncidents: [],
        recentIncidents: [],
        frequencyOfUpdates: FREQUENCY_OF_UPDATES[FREQUENCY_OF_UPDATES.length - 1],
        lastUpdated: new Date(),
    }

    componentDidMount() {
        debugger;
        this.callAPIs();        // Do an initial call just to load the data
        debugger;
        this.setFrequencyOfAPICallsInterval();
        debugger;
    }

    componentWillUnmount() {
        clearInterval(this.frequencyOfAPICallsInterval);
    }

    setFrequencyOfAPICallsInterval = () => {
        let frequency = this.state.frequencyOfUpdates;
        frequency = frequency.substring(0, frequency.indexOf(" ")) * 60 * 1000;
        debugger;
        this.frequencyOfAPICallsInterval = setInterval(() => this.callAPIs(), frequency);
    }

    callAPIs = async () => {
        let results;
        try {
            debugger;
            results = await api_overall_status();
            this.setState({ statusIndicator: results.statusIndicator, statusDescription: results.statusDescription });

            results = await api_services_status();
            this.setState({ statusOfServices: results });
            
            results = await api_current_incidents();
            this.setState({ currentIncidents: results.incidents });
            
            results = await api_recent_incidents();
            this.setState({ recentIncidents: results.incidents });
            debugger;
            
        } catch(err) {
            console.log(err);
            throw new Error('Error from callAPIs');
        }
    }

    handleFrequencyOfUpdatesChange = (value) => {
        if (this.state.frequencyOfUpdates !== value) {
            this.setState({ frequencyOfUpdates: value, lastUpdated: new Date() }, () => {
                if (this.frequencyOfAPICallsInterval) {
                    clearInterval(this.frequencyOfAPICallsInterval);
                }
                this.setFrequencyOfAPICallsInterval();
            });
        }
    }

    render() {

        const { statusIndicator, statusDescription, statusOfServices, currentIncidents, recentIncidents, frequencyOfUpdates, lastUpdated } = this.state;

        return (

            <div className="container-widgets">

                <StatusOverall statusIndicator={statusIndicator} statusDescription={statusDescription} />
                <StatusServices statusOfServices={statusOfServices} />
                <WidgetControls lastUpdated={lastUpdated} frequencyOfUpdates={frequencyOfUpdates} onFrequencyOfUpdatesChange={this.handleFrequencyOfUpdatesChange} />
                <IncidentsCurrent numberOfCurrentIncidents={currentIncidents.length} />
                <IncidentsRecent recentIncidents={recentIncidents} />

            </div>
        );
    }
}
 
export default Widgets;

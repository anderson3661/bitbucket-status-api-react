import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { FREQUENCY_OF_UPDATES } from '../../utilities/constants';
import * as helpers from '../../utilities/helper-functions/helpers';


class WidgetControls extends Component {

    handleFrequencyOfUpdatesChange = (e) => {
        this.props.onFrequencyOfUpdatesChange(e.target.value);
    }

    render() {
        const { lastUpdated, frequencyOfUpdates } = this.props;
        debugger;

        return (

            <div className="container-card widget-controls">
                <header>Controls</header>
                <p className="last-updated">Calls to the API were last made: <span>{helpers.getFormattedDate(lastUpdated)}</span></p>
                <div className="frequency"><span>Frequency of API calls:</span> 
                    <Select
                        value={frequencyOfUpdates}
                        onChange={this.handleFrequencyOfUpdatesChange}
                        native={false}
                        >
                        {FREQUENCY_OF_UPDATES.map(frequency => <MenuItem key={frequency} value={frequency}>{frequency}</MenuItem>)}
                    </Select>
                </div>
            </div>

        );
    }
}
 
export default WidgetControls;

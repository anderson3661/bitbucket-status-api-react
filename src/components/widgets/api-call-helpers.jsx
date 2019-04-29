import { BITBUCKET_STATUS_API_OVERALL_STATUS, BITBUCKET_STATUS_API_SERVICES, SERVICES, BITBUCKET_STATUS_API_CURRENT_INCIDENTS, BITBUCKET_STATUS_API_RECENT_INCIDENTS } from '../../utilities/constants';

const RESULTS_DEFAULT_OVERALL_STATUS = { statusIndicator: '', statusDescription: '' };
const RESULTS_DEFAULT_SERVICES = { services: [] };
const RESULTS_DEFAULT_CURRENT_INCIDENTS = { incidents: [] };
const RESULTS_DEFAULT_RECENT_INCIDENTS = { incidents: [] };

export const api_overall_status = async () => {
    try {
        const res = await fetch(BITBUCKET_STATUS_API_OVERALL_STATUS);
        if (!res.ok) {
            return RESULTS_DEFAULT_OVERALL_STATUS;
            // throw Error(res.statusText);
        }
        const results = await res.json();
        if (results && results.status && results.status.indicator && results.status.description) {
            return { statusIndicator: results.status.indicator, statusDescription: results.status.description };
        } else {
            return RESULTS_DEFAULT_OVERALL_STATUS;
        }
    } catch(err) {
        console.log(err);
        return RESULTS_DEFAULT_OVERALL_STATUS;
        // throw new Error('Error from api_overall_status');
    }
}

export const api_services_status = async () => {
    try {
        const res = await fetch(BITBUCKET_STATUS_API_SERVICES);
        if (!res.ok) {
            return RESULTS_DEFAULT_SERVICES;
            // throw Error(res.statusText);
        }
        const results = await res.json();
        if (results && results.components) {
            let services = [];
            results.components.forEach(component => {
                if (SERVICES.indexOf(component.name) !== -1) services.push(component);
            });
            return services;
        } else {
            return RESULTS_DEFAULT_SERVICES;
        }
    } catch(err) {
        console.log(err);
        return RESULTS_DEFAULT_SERVICES;
        // throw new Error('Error from api_overall_status');
    }
}

export const api_current_incidents = async () => {
    try {
        const res = await fetch(BITBUCKET_STATUS_API_CURRENT_INCIDENTS);
        if (!res.ok) {
            return RESULTS_DEFAULT_CURRENT_INCIDENTS;
            // throw Error(res.statusText);
        }
        const results = await res.json();
        if (results && results.incidents) {
            return { incidents: results.incidents };
        } else {
            return RESULTS_DEFAULT_CURRENT_INCIDENTS;
        }
    } catch(err) {
        console.log(err);
        return RESULTS_DEFAULT_CURRENT_INCIDENTS;
        // throw new Error('Error from api_overall_status');
    }
}

export const api_recent_incidents = async () => {
    try {
        const res = await fetch(BITBUCKET_STATUS_API_RECENT_INCIDENTS);
        if (!res.ok) {
            return RESULTS_DEFAULT_RECENT_INCIDENTS;
            // throw Error(res.statusText);
        }
        const results = await res.json();
        debugger;
        if (results && results.incidents) {
            return { incidents: results.incidents };
        } else {
            return RESULTS_DEFAULT_RECENT_INCIDENTS;
        }
    } catch(err) {
        console.log(err);
        return RESULTS_DEFAULT_RECENT_INCIDENTS;
        // throw new Error('Error from api_overall_status');
    }
}

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PATH_WIDGETS, PATH_CONTACT, PATH_ABOUT } from '../../utilities/constants';

import Widgets from '../widgets/widgets';
import Contact from '../contact/contact';
import About from '../about/about';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={PATH_WIDGETS} render={ () => <Widgets /> } />
            <Route exact path={PATH_CONTACT} render={ () => <Contact /> } />
            <Route exact path={PATH_ABOUT} render={ () => <About /> } />
            <Route path="*" render={ () => <Widgets /> } />
        </Switch>
    );
};

export default Routes;
import React, { Component, Fragment } from 'react';

import { APP_TITLE } from '../../utilities/constants';

import './header.scss';


class Header extends Component {

    state = {
        displayNavBackground: false,
    }

    handleScroll = this.handleScroll.bind(this);

    componentDidMount() { window.addEventListener('scroll', this.handleScroll); }
    componentWillUnmount() { window.removeEventListener('scroll', this.handleScroll); }

    handleScroll(e) {
        if (window.pageYOffset > 50 & !this.state.displayNavBackground) {
            this.setState({displayNavBackground: true});
        } else if (window.pageYOffset <= 50 & this.state.displayNavBackground) {
            this.setState({displayNavBackground: false});
        }
    }

  
    render () {
        const { displayNavBackground } = this.state;

        return (
            <Fragment>
                <nav className={displayNavBackground ? 'displayNavBackground' : ''}>

                    <div className={"app-header " + (displayNavBackground ? 'displayNavBackground' : '')}>      {/* Can't use string literals otherwise code following is not accessible in debugger */}
                        <p>{APP_TITLE}</p>
                    </div>

                </nav>

            </Fragment>
        );
    }
};


export default Header;

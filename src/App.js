import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { MAIN_BACKGROUND_IMAGE } from './utilities/constants';

import Header from './components/nav/header';
import Footer from './components/nav/footer';
import Routes from './components/nav/routes';

import Loading from './components/loading/loading';
import LoadingError from './components/loading-error/loading-error';

import './App.scss';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            loadingError: false,
            dialogLoadingBackendErrorConfirmIsOpen: false,
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps, prevState) {
        if (nextProps.loadingBackendError) this.setState({ loadingError: true });     // If an error was encountered on the backend, then open the backend error dialog
    }

    render() {
        const { loading, loadingError } = this.state;
        return (
            <Router>
                <div className="outer-container">
                    <img className="full-screen-background-image" src={MAIN_BACKGROUND_IMAGE} alt=""></img>
                    <Header />
                    { loadingError ? <LoadingError /> : (loading ? <Loading /> : <Routes />) }
                    <Footer />
                </div>                   
            </Router>
        );
    }
}

export default App;

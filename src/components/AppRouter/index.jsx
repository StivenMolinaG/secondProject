import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../App';
import Swapi from '../../pages/Swapi';
import Footer from '../Footer';
import Header from '../Header';
import NotFound from '../NotFound';
import RickandMorty from '../RickandMorty';
import Pokemon from '../Pokemon';
import './AppRouter.css';

function AppRouter() {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Swapi" component={Swapi} />
                <Route path="/Pokemon" component={Pokemon} />
                <Route path="/Ricky" component={RickandMorty} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </Fragment>
    );
}

export default AppRouter;
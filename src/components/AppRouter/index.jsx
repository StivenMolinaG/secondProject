import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Home from '../../pages/Home';
import Swapi from '../../pages/Swapi';
import Pokemon from '../../pages/Pokemon';
import RickandMorty from '../../pages/RickandMorty';
import './AppRouter.css';
import Footer from '../Footer';
// import NotFound from '../NotFound';

function AppRouter() {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Swapi" component={Swapi} />
                <Route path="/Pokemon" component={Pokemon} />
                <Route path="/Ricky" component={RickandMorty} />
                {/* <Route component={NotFound} /> */}
            </Switch>
            <Footer />
        </Fragment>
    );
}

export default AppRouter;
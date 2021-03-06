import React from 'react';
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    // Link
} from 'react-router-dom';
import './App.scss';

import Login from '../Login';
import IfSession from '../IfSession';
// import Variables from '../Variables';
import Period from '../Period';
// import AllData from '../AllData';

export default () => (
    <>
        <header>
            <Login />
        </header>
        <IfSession>
            <Router>
                {/* <AllData /> */}
                <Period />
                {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Switch>
                        <Route exact path="/">
                            Home
                        </Route>
                        <Route path="/about">
                            About
                        </Route>
                    </Switch>
                    <Grid /> */}
            </Router>
        </IfSession>
        {/* <Variables /> */}
    </>
);

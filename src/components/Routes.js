require('babel-polyfill');
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home"

class Routes extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={Home}
                        />
                        <Route component={404} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;

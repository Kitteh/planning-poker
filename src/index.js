import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import './index.scss';
import Home from './screens/Home';
import Game from './screens/Game';
import About from './screens/About';
import MainNavbar from './components/MainNavbar'
import * as serviceWorker from './serviceWorker';
import Amplify from '@aws-amplify/core';
import config from './aws-exports';
Amplify.configure(config);

const routes = (
    <Router>
        <div>
            <MainNavbar />
            <Switch>
                <Route path='/game/:id' component={Game}/>
                <Route path='/about' component={About} />
                <Route path='/' component={Home}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

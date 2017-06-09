import React from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import Home from '../container/home';
import User from '../container/user';
import Root from './root';

export const App = (props) => {
    return (
        <HashRouter>
            <Root>
                <Route exact path='/' component={Home} />
                <Route path='/user/:id' component={User} />
            </Root>
        </HashRouter>
    );
};
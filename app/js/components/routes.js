'use strict';
import React from 'react';
import {Route,DefaultRoute,NotFoundRoute} from 'react-router';
import Layout from './layout';
import Home from './home';
import NotFound from './notfound';
import JoinUs from './joinus';

const routes = (
  <Route handler={Layout}>
    <DefaultRoute name="home" handler={Home}/>
    <Route name="join-us" path="/join-us" handler={JoinUs}/>
    <NotFoundRoute name="not-found" handler={NotFound}/>
  </Route>
);

export default routes;

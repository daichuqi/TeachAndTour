'use strict';
import React from 'react';
import {Route,DefaultRoute,NotFoundRoute} from 'react-router';
import Layout from './layout';
import Home from './home';
import NotFound from './notfound';
import JoinUs from './joinus';
import Whoweare from './whoweare';
import News from './news';
import Whatwedo from './whatwedo';

const routes = (
  <Route handler={Layout}>
    <DefaultRoute name="home" handler={Home}/>
    <Route name="join-us" path="/join-us" handler={JoinUs}/>
    <Route name="news" path="/news" handler={News}/>
    <Route name="who" path="/who" handler={Whoweare}/>
    <Route name="what" path="/what" handler={Whatwedo}/>
    <NotFoundRoute name="not-found" handler={NotFound}/>
  </Route>
);

export default routes;

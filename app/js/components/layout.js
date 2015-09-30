'use strict';
import React from 'react';
import Router from 'react-router';
import Navigation from './nav';
import Footer from './footer';

class Layout extends React.Component {
  render() {
    return (
      <div id='root'>
      <Navigation />
      <Router.RouteHandler/>
      <Footer />
    </div>
    );
  }
}

export default Layout;

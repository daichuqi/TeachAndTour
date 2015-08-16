'use strict';
import React from 'react';
import Router from 'react-router';
import Navigation from './nav';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="topbar">
          <ul className="inline-list">
            <li><i className="fa fa-home"></i> 425 Street Name, UK, London</li>
            <li><i className="fa fa-phone"></i> (123) 456-7890</li>
          </ul>
        </div>
        <Navigation />
        <Router.RouteHandler/>
      </div>
    );
  }
}

export default Layout;

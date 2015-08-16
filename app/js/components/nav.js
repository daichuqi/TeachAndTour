'use strict';
import React from 'react';
import Router from 'react-router';
import Sticky from 'react-sticky'

class Nav extends React.Component {
  render() {
    return (
      <div>

      <Sticky topOffset={40}>
        <div className="navbar">
          <nav>
            <Router.Link to="home"><button className="navButton">home</button></Router.Link>
            <Router.Link to="join-us"><button className="navButton">join</button></Router.Link>
          </nav>
        </div>
      </Sticky>

      </div>
    );
  }
};

export default Nav;

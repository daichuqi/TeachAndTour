'use strict';
import React from 'react';
import Router from 'react-router';


class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className ="topbar">
          <nav>
          <Router.Link to="home"><img className="logo" src="../assets/logo.png"></img></Router.Link>
            <Router.Link to="home"><button className="navButton">home</button></Router.Link>
            <Router.Link to="maps"><button className="navButton">maps</button></Router.Link>
            <Router.Link to="news"><button className="navButton">news</button></Router.Link>
            <Router.Link to="join-us"><button className="navButton">join</button></Router.Link>
          </nav>
        </div>

      </div>
    );
  }
};

export default Nav;

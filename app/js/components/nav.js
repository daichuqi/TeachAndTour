'use strict';
import _ from 'lodash';
import React from 'react';
import Router from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Router.Link to="user">
            <button>Profile</button>
          </Router.Link>
        </nav>
      </div>
    );
  }
};

export default Nav;

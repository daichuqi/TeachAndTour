'use strict';
import React from 'react';


class Footer extends React.Component {
  constructor() {
    super();
   }
  render() {
    return (
      <div className="footer">
        <hr className="footer-divider" />
        <div className="footerTitle">Find Us On</div>
        <div>
          <ul>
            <li><a href="#"  className="footer-container"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"  className="footer-container"><i className="fa fa-instagram"></i></a></li>
            <li><a href="#"  className="footer-container"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"  className="footer-container"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer;

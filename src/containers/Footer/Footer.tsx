import * as React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>
              Oriol Egea <i className="fa fa-copyright" aria-hidden="true" /> 2017
            </p>
            <div className="footer-bottom">
              <i className="fa fa-code" aria-hidden="true" /> &nbsp;
              with	&nbsp;
              <i className="fa fa-heart" aria-hidden="true" /> &nbsp;
              from Barcelona
            </div>
          </div>
          <div className="footer-right">
            <p>Legal notice</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
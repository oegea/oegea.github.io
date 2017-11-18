import * as React from 'react';
import HeaderLink from './HeaderLink';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <div className="header-logo">
            <i className="material-icons">developer_mode</i>
            <div className="header-logo-text">I'm Oriol</div>
          </div>

          <div className="header-links">
            <HeaderLink text="Blog" link="/" />
            <HeaderLink text="About Me" link="/about-me" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

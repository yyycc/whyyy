import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../../images/react-logo.svg';
import rekitLogo from '../../images/rekit-logo.svg';

export default class DefaultPage extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div className="home-default-page">
        <header className="app-header">
          <img src={reactLogo} className="app-logo" alt="logo" />
          <img src={rekitLogo} className="rekit-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <div className="app-intro">
          <h3>WELCOME TO</h3>
          <h3>whyyy his blog</h3>
          <h3>click to enter</h3>

          <Link to="/blog">/blog</Link>
        </div>
      </div>
    );
  }
}

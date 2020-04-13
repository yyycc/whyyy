import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Y from '../../images/Y.png';

export default class DefaultPage extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div className="home-default-page">
        <header className="app-header">
          {/*<img src={reactLogo} className="app-logo" alt="logo" />*/}
          {/*<img src={rekitLogo} className="rekit-logo" alt="logo" />*/}
          <h1 className="app-title">Welcome to Whyyy His Blog</h1>
        </header>
        <div className="app-intro">
          <Link to='/blog'><img src={Y} alt='enter'/></Link>
        </div>
      </div>
    );
  }
}

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
          <h3>To get started:</h3>
          <ul>
            <li>
              Edit component{' '}
              <a
                href="http://localhost:6076/element/src%2Ffeatures%2Fhome%2FDefaultPage.js/code"
                target="_blank"
                rel="noopener noreferrer"
              >
                src/features/home/DefaultPage.js
              </a>{' '}
              for this page.
            </li>
            <li>
              Edit component{' '}
              <a
                href="http://localhost:6076/element/src%2Ffeatures%2Fhome%2FApp.js/code"
                target="_blank"
                rel="noopener noreferrer"
              >
                src/features/home/App.js
              </a>{' '}
              for the root container layout.
            </li>
            <li>
              To see examples, access:&nbsp;
              <Link to="/examples">/examples</Link>
            </li>
            <li>
              To see blog, access:&nbsp;
              <Link to="/blog">/blog</Link>
            </li>
            <li>
              Rekit Studio is running at:&nbsp;
              <a href="http://localhost:6076/" target="_blank" rel="noopener noreferrer">
                http://localhost:6076/
              </a>.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

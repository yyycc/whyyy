import React, { Component } from 'react';
import cute from '../../../images/cute-girl.png';

export default class CssA extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="css-css-a">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img alt='cute girl' src={cute}/>
        </div>
        <div>
          <p style={{ textAlign: 'center' }}>
            <img alt='cute girl' src={cute}/>
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img alt='cute girl' src={cute}/>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class CssC extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="css-css-c">

        <div style={{ display: 'flex' }}>
          <p>0.5px的线</p>
          <div className="css-css-c-line"/>
        </div>

        <div style={{ display: 'flex' }}>
          <p>1px的线</p>
          <div className="css-css-c-line-one"/>
        </div>

        <div style={{ display: 'flex' }}>
          <p>1px，颜色浅一些的线</p>
          <div className="css-css-c-line-two"/>
        </div>

        <div style={{ display: 'flex' }}>
          <p>1px，渐变的线</p>
          <div className="css-css-c-line-three"/>
        </div>

      </div>
    );
  }
}

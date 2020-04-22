import React, { Component } from 'react';

export default class Triangle extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="css-triangle">
        <div className="css-triangle-one">
          <div className="css-triangle-column">
            <p>这是一个三角形哦</p>
            <div className="css-triangle-a"/>
          </div>
          <div className="css-triangle-column-two">
            <p>这是一个正方形哦</p>
            <div className="css-square-a"/>
          </div>
        </div>
        <div className="css-triangle-two">
          <div className="css-triangle-column">
            <p>这是一个三角形哦</p>
            <div className="css-triangle-b"/>
          </div>
          <div className="css-triangle-column-two">
            <p>这是一个长方形哦</p>
            <div className="css-square-b"/>
          </div>
        </div>

        {/*<div className="box-one"/>
        <div className="box-two"/>*/}
      </div>
    );
  }
}

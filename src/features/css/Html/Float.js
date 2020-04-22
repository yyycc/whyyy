import React, { Component } from 'react';

export default class Float extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="css-float">
        <p>不浮动</p>
        <div style={{ border: '1px solid black' }}>
          <div className="css-float-one-a">a</div>
          <div className="css-float-one-b">b</div>
        </div>
        <div className="css-float-one-c">c</div>
        <br/>
        <p>浮动</p>
        <div style={{ border: '1px solid black' }}>
          <div className="css-float-two-a">a</div>
          <div className="css-float-two-b">b</div>
        </div>
        <div className="css-float-two-c">c</div>
        <br/><br/><br/><br/>
        <p>clear: both 清除浮动</p>
        <div style={{ border: '1px solid black' }}>
          <div className="css-float-two-a">a</div>
          <div className="css-float-two-b">b</div>
          <div style={{ clear: 'both' }}/>
        </div>
        <div className="css-float-two-c">c</div>
        <br/><br/>
        <p>BFC清除浮动</p>
        <div style={{ border: '1px solid black', width: '400px', overflow: 'hidden' }}>
          <div className="css-float-two-a">a</div>
          <div className="css-float-two-b">b</div>
        </div>
        <div className="css-float-two-c">c</div>
        <br/>
        <p>伪元素清除浮动</p>
        <div style={{ border: '1px solid black' }} className="css-float-div">
          <div className="css-float-two-a">a</div>
          <div className="css-float-two-b">b</div>
        </div>
        <div className="css-float-two-c">c</div>
      </div>
    );
  }
}

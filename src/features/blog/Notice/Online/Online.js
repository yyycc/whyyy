import React, { Component } from 'react';
import online from '../../../../images/online.jpg';

export default class Online extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="blog-online">
        <h1>上线通知</h1>
        <article>
          <br/>
          <p>上线啦</p>
          <p>本站于20XX年0X月XX日正式上线</p>
          <img src={online} alt=''/>
        </article>
      </div>
    );
  }
}

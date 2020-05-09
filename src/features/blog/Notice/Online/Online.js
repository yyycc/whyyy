import React, { Component } from 'react';
import online from '../../../../images/online.jpg';

export default class Online extends Component {
  static propTypes = {};

  render() {
    const days = parseInt((new Date() - new Date('2020-04-16')) / 1000 / 60 / 60 / 24);
    return (
      <div className="blog-online">
        <h1>上线通知</h1>
        <article>
          <br/>
          <p>whyyy his blog 上线啦</p>
          <p>本站于2020年04月16日正式上线</p>
          <p>已稳定运行{days}天</p>
          <img src={online} alt=''/>
        </article>
      </div>
    );
  }
}

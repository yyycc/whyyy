import React, { Component } from 'react';
import world from '../../../../images/new-world.jpeg';

export class Maintain extends Component {

  render() {
    return (
      <div className="blog-maintain">
        <h1>维护公告</h1>
        <article>
          <br/>
          <p>本站会进行不定期维护</p>
          <p>维护时间一般在深夜</p>
          <p>如果无法访问</p>
          <p>请睡醒后继续尝试</p>
          <p>谢谢～～</p>
          <img src={world} alt=''/>
        </article>
      </div>
    );
  }
}

export default Maintain;

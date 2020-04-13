import React, { Component } from 'react';
import friends from '../../../../images/friends.jpg';

export class FLinks extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div className="blog-f-links">
        <h1>友请链接</h1>
        <article>
          <p>链接都在这儿了，自己看吧</p>
          <p><img src={friends} alt='friends'/></p>
        </article>
        <div style={{ backgroundColor: 'white', marginTop: '20px' }}>
          <ul>
            <li>
              <span>
                <a href="https://lovesy.org.cn/" target="_blank" rel="noopener noreferrer">儿女意向来痴</a>
              </span>
            </li>
            <li>
              <span>
                <a href="http://www.zsythink.net/" target="_blank" rel="noopener noreferrer">朱双印的个人博客</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FLinks;

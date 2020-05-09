import React, { Component } from 'react';
import friends from '../../../../images/friends.jpg';
import links from './Links';

export class FLinks extends Component {
  static propTypes = {};

  render() {
    const { linkNames } = links;
    return (
      <div className="blog-f-links">
        <h1>友请链接</h1>
        <article>
          <p>链接都在这儿了，自己看吧</p>
          <p><img src={friends} alt='friends'/></p>
        </article>
        {/*<div style={{ backgroundColor: 'white', marginTop: '20px' }}>
          <ul>
            <li>
              <span>
                <a href="https://ferry.org.cn/" target="_blank" rel="noopener noreferrer">儿女意向来痴</a>
              </span>
            </li>
            <li>
              <span>
                <a href="http://www.zsythink.net/" target="_blank" rel="noopener noreferrer">朱双印的个人博客</a>
              </span>
            </li>
          </ul>
        </div>*/}

        <div className="blog-f-links-lists">
          {
            linkNames.map((ele, index) => {
              // const name = international[ele] ? international[ele] : ele;
              return <div key={index} className="blog-f-links-lists-div">
                <li className="blog-f-links-lists-li">
                  <a href={ele['link']} target="_blank" rel="noopener noreferrer">{ele['name']}</a>
                </li>
              </div>;
            })
          }
        </div>
      </div>
    );
  }
}

export default FLinks;

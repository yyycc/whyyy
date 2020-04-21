import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Views from './Views';

export class Interview extends Component {
  static propTypes = {};

  render() {
    debugger;
    const { posts } = Views;
    const urlStates = [];
    const interview = posts.filter((ele) => {
      if (ele.tag.indexOf('interview') > -1) {
        urlStates.push({
          pathname: ele.route,
          state: ele.title,
        });
        return true;
      }
      return false;
    });
    return (
      <div className="blog-interview">
        <p>要准备换工作啦</p>
        <p>面试什么的最可怕了</p>
        <p>赶紧准备一下面试题</p>
        <p>争取早日找到下一份工作</p>
        <p>前端向</p>
        <ol>
          {
            interview.map((ele, index) => {
              return <li key={index}><Link to={urlStates[index]}>{ele.title}</Link></li>;
            })
          }
        </ol>
      </div>
    );
  }
}

export default Interview;

import React, { Component } from 'react';
import tag from '../../../../images/Y.png';
import weChat from '../../../../images/wechat-2.png';

export default class ArticlesBrief extends Component {
  static propTypes = {};

  render() {
    const { posts } = this.props.blog;
    let tags = [];
    posts.forEach((ele) =>
      tags = tags.concat(ele.tag),
    );
    tags = Array.from(new Set(tags));
    return (
      <div className="blog-articles-brief">
        <p><img src={tag} alt=''/></p>
        <p>文章数量：{posts.length}</p>
        <p>标签数量：{tags.length}</p>
        <p>最后更新日期：{posts[0].date}</p><br/>
        <p>文章内容均经过验证</p>
        <p>如有错漏</p>
        <p>请不吝告知</p>
        <div className="blog-articles-brief-we-chat">
          <p><img src={weChat} alt=''/></p>
        </div>
      </div>
    );
  }
}

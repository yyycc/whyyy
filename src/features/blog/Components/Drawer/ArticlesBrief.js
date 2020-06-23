import React, { Component } from 'react';
import tag from '../../../../images/Y.png';
import weChat from '../../../../images/wechat-2.png';

/*
 * @name:         文章介绍
 * @description:  站内地图右侧弹出窗口
 * @arg1:         posts  博客
 */

export default class ArticlesBrief extends Component {

  render() {
    const posts = this.props.posts;
    let tags = [];
    posts.forEach((ele) =>
      tags = tags.concat(ele.tag),
    );
    tags = Array.from(new Set(tags));
    let last_update_date = posts[0] ? posts[0].date : '';
    return (
      <div className="blog-articles-brief">
        <p><img src={tag} alt=''/></p>
        <p>文章数量：{posts.length}</p>
        <p>标签数量：{tags.length}</p>
        <p>最后更新日期：{last_update_date}</p><br/>
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

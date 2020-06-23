import React, { Component } from 'react';
import y from '../../../../images/Y.png';

/*
 * @name:         站内简介
 * @description:  首页右侧弹出窗口
 */

export class BlogDetail extends Component {

  render() {
    return (
      <div className="blog-blog-detail">
        <img src={y} alt=''/>
        <p>whyyy his blog</p>
        <div className="blog-blog-detail-content">
          <p>技术博客</p>
          <p>旨在记录日常所学所思所得</p>
          <p>基本是前端知识</p>
          <p>博主正在前端的路上一去不复返</p>
          <p>但是</p>
          <p>鉴于没有全栈梦的小白不是好前端</p>
          <p>用到后端又比较有意思的</p>
          <p>还是要记下来的</p>
          <p>毕竟年纪大了记性不好</p>
        </div>
      </div>
    );
  }
}

export default BlogDetail;

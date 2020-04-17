import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Css extends Component {
  static propTypes = {};

  render() {
    const posts = this.props.posts;
    const css = posts.filter((ele) => {
      return ele.tag.indexOf('css') > -1;
    }).reverse();
    return (
      <div className="blog-css">
        <p>关于css最初的记忆是刚上班的时候，坐在同事小姐姐边上看她改页面样式。当时觉得这个东西真的好神奇哦～</p>
        <p>后来做实施用到css的地方其实也不算太多。</p>
        <p>最近自己画博客，接触到了很多之前没用过的css。发现好多动画都可以只用css就实现。</p>
        <p>写一个专题记录一下。</p>
        <p>因为博主对于理论知识真的很不感冒，所以基本都是实战，介绍某个具体UI如何实现。</p>
        <ol>
          {
            css.map((ele, index) => {
              return <li key={index}><Link to={ele.route}>{ele.title}</Link></li>;
            })
          }
        </ol>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    posts: state.blog.posts,
  };
}

export default connect(
  mapStateToProps,
)(Css);


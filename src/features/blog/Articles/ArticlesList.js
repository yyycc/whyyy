import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/*
 * @name: 站内地图
 * @description: 文章列表
 */

export class ArticlesList extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
  };

  render() {
    const { posts } = this.props.blog;
    let postsInOrder = posts.concat();
    postsInOrder.sort((cur, last) =>
      cur.key - last.key);
    return (
      <div className="blog-articles-list">
        <div className="blog-articles-list-bg">
          <ol className="blog-articles-list-bg-ol">
            {
              postsInOrder.map((ele, index) => {
                return <li key={index}><Link to={ele.route}>{ele.title}</Link></li>;
              })
            }
            {
              posts.length === 0 && <p>暂无</p>
            }
          </ol>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    blog: state.blog,
  };
}

export default connect(
  mapStateToProps,
)(ArticlesList);

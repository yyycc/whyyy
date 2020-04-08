import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Link } from 'react-router-dom';

export class ArticlesList extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { fontSize, posts } = this.props.blog;
    let postsInOrder = posts.concat();
    postsInOrder.sort((cur, last) =>
      cur.key - last.key);
    return (
      <div className="blog-articles-list">
        <h1>站内地图</h1>
        <article style={{ fontSize: `${fontSize}px` }}>
          <div className="blog-articles-list-bg">
            <ol className="blog-articles-list-bg-ol">
              {
                postsInOrder.map((ele, index) => {
                  return <li key={index}><Link to={ele.route}>{ele.title}</Link></li>;
                })
              }
            </ol>
          </div>
        </article>
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

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticlesList);

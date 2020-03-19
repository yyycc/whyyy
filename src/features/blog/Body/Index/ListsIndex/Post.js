import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Link } from 'react-router-dom';

export class Post extends Component {

  render() {
    const { title, date, tag, summary, route, order } = this.props.post;
    const to = route + '/' + order;
    const { queryPostsByTag } = this.props.actions;
    return (
      <div className="blog-post">
        <div className="blog-post-title">
          <span className="blog-post-title-mark"> </span>
          <h2><Link to={to}>{title}</Link></h2>
        </div>
        <div className="blog-post-info">
          <p>{date}</p>
          <div className="blog-post-info-tag">
            {
              tag.map((ele, index) => {
                return <li onClick={() => queryPostsByTag(ele)} key={index}><i className="fa fa-snowflake-o">
                </i>{ele}
                </li>;
              })
            }
          </div>
        </div>
        <div>
          <p>{summary}</p>
        </div>
        <div>
          <Link to={to}>阅读全文</Link>
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

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Link } from 'react-router-dom';

export class Post extends Component {

  render() {
    const { title, date, tag, summary, route } = this.props.post;
    return (
      <div className="blog-post">
        <div>
          <span className="blog-post-mark"> </span>
          <h1>{title}</h1>
        </div>
        <div className="blog-post-info">
          <p>{date}</p>
          <div className="blog-post-info-tag">
            {
              tag.map((ele, index) => {
                return <p>{ele}</p>;
              })
            }
          </div>
        </div>
        <div>
          <p>{summary}</p>
        </div>
        <div>
          <Link to={route}>阅读全文</Link>
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

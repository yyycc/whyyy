import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Post extends Component {

  render() {
    const { title, date, tag, summary, route, key } = this.props.post;
    const { queryPostsByTag } = this.props.actions;
    const urlStates = {
      pathname: route,
      state: key,
    };
    return (
      <div className="blog-post">
        <div className="blog-post-title">
          <span className="blog-post-title-mark"> </span>
          <h2><Link to={urlStates}>{title}</Link></h2>
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
        <div className="blog-post-summary">
          <p>{summary}</p>
        </div>
        <div className="blog-post-read">
          <Link to={urlStates}>阅读全文</Link>
        </div>
      </div>
    );
  }
}

export default Post;

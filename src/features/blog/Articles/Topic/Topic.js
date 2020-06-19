import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Topic extends Component {
  static propTypes = {};

  render() {
    const path = this.props.location.pathname;
    const type = path.replace('/blog/articles/', '');
    const posts = this.props.posts;
    const list = posts.filter((ele) => {
      return ele.tag.indexOf(type) > -1;
    }).reverse();
    return (
      <div className="blog-topic">
        <p></p>
        <ol>
          {
            list.map((ele, index) => {
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
)(Topic);

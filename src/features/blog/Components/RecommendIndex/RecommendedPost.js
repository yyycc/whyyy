import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import array from '../../../../images/tree.png';
import linux from '../../../../images/cute-penguin.png';
import linux2 from '../../../../images/scraf-penguin.png';
import git from '../../../../images/snow-cat.png';
import oracle from '../../../../images/underline.png';

export class RecommendedPost extends Component {
  static propTypes = {};

  render() {
    const images = [git, array, linux, linux2, git, oracle];
    const { posts } = this.props.blog;
    const recommendedPosts = posts.filter((ele) => !!ele.recommended);
    return (
      <div className="blog-recommended-post">
        <h3>
          <li>
            <i className="fa fa-thumbs-up"/>
          </li>
          推荐
        </h3>
        <div className="blog-recommended-post-lists">
          {
            recommendedPosts.map((ele, index) => {
              return <li key={index}>
                <span className="blog-recommended-post-lists-image"><img src={images[index]} alt="array"/></span>
                <span className="blog-recommended-post-lists-content">
                  <Link to={ele.route}>{ele.title}</Link>
                  <p>{ele.date}</p>
                </span>
              </li>;
            })
          }
        </div>
      </div>
    );
  }
}

export default RecommendedPost;

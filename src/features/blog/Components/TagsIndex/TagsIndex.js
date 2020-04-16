import React, { Component } from 'react';

export class TagsIndex extends Component {
  static propTypes = {};

  render() {
    const { international, posts } = this.props.blog;
    let tags = [];
    posts.forEach((ele) =>
      tags = tags.concat(ele.tag),
    );
    tags = Array.from(new Set(tags));
    const { queryPostsByTag } = this.props.actions;
    return (
      <div className="blog-tags-index">
        <h3>
          <li>
            <i className="fa fa-bars"/>
          </li>
          标签
        </h3>
        <div className="blog-tags-index-lists">
          {
            tags.map((ele, index) => {
              const name = international[ele] ? international[ele] : ele;
              return <div key={index} className="blog-tags-index-div">
                <li onClick={() => queryPostsByTag(ele)} className="blog-tags-index-tag">
                  {name}
                </li>
              </div>;
            })
          }
        </div>
      </div>
    );
  }
}

export default TagsIndex;

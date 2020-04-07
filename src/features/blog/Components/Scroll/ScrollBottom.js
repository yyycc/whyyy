import React, { Component } from 'react';

export default class ScrollBottom extends Component {
  static propTypes = {};

  scrollToBottom() {
    window.scrollTo({
      top: 99999,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className="blog-scroll-bottom">
        <a className="blog-scroll-bottom-a" onClick={this.scrollToBottom}>
          <i className="fa fa-angle-down"/>
        </a>
      </div>
    );
  }
}

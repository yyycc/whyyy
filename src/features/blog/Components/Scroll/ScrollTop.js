import React, { Component } from 'react';

export default class ScrollTop extends Component {
  static propTypes = {};

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className="blog-scroll-top">
        <a className="blog-scroll-top-a" onClick={this.scrollToTop}>
          <i className="fa fa-angle-up"/>
        </a>
      </div>
    );
  }
}

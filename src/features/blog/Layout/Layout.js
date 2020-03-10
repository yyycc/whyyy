import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class Layout extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="blog-layout">
        <Header />
        <div className="blog-layout-container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

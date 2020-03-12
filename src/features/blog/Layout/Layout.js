import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Tabs from '../Tabs/Tabs';
import CarouselIndex from '../Body/Index/CarouselIndex/CarouselIndex';

export default class Layout extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="blog-layout">
        <Header />
        <Tabs />
        <div className="blog-layout-container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

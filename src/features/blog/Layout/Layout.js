import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Tabs from '../Tabs/Tabs';
import Scroll from '../Scroll/Scroll';
import BreadCrumb from '../BreadCrumb/BreadCrumb';

export default class Layout extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="blog-layout">
        <Header/>
        <div className="blog-layout-fix">
          <Tabs/>
        </div>
        <div className="blog-layout-container">
          <BreadCrumb props={this.props}/>
          {this.props.children}
        </div>
        <Footer/>
        <Scroll/>
      </div>
    );
  }
}

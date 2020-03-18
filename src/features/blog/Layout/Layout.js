import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Tabs from '../Tabs/Tabs';
import Scroll from '../Scroll/Scroll';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import ChangeFont from '../Body/Index/ChangeFont';

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
          <ChangeFont props={this.props}/>
          <div className="blog-layout-container-post">
            {this.props.children}
          </div>
        </div>
        <Footer/>
        <Scroll/>
      </div>
    );
  }
}

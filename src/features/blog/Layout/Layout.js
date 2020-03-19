import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Tabs from '../Tabs/Tabs';
import Scroll from '../Scroll/Scroll';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import ChangeFont from '../Body/Index/ChangeFont';
import AnchorIndex from '../Body/Index/AnchorIndex';

export default class Layout extends Component {
  static propTypes = {};

  render() {
    const pathname = this.props.location.pathname.split('/');
    const display = pathname.length > 3;
    return (
      <div className="blog-layout">
        <Header/>
        <div className="blog-layout-fix">
          <Tabs/>
        </div>
        <div className="blog-layout-container">
          <BreadCrumb props={this.props}/>
          {display && <ChangeFont props={this.props}/>}
          {display && <div className="blog-layout-container-anchor">
            <AnchorIndex pathname={this.props.location.pathname}/>
          </div>}
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

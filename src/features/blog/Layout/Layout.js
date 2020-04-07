import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ScrollTop from '../Components/Scroll/ScrollTop';
import ScrollBottom from '../Components/Scroll/ScrollBottom';

export default class Layout extends Component {
  static propTypes = {};

  render() {
    /*const pathname = this.props.location.pathname.split('/');
    const display = pathname.length > 3;*/
    return (
      <div className="blog-layout">
        <Header/>
        <div className="blog-layout-container">
          {this.props.children}
        </div>
        {/*<Header/>
        <div className="blog-layout-fix">
          <Tabs/>
        </div>
        <div className="blog-layout-container">
          {display && <BreadCrumb props={this.props}/>}
          {display && <ChangeFont props={this.props}/>}
          {display && <div className="blog-layout-container-anchor">
            <AnchorIndex pathname={this.props.location.pathname} actions={this.props.actions}/>
          </div>}
          <div className="blog-layout-container-post">
            {this.props.children}
            {display && <PostFooter props={this.props}/>}
            {display && <MyDrawer/>}
          </div>
        </div>*/}
        <Footer/>
        <ScrollTop/>
        <ScrollBottom/>
      </div>
    );
  }
}

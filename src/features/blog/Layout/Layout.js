import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ScrollTop from '../Components/Scroll/ScrollTop';
import ScrollBottom from '../Components/Scroll/ScrollBottom';
import DrawerBar from '../Components/Drawer/DrawerBar';
import MyDrawer from '../Components/Drawer/MyDrawer';
import AnchorIndex from '../Components/AnchorIndex/AnchorIndex';
import BlogDetail from '../Components/Drawer/BlogDetail';

export class Layout extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const pathname = this.props.location.pathname;
    const { drawer } = this.props.blog;
    let id, title, display, anchor;
    display = drawer ? 'none' : 'block';
    if (pathname === '/blog') {
      id = 'home';
      title = '站内简介';
    } else if (pathname === '/blog/articles') {
      id = 'articles';
      title = '文章介绍';
    } else {
      id = 'article';
      title = '文章目录';
      anchor = true;
    }
    const from = 'right';
    return (
      <div className="blog-layout">
        <Header props={this.props}/>
        <div
          className={['blog-layout-container', drawer ? 'blog-layout-container-drawer-open-' + from : 'blog-layout-container-drawer-close'].join(' ')}>
          {this.props.children}
        </div>
        {/*<div className="blog-layout-fix">
          <Tabs/>
        </div>
        <div className="blog-layout-container">
          {display && <div className="blog-layout-container-anchor">
            <AnchorIndex pathname={this.props.location.pathname} actions={this.props.actions}/>
          </div>}
        </div>*/}
        <Footer/>
        <MyDrawer id={id} from='right' title={title} action={this.props.actions} blog={this.props.blog}>
          {(id === 'article' && anchor) && <AnchorIndex anchorTitle={this.props.blog}/>}
          {(id === 'home') && <BlogDetail/>}
        </MyDrawer>

        <div className="blog-layout-right-bottom-fix" style={{ display: `${display}` }}>
          <ScrollTop/>
          <DrawerBar action={this.props.actions}/>
          <ScrollBottom/>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    blog: state.blog,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);


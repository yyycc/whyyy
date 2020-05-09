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
import ArticlesBrief from '../Components/Drawer/ArticlesBrief';

/*
 * @name: layout
 * @description: 显示header、footer、抽屉、右下角图标等组件
 */

export class Layout extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    // 监听路由变化
    // 当路由变换时，把抽屉关掉(我也不想关的，但是我又不知道怎么重新渲染anchor。。。只能暂时先关一关了，呜)//TODO
    let { changeDrawer } = this.props.actions;
    this.props.history.listen((e) => {
      console.log(e);
      // 如果是文章内部定位，则不能关闭抽屉
      if (e.hash === '')
        changeDrawer(false);
    });
  }

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
    } else if (pathname.indexOf('/blog/articles') > -1) {
      id = 'article';
      title = '文章目录';
      anchor = true;
    } else {
      id = 'home';
      title = '站内简介';
    }
    const from = 'right';
    return (
      <div className="blog-layout">
        <Header actions={this.props.actions} history={this.props.history} mode={this.props.blog.mode}
                searchVisible={this.props.blog.searchVisible}/>
        <div
          className={['blog-layout-container', drawer ? 'blog-layout-container-drawer-open-' + from : 'blog-layout-container-drawer-close'].join(' ')}>
          {this.props.children}
        </div>
        {/*<div className="blog-layout-fix">
          <Tabs/>
        </div>*/}
        <Footer/>
        <MyDrawer id={id} from='right' title={title} action={this.props.actions} blog={this.props.blog}>
          {(id === 'article' && anchor) && <AnchorIndex/>}
          {id === 'home' && <BlogDetail/>}
          {id === 'articles' && <ArticlesBrief blog={this.props.blog}/>}
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


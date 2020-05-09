import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu, Dropdown, Modal } from 'antd';

/*
 * @name: 页眉
 * @description: 包括blog名，motto，全站搜索、首页、友链、关于
 */

export class Header extends Component {
  static propTypes = {};

  change(changeMode) {
    let list = document.getElementsByTagName('body')[0].classList;
    let nightMode = 'reader-night-mode';
    let orangeMode = 'reader-orange-mode';
    if (list.contains(nightMode)) {
      let length = list.length;
      for (let i = 0; i < length; i++) {
        list.remove(list[0]);
      }
      changeMode('day');
    } else {
      list.add(nightMode);
      list.add(orangeMode);
      changeMode('night');
    }
  }

  changeColor(color) {
    let list = document.getElementsByTagName('body')[0].classList;
    let mode = 'reader-' + color + '-mode';
    if (list.contains(mode)) {
      list.remove(mode);
    } else {
      list.add(mode);
    }
    let nightMode = 'reader-night-mode';
    let orangeMode = 'reader-orange-mode';
    if (list.contains(nightMode)) {
      list.remove(orangeMode);
      list.remove(nightMode);
      list.add(nightMode);
    }
  }

  home(history, fuzzyQueryPosts, value) {
    fuzzyQueryPosts(value);
    history.push('/blog');
  }

  handleOk = (changeModal, fuzzyQueryPosts) => {
    let value = document.getElementById('header-search-title').value;
    fuzzyQueryPosts(value);
    changeModal(false);
  };

  handleCancel = (changeModal) => {
    changeModal(false);
  };


  render() {
    const { Search } = Input;
    const { fuzzyQueryPosts, changeMode, changeModal } = this.props.actions;
    const mode = this.props.mode;
    const searchVisible = this.props.searchVisible;
    const menu = (
      <Menu>
        <Menu.Item>
          <a onClick={() => this.home(this.props.history, fuzzyQueryPosts, 'all')}>首页</a>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/articles">站内地图</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/about">关于</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/fLinks">友链</Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <header className="blog-header">
        <div className="blog-header-name"> whyyy his blog</div>

        {/*屏幕大于1200时显示*/}
        <div className="blog-header-home">
          <div className="blog-header-home-page"
               onClick={() => this.home(this.props.history, fuzzyQueryPosts, 'all')}>
            <i className="fa fa-home"> </i>
            <a>首页</a>
            {/*<Link to="/blog">首页</Link>*/}
          </div>
          <div className="blog-header-home-map">
            <i className="fa fa-map-marker"> </i>
            <Link to="/blog/articles">站内地图</Link>
          </div>
        </div>
        <div className="blog-header-search">
          <Search
            placeholder="搜索文章标题"
            onSearch={value => this.home(this.props.history, fuzzyQueryPosts, value)}
            style={{ width: 200 }}
          />
        </div>
        <div className="blog-header-menu">
          <div className="blog-header-menu-mode" style={{ display: 'none' }}
               onClick={() => this.changeColor('green')}>
            <i className="fa fa-code-fork"> </i>
          </div>
          <div title={mode === 'day' ? '夜间模式' : '日间模式'} className="blog-header-menu-mode"
               onClick={() => this.change(changeMode)}>
            <i className="fa fa-moon-o"> </i>
          </div>
          <div className="blog-header-menu-about">
            <i className="fa fa-anchor"> </i>
            <Link to="/blog/about">关于</Link>
          </div>
          <div className="blog-header-menu-links">
            <i className="fa fa-handshake-o"> </i>
            <Link to="/blog/fLinks">友链</Link>
          </div>
        </div>
        {/*屏幕小于1200时显示*/}
        <div className="blog-header-bars">
          <div title={mode === 'day' ? '夜间模式' : '日间模式'} className="blog-header-bars-mode"
               onClick={() => this.change(changeMode)}>
            <i className="fa fa-moon-o"> </i>
          </div>
          <div className="blog-header-bars-bar">
            {/*<i className="fa fa-bars"> </i>*/}
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <i className="fa fa-bars"> </i>
              </a>
            </Dropdown>
          </div>
          <div className="blog-header-bars-search">
            <i className="fa fa-search" onClick={() => changeModal(true)}> </i>
            <Modal
              title="搜索文章标题"
              visible={searchVisible}
              onOk={() => this.handleOk(changeModal, fuzzyQueryPosts)}
              onCancel={() => this.handleCancel(changeModal)}
            >
              <input id="header-search-title"/>
            </Modal>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

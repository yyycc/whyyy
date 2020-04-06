import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Link } from 'react-router-dom';

export class Header extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  changeMode() {
    let list = document.getElementsByTagName('body')[0].classList;
    let mode = 'reader-night-mode';
    if (list.contains('reader-night-mode')) {
      list.remove(mode);
    } else {
      list.add(mode);
    }
  }

  render() {
    return (
      <header className="blog-header">
        <div className="blog-header-name"> whyyy his blog</div>
        <div className="blog-header-motto"> |每天都努力地搬砖</div>
        <div className="blog-header-menu">

          <div className="blog-header-menu-mode" onClick={() => this.changeMode()}>
            <i className="fa fa-moon-o"> </i>
          </div>

          <div className="blog-header-menu-home">
            <i className="fa fa-home"> </i>
            <Link to="/blog">首页</Link>
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
      </header>
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
)(Header);

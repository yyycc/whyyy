import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';

export class MyDrawer extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { visible } = this.props.blog;
    const { onDrawerClose, showDrawer } = this.props.actions;
    return (
      <div className="blog-my-drawer">
        <a className="blog-my-drawer-a" onClick={showDrawer}>
          <i className="fa fa-bars"/>
          {/*<UpOutlined />*/}
          <Drawer
            title="文章目录"
            placement="right"
            closable={true}
            onClose={onDrawerClose}
            visible={visible}>
            <ol>
              <li><Link to='/blog/scroll/1'>react实现文字公告滚动轮播</Link></li>
              <li><Link to='/blog/css/2'>font-awesome</Link></li>
              <li><Link to='/blog/css/1'>如何让img居中显示</Link></li>
            </ol>
          </Drawer>
        </a>
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
)(MyDrawer);

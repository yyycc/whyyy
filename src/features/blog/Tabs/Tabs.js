import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Dropdown, Button, Menu } from 'antd';
import { Link } from 'react-router-dom';

export class Tabs extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { titles, tabFixed } = this.props.blog;
    const { queryPostsByTag } = this.props.actions;
    const menus = [(
      <Menu>
        <Menu.Item>
          <a onClick={() => queryPostsByTag('promote')}>
            <li>promote</li>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => queryPostsByTag('array')}>
            <li>array</li>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => queryPostsByTag('react')}>
            <li>react</li>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => queryPostsByTag('jQuery')}>
            <li>jQuery</li>
          </a>
        </Menu.Item>
      </Menu>
    ), (
      <Menu>
        <Menu.Item>
          <a onClick={() => queryPostsByTag('oracle')}>
            <li>oracle</li>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => queryPostsByTag('mysql')}>
            <li>mysql</li>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => queryPostsByTag('sqlServer')}>
            <li>sqlServer</li>
          </a>
        </Menu.Item>
      </Menu>
    ), (
      <Menu>
        <Menu.Item>
          <a onClick={() => queryPostsByTag('cxf')}>
            <li>cxf</li>
          </a>
        </Menu.Item>
      </Menu>
    ), (
      <Menu>
        <Menu.Item>
          <a onClick={() => queryPostsByTag('command')}>
            <li>command</li>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => queryPostsByTag('ssh')}>
            <li>ssh</li>
          </a>
        </Menu.Item>
      </Menu>
    ), (
      <Menu>
        <Menu.Item>
          <a onClick={() => queryPostsByTag('docker')}>
            <li>docker</li>
          </a>
        </Menu.Item>
      </Menu>
    )];

    return (
      <div className={['blog-tabs', tabFixed ? 'blog-tabs-fixes' : null].join(' ')}>
        <Button onClick={queryPostsByTag}>
          <Link to='/blog'>主页</Link>
        </Button>
        {titles.map((ele, index) => {
          const to = '/blog/' + ele.title;
          return <Dropdown key={index} overlay={menus[index]} placement="bottomCenter">
            <Button onClick={() => queryPostsByTag(ele.title)}>
              <Link to={to}>{ele.name}</Link>
            </Button>
          </Dropdown>;
        })}
        {/*搜索框*/}
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
)(Tabs);

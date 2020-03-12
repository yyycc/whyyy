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
    const { titles } = this.props.blog;
    const menus = [(
      <Menu>
        <Menu.Item>
          <Link to="/blog/js/javaScript">javaScript</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/js/vue">vue</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/js/react">react</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/js/jQuery">jQuery</Link>
        </Menu.Item>
      </Menu>
    ), (
      <Menu>
        <Menu.Item>
          <Link to="/blog/db/oracle">oracle</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/db/mysql">mysql</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/db/sqlServer">sqlServer</Link>
        </Menu.Item>
      </Menu>
    ), (
      <Menu>
        <Menu.Item>
          <Link to="/blog/ws/cxf">cxf</Link>
        </Menu.Item>
      </Menu>
    ), (
      <Menu>
        <Menu.Item>
          <Link to="/blog/linux/command">command</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/linux/docker">docker</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/linux/ssh">ssh</Link>
        </Menu.Item>
      </Menu>
    )];

    return (
      <div className="blog-tabs">
        <Button>
          <Link to='/blog/homePage'>主页</Link>
        </Button>
        {titles.map((ele, index) => {
          const to = '/blog/' + ele.title;
          return <Dropdown key={index} overlay={menus[index]} placement="bottomCenter">
            <Button>
              <Link to={to}>{ele.title}</Link>
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

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

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.props.actions.changeTabsMarginTop);
  }

  render() {
    const { titles, top } = this.props.blog;
    const menus = [(
      <Menu>
        <Menu.Item>
          <Link to="/blog/javaScript/promote">promote</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/javaScript/vue">vue</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/javaScript/react">react</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/javaScript/jQuery">jQuery</Link>
        </Menu.Item>
      </Menu>
    ), (
      <Menu>
        <Menu.Item>
          <Link to="/blog/database/oracle">oracle</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/database/mysql">mysql</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/database/sqlServer">sqlServer</Link>
        </Menu.Item>
      </Menu>
    ), (
      <Menu>
        <Menu.Item>
          <Link to="/blog/webService/cxf">cxf</Link>
        </Menu.Item>
      </Menu>
    ),(
      <Menu>
        <Menu.Item>
          <Link to="/blog/linux/command">command</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/linux/ssh">ssh</Link>
        </Menu.Item>
      </Menu>
    ), (
      <Menu>
        <Menu.Item>
          <Link to="/blog/server/docker">docker</Link>
        </Menu.Item>
      </Menu>
    )];

    return (
      <div className="blog-tabs" style={{ marginTop: `${top}px` }}>
        <Button>
          <Link to='/blog'>主页</Link>
        </Button>
        {titles.map((ele, index) => {
          const to = '/blog/' + ele.title;
          return <Dropdown key={index} overlay={menus[index]} placement="bottomCenter">
            <Button>
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

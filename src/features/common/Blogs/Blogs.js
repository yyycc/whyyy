import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import Axios from 'axios';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

export class Blogs extends Component {
  static propTypes = {
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    let init = this.props.actions.setUsers;
    let users = this.props.common.users;
    // let url = this.props.blog.queryAllUsers;
    let url = 'http://localhost:8880/blog/queryAll';
    if (users.length === 0) {
      Axios.get(url).then(
        function(res) {
          init(res.data.data);
        }, function(e) {
          init([]);
        });
    }
  }

  render() {
    const columns = [
      {
        title: '博文',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: '分类',
        dataIndex: 'tag',
        key: 'tag',
      },
      {
        title: '路径',
        dataIndex: 'route',
        key: 'route',
        render: val => {
          return <Link to={val}>{val}</Link>;
        },
      },
    ];
    const { users: dataSource } = this.props.common;
    return (
      <div className="common-blogs">
        <Table dataSource={dataSource} columns={columns}/>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    common: state.common,
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
)(Blogs);

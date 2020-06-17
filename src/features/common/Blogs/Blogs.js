import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyTable from '../Tables/MyTable';

export class Blogs extends Component {
  constructor(props) {
    super(props);
    let columns = [
      {
        title: '博文',
        dataIndex: 'title',
        key: 'title',
        width: '20%',
        editable: true,
        required: true,
      },
      {
        title: '日期',
        dataIndex: 'last_updated_date',
        key: 'last_updated_date',
        width: '10%',
        editable: true,
        required: true,
      },
      {
        title: '分类',
        dataIndex: 'tag',
        key: 'tag',
        width: '10%',
        editable: true,
        required: true,
      },
      {
        title: '简介',
        dataIndex: 'summary',
        key: 'summary',
        width: '30%',
        editable: true,
        required: true,
      },
      {
        title: '路径',
        dataIndex: 'route',
        key: 'route',
        editable: true,
        required: true,
        render: val => {
          if (!!val) {
            return <Link to={val}>{val}</Link>;
          }
        },
      },
    ];
    this.state = {
      columns: columns,
    };
  }

  render() {
    const { dataSource, columns } = this.state;
    const urls = {
      query: '/blog/queryAll',
      insert: '/blog/insertSelective',
      save: '/blog/batchUpdate',
      deleteByIds: '/blog/deleteByIds',
    };
    return (
      <div className="common-blogs">
        <MyTable dataSource={dataSource} columns={columns} urls={urls}/>
      </div>
    );
  }
}

export default Blogs;

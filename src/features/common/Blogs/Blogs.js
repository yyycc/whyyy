import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyTable from '../Tables/MyTable';

export class Blogs extends Component {
  constructor(props) {
    super(props);
    let columns = [
      {
        title: '博文',
        dataIndex: 'blog_title',
        key: 'blog_title',
        width: '20%',
        editable: true,
        required: true,
      },
      {
        title: '日期',
        dataIndex: 'blog_updated_date',
        key: 'blog_updated_date',
        width: '10%',
        editable: true,
        required: true,
      },
      {
        title: '分类',
        dataIndex: 'blog_tags',
        key: 'blog_tags',
        width: '10%',
        editable: true,
        required: true,
      },
      {
        title: '简介',
        dataIndex: 'blog_description',
        key: 'blog_description',
        width: '30%',
        editable: true,
        required: true,
      },
      {
        title: '路径',
        dataIndex: 'blog_route',
        key: 'blog_route',
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
      query: 'http://localhost:8880/blog/queryAll',
      insert: 'http://localhost:8880/blog/insertSelective',
      save: 'http://localhost:8880/blog/batchUpdate',
      deleteByIds: 'http://localhost:8880/blog/deleteByIds',
    };
    return (
      <div className="common-blogs">
        <MyTable dataSource={dataSource} columns={columns} urls={urls}/>
      </div>
    );
  }
}

export default Blogs;

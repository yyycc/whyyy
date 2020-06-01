import React, { Component } from 'react';
import MyTable from '../Tables/MyTable';

export class UsersManage extends Component {
  constructor(props) {
    super(props);
    let columns = [
      {
        title: '用户名',
        dataIndex: 'name',
        width: '20%',
        key: 'name',
        editable: true,
        required: true,
      },
      {
        title: '年龄',
        dataIndex: 'age',
        width: '10%',
        key: 'age',
        editable: true,
      },
      {
        title: '性别',
        dataIndex: 'gender',
        width: '10%',
        key: 'gender',
        render: val => {
          if (val === 'F') {
            return '女';
          } else if (val === 'M') {
            return '男';
          }
          return val;
        },
        editable: true,
      },
      {
        title: '角色',
        dataIndex: 'role',
        key: 'role',
        render: val => {
          if (val === 'VISITOR') {
            return '游客';
          } else if (val === 'ADMIN') {
            return '管理员';
          }
          return val;
        },
      },
      {
        title: '邮箱',
        dataIndex: 'mail_address',
        key: 'mail_address',
        width: '20%',
        editable: true,
      },
      {
        title: '电话',
        dataIndex: 'phone_number',
        width: '20%',
        key: 'phone_number',
        editable: true,
      },
    ];
    this.state = {
      columns: columns,
    };
  }

  render() {
    const { dataSource, columns } = this.state;
    const urls = {
      query: 'http://localhost:8880/users/queryAll',
      insert: 'http://localhost:8880/users/insertSelective',
      save: 'http://localhost:8880/users/batchUpdate',
      deleteByIds: 'http://localhost:8880/users/deleteByIds',
    };
    return (
      <div className="common-users-manage">
        <MyTable dataSource={dataSource} columns={columns} urls={urls}/>
      </div>
    );
  }
}

export default UsersManage;

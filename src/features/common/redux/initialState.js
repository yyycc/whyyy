// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.

const initialState = {
  users: [],

  user_columns: [
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
      dataIndex: 'phone',
      width: '20%',
      key: 'phone',
      editable: true,
    },

  ],
};

export default initialState;

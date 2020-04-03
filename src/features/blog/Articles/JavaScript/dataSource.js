const columns = [
  {
    title: '方法',
    dataIndex: 'function',
    key: 'function',
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: '参数1',
    dataIndex: 'arg1',
    key: 'arg1',
  },
  {
    title: '参数2',
    dataIndex: 'arg2',
    key: 'arg2',
  },
  {
    title: '返回',
    dataIndex: 'return',
    key: 'return',
  },
];

const data = [
  {
    key: 1,
    function: '不改变原数组',
    description: '',
    arg1: '',
    arg2: '',
    return: '',
    children: [
      {
        key: 11,
        function: 'join()',
        description: '合并',
        arg1: '分隔符',
        arg2: '-',
        return: '字符串',
      },
      {
        key: 12,
        function: 'concat()',
        description: '提取',
        arg1: '多个各种类型值',
        arg2: '-',
        return: '合并后的新数组',
      },
      {
        key: 13,
        function: 'slice()',
        description: '遍历',
        arg1: 'start(从0开始)',
        arg2: 'end(不包含,没有就返回到最后一个成员)',
        return: 'start，end之间的数据组成的新数组',
      },
      {
        key: 14,
        function: 'map()',
        description: '转字符串',
        arg1: 'function (elem, index, arr) {}',
        arg2: '绑定参数函数内部的this变量',
        return: 'func处理后的新数组',
      },
    ],
  },
  {
    key: 2,
    function: '改变原数组',
    description: '',
    arg1: '',
    arg2: '',
    return: '',
    children: [
      {
        key: 21,
        function: 'push()',
        description: '添加',
        arg1: '多个各种类型值',
        arg2: '-',
        return: '添加元素后数组的长度',
      },
    ],
  },
];

const dataSource = {
  columns,
  data,
};

export default dataSource;

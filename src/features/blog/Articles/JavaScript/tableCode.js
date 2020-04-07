const array = [
  ['不改变原数组'],
  ['join', '转字符串', '分隔符', '--', '字符串'],
  ['concat()<sup>[1]</sup>', '合并', '多个各种类型值', '--', '合并后的新数组', ''],
  ['slice()<sup>[2]</sup>', '提取', 'start(从0开始)', 'end(不包含,没有就返回到最后一个成员)', 'start，end之间的数据组成的新数组', ''],
  ['map()', '遍历', 'function (elem, index, arr) {}', '绑定参数函数内部的this变量', 'func处理后的新数组', ''],
  ['filter()', '过滤', 'function (elem, index, arr) {}', '绑定参数函数内部的this变量', '结果为true的数据组成的新数组', ''],
  ['reduce()', '累计', 'function (a, b, index, arr) {}', '起始值', '起始值&数组成员累计值'],
  ['some()', '一真', 'function (elem, index, arr) {}', '起始值', '一个true就返回true'],
  ['every()', '全真', 'function (elem, index, arr) {}', '起始值', '全是true才返回true'],
  ['改变原数组'],
  ['push()<sup>[3.1]</sup>', '添加', '多个各种类型值', '--', '添加元素后数组的长度'],
  ['pop()<sup>[4.1]</sup>', '删除', '--', '--', '删除的元素'],
  ['shift()<sup>[4.2]</sup>', '删除', '--', '--', '删除的元素'],
  ['unshift()<sup>[3.2]</sup>', '添加', '多个各种类型值', '--', '添加元素后数组的长度'],
  ['reverse()', '倒置', '--', '--', '倒置后的数组'],
  ['splice()', '删除&添加', 'start(从0开始)', '删除个数(后面的参数都是添加的元素)', '删除的元素组成的数组'],
  ['sort()<sup>[5]</sup>', '排序', 'function (a, b) {}', '--', '排序后的数组'],
  ['forEach<sup>[6]</sup>', '遍历', 'function (elem, index, arr) {}', '绑定参数函数内部的this变量'],
  ['indexOf()', '位置', '元素', '--', '元素第一次出现的位置/-1'],
];

const arrayName = '表1. array的实例方法';

const arrayTitle = ['方法', '描述', '参数1', '参数2', '返回'];

const tableCode = {
  array,
  arrayName,
  arrayTitle,
};

export default tableCode;

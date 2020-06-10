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
  ['indexOf()', '位置', '元素', '--', '元素第一次出现的位置/-1'],
  ['改变原数组'],
  ['push()<sup>[3.1]</sup>', '添加', '多个各种类型值', '--', '添加元素后数组的长度'],
  ['pop()<sup>[4.1]</sup>', '删除', '--', '--', '删除的元素'],
  ['shift()<sup>[4.2]</sup>', '删除', '--', '--', '删除的元素'],
  ['unshift()<sup>[3.2]</sup>', '添加', '多个各种类型值', '--', '添加元素后数组的长度'],
  ['reverse()', '倒置', '--', '--', '倒置后的数组'],
  ['splice()', '删除&添加', 'start(从0开始)', '删除个数(后面的参数都是添加的元素)', '删除的元素组成的数组'],
  ['sort()<sup>[5]</sup>', '排序', 'function (a, b) {}', '--', '排序后的数组'],
  ['forEach<sup>[6]</sup>', '遍历', 'function (elem, index, arr) {}', '绑定参数函数内部的this变量'],
  ['更新于2020-04-26,es6新增的实例方法'],
  ['find', '定位(第一个)', 'function(ele, index, arr) {}', '绑定参数函数内部的this变量', '返回第一个找到的成员值/undefined'],
  ['findIndex', '定位(第一个)', 'function(ele, index, arr) {}', '绑定参数函数内部的this变量', '返回第一个找到的成员的位置/undefined'],
];

const arrayName = '表1. array的实例方法';

const arrayTitle = ['方法', '描述', '参数1', '参数2', '返回'];

const number = [
  ['Math.trunc()', '去除一个数的小数部分，返回整数部分', ''],
  ['Math.sign()', '判断一个数到底是正数、负数、还是零', '正数(+1)/负数(-1)/0(0)/-0(-0)/其他(NaN)'],
  ['Math.cbrt()', '立方根'],
  ['Math.clz32()', '转成32位无符号数，然后返回这个 32 位值里面有多少个前导 0'],
  ['Math.imul()', '返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数'],
  ['', ''],
];

const numberName = '表1. Math的实例方法';

const numberTitle = ['方法', '作用', '说明'];

const tableCode = {
  array,
  arrayName,
  arrayTitle,
  number,
  numberName,
  numberTitle,
};

export default tableCode;

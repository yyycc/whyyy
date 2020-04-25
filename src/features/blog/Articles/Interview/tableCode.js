const request = [
  ['用途', '请求数据', '提交数据'],
  ['传参方式', '拼接在url上，用&分割', '将参数封装在请求体中'],
  ['数据长度限制', '受url长度限制，url长度不超过2048个字符', '没有限制'],
  ['缓存', '可以被缓存', '不可以被缓存'],
  ['编码', '只支持url编码', '支持多种编码'],
  ['历史记录', '回留在历史记录中', '不会留在历史记录中'],
  ['字符类型', '只支持ASCII字符', '支持多种字符'],
];

const requestName = '表1. get和post的区别';

const requestTitle = ['', 'get', 'post'];

const tableCode = {
  request,
  requestName,
  requestTitle,
};

export default tableCode;

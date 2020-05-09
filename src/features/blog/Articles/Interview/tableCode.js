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

const html = [
  ['<article>', '定义文档内的文章。'],
  ['<aside>', '定义页面内容之外的内容。'],
  ['<bdi>', '定义与其他文本不同的文本方向。'],
  ['<details>', '定义用户可查看或隐藏的额外细节。'],
  ['<dialog>', '定义对话框或窗口。'],
  ['<figcaption>', '定义 <figure> 元素的标题。'],
  ['<figure>', '定义自包含内容，比如图示、图表、照片、代码清单等等。'],
  ['<footer>', '定义文档或节的页脚。'],
  ['<header>', '定义文档或节的页眉。'],
  ['<main>', '定义文档的主内容。'],
  ['<mark>', '定义重要或强调的内容。'],
  ['<menuitem>', '定义用户能够从弹出菜单调用的命令/菜单项目。'],
  ['<meter>', '定义已知范围（尺度）内的标量测量。'],
  ['<nav>', '定义文档内的导航链接。'],
  ['<progress>', '定义任务进度。'],
  ['<rp>', '定义在不支持 ruby 注释的浏览器中显示什么。'],
  ['<rt>', '定义关于字符的解释/发音（用于东亚字体）。'],
  ['<ruby>', '定义 ruby 注释（用于东亚字体）。'],
  ['<section>', '定义文档中的节。'],
  ['<summary>', '定义 <details> 元素的可见标题。'],
  ['<time>', '定义日期/时间。'],
  ['<wbr>', '定义可能的折行（line-break）。'],
];

const htmlName = 'HTML5新元素';

const htmlTitle = ['标签', '描述'];

const tableCode = {
  request,
  requestName,
  requestTitle,
  html,
  htmlName,
  htmlTitle,
};

export default tableCode;

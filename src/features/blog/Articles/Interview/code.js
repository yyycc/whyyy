const border = 'width: 0;\n' +
  'height: 0;\n' +
  'border-width: 50px;\n' +
  'border-style: solid;\n' +
  'border-color: transparent #0099CC transparent transparent;\n' +
  'transform: rotate(90deg); /*顺时针旋转90°*/';

const square = 'width: 0;\n' +
  'height: 0;\n' +
  'border-bottom: 50px solid red;\n' +
  'border-left: 50px solid transparent;\n' +
  'border-right: 50px solid transparent;';

const content = 'box-sizing: content-box //是W3C盒子模型';

const borderBox = 'box-sizing: border-box //是IE盒子模型';

const codes = [
  'clear: both',
  'text-align: center',
  'margin: 0 auto',
  'width: calc(100% - 80px);',
  ' Array.from(new Set(a))',
  '[...new Set(a)]',
  'Origin: http://localhost:6075',
];

const flex = 'display: flex; \n' +
  'justify-content: center;';

const flexItem = 'display: flex;\n' +
  'align-items: center;';

const left = 'position:absolute;\n' +
  'left:50%;\n' +
  'transform:translateX(-50%);';

const top = 'position：absolute;\n' +
  'top:50%;\n' +
  'transform:translateY(-50%);';

const after = '.css-float-div:after {\n' +
  '    clear: both;\n' +
  '    display: block;\n' +
  '    content: \'\';\n' +
  '  }';

const bfc = '.css-float-div{\n' +
  '    overflow: hidden;\n' +
  '}';

const support = '@supports (display: flex) {\n' +
  '  div {\n' +
  '    display: flex;\n' +
  '  }\n' +
  '}';

const supportNot = '@supports not (display: flex) {\n' +
  '  div {\n' +
  '    float: right;\n' +
  '  }\n' +
  '}';

const media = 'body {\n' +
  '    background-color:lightgreen;\n' +
  '}\n' +
  '\n' +
  '@media screen and (max-width: 1000px) {\n' +
  '    body {\n' +
  '        background-color:lightblue;\n' +
  '    }\n' +
  '}';

const access = 'response.setHeader("Access-Control-Allow-Origin", "*");\n' +
  'response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");\n' +
  'response.setHeader("Access-Control-Max-Age", "3600");\n' +
  'response.setHeader("Access-Control-Allow-Headers", "x-requested-with, Content-Type, token, Accept");\n' +
  'response.setHeader("Access-Control-Allow-Credentials", "true");';

const export_1 = 'export var firstName = \'Michael\';\n' +
  'export var lastName = \'Jackson\';\n' +
  'export var year = 1958;';

const export_2 = 'var firstName = \'Michael\';\n' +
  'var lastName = \'Jackson\';\n' +
  'var year = 1958;\n' +
  '\n' +
  'export { firstName, lastName, year };';

const export_3 = 'var firstName = \'Michael\';\n' +
  'var lastName = \'Jackson\';\n' +
  'var year = 1958;\n' +
  '\n' +
  'export { firstName as a, lastName as b, year as c };';

const import_as_whole = 'import * as circle from \'./circle\';';

const exportDefault = '// export\n' +
  'export function test() { // 输出\n' +
  '  // ...\n' +
  '};\n' +
  'import {test} from \'test\'; // 输入\n' +
  '\n' +
  '// export default\n' +
  'export default function test() { // 输出\n' +
  '  // ...\n' +
  '}\n' +
  'import test from \'test\'; // 输入\n';

const inline = 'display: inline';
const block = 'display: block';

const func = '(function (){alert("我是匿名函数")}()}())\n' +
  '\n' +
  '(function (){alert("我是匿名函数")}()})()';

const funcs = '(function () {alert("我是匿名函数")}())   //用括号把整个表达式包起来\n' +
  '(function () {alert("我是匿名函数")})()  //用括号把函数包起来\n' +
  '!function () {alert("我是匿名函数")}()  //求反，我们不在意值是多少，只想通过语法检查\n' +
  '+function () {alert("我是匿名函数")}() \n' +
  '-function () {alert("我是匿名函数")}() \n' +
  '~function () {alert("我是匿名函数")}() \n' +
  'void function () {alert("我是匿名函数")}() \n' +
  'new function () {alert("我是匿名函数")}() ';

const head = '<head>\n' +
  '   <meta charSet="UTF-8">\n' +
  '   <title></title>\n' +
  '   <style></style>\n' +
  '   <link rel="stylesheet" href="">\n' +
  '   <script></script>\n' +
  '</head>';

const code = {
  border,
  square,
  content,
  borderBox,
  codes,
  after,
  bfc,
  flex,
  left,
  flexItem,
  top,
  support,
  supportNot,
  media,
  access,
  exportDefault,
  export_1,
  export_2,
  export_3,
  import_as_whole,
  inline,
  block,
  func,
  funcs,
  head,
};

export default code;

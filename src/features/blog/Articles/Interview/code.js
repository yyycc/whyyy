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

const exportDefault = '// export default\n' +
  'export default function test() { // 输出\n' +
  '  // ...\n' +
  '}\n' +
  'import test from \'test\'; // 输入\n' +
  ' \n' +
  '// export\n' +
  'export function test() { // 输出\n' +
  '  // ...\n' +
  '};\n' +
  'import {test} from \'test\'; // 输入';

const inline = 'display: inline';
const block = 'display: block';

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
  inline,
  block,
};

export default code;

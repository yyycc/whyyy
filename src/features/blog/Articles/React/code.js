const codes = [
  'npm init',
  'npm run build',
  'node scripts/build.js**',
  'npm start',
  'npm insatll -g concurrently',
  'renderApp(<Root store={store} routeConfig={routeConfig} />);',
];

const json = '{\n' +
  '  "name": "cyy",\n' +
  '  "version": "1.0.0",\n' +
  '  "description": "",\n' +
  '  "main": "index.js",\n' +
  '  "scripts": {\n' +
  '  "test": "echo \\"Error: no test specified\\" && exit 1"\n' +
  '},\n' +
  '  "author": "",\n' +
  '  "license": "ISC"\n' +
  '}';

const dependencies = '"dependencies": {\n' +
  '  "antd": "^3.26.0",\n' +
  '  "autoprefixer": "7.1.6",\n' +
  '  "axios": "^0.18.0",\n' +
  '  "babel-core": "6.26.0",\n' +
  '  "babel-eslint": "7.2.3",\n' +
  '  "babel-jest": "20.0.3",\n' +
  '  "babel-loader": "7.1.2",\n' +
  '  ...\n' +
  '},\n' +
  '"devDependencies": {\n' +
  '  "babel-plugin-import": "^1.13.0"\n' +
  '}';

const scripts = '"scripts": {\n' +
  '  "mock": "json-server --watch --port 6077 data/db.json",\n' +
  '  "start": "concurrently \\"node scripts/start.js\\" \\"json-server --watch --port 6077 data/db.json\\"",\n' +
  '  "build": "node scripts/build.js",\n' +
  '  "test": "node scripts/test.js --env=jsdom"\n' +
  '},';

const json_server = '"server":"react-scripts start",\n' +
  '"json_server":"json-server mock/db.json --port 3003",\n' +
  '"start": "concurrently \\"npm run json_server\\" \\"npm run server\\" ",';

const rekit = '"rekit": {\n' +
  '  "devPort": 6075,\n' +
  '  "studioPort": 6076,\n' +
  '  "plugins": [],\n' +
  '  "css": "less"\n' +
  '},';

const json_route = 'const routes = [{\n' +
  '  path: \'/\',\n' +
  '  component: App,\n' +
  '  childRoutes: [\n' +
  '  ...childRoutes,\n' +
  '{ path: \'*\', name: \'Page not found\', component: PageNotFound },\n' +
  '  ].filter(r => r.component || (r.childRoutes && r.childRoutes.length > 0)),\n' +
  '}];';

const less = '// index is the entry for all styles.\n' +
  '@import \'./global\';\n' +
  '@import \'../features/home/style\';\n' +
  '@import \'../features/common/style\';\n' +
  '@import \'../features/examples/style\';\n' +
  '@import \'../features/blog/style\';\n' +
  '@import \'../features/log/style\';';

const bindActionCreator = 'function bindActionCreator(actionCreator, dispatch) {\n' +
  '  return function() {\n' +
  '    return dispatch(actionCreator.apply(this, arguments))\n' +
  '  }\n' +
  '}';

const bindActionCreators = 'export default function bindActionCreators(actionCreators, dispatch) {\n' +
  '  if (typeof actionCreators === \'function\') {\n' +
  '    return bindActionCreator(actionCreators, dispatch)\n' +
  '  }\n' +
  '\n' +
  '  if (typeof actionCreators !== \'object\' || actionCreators === null) {\n' +
  '    throw new Error(\n' +
  '      `bindActionCreators expected an object or a function, instead received ${\n' +
  '        actionCreators === null ? \'null\' : typeof actionCreators\n' +
  '      }. ` +\n' +
  '        `Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`\n' +
  '    )\n' +
  '  }\n' +
  '\n' +
  '  const keys = Object.keys(actionCreators)\n' +
  '  const boundActionCreators = {}\n' +
  '  for (let i = 0; i < keys.length; i++) {\n' +
  '    const key = keys[i]\n' +
  '    const actionCreator = actionCreators[key]\n' +
  '    if (typeof actionCreator === \'function\') {\n' +
  '      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)\n' +
  '    }\n' +
  '  }\n' +
  '  return boundActionCreators\n' +
  '}';

const connect = 'import React from \'react\';\n' +
  'import {createStore, bindActionCreators} from \'redux\';\n' +
  'import {Provider, connect} from \'react-redux\';\n' +
  '\n' +
  'const initialState = {count: 0};\n' +
  '\n' +
  'const counter = (state = initialState, action) => {\n' +
  '    switch (action.type) {\n' +
  '        case \'PLUS_ONE\':\n' +
  '            return {count: state.count + 1};\n' +
  '        case \'MINUS_ONE\':\n' +
  '            return {count: state.count - 1};\n' +
  '        default:\n' +
  '            break;\n' +
  '    }\n' +
  '    return state;\n' +
  '};\n' +
  '\n' +
  'const store = createStore(counter);\n' +
  '\n' +
  'function minusOne() {\n' +
  '    return {type: \'MINUS_ONE\'};\n' +
  '}\n' +
  '\n' +
  'function plusOne() {\n' +
  '    return {type: \'PLUS_ONE\'};\n' +
  '}\n' +
  '\n' +
  'export class CounterRedux extends React.Component {\n' +
  '    render() {\n' +
  '        const { count, minusOne, plusOne } = this.props;\n' +
  '        return (\n' +
  '            <div>\n' +
  '                <button onClick={minusOne}>-</button>\n' +
  '                <p style={{display: \'inline-block\', margin: \'0px 10px\'}}>{count}</p>\n' +
  '                <button onClick={plusOne}>+</button>\n' +
  '            </div>\n' +
  '        );\n' +
  '    }\n' +
  '}\n' +
  '\n' +
  'function mapStateToProps(state) {\n' +
  '    return {\n' +
  '        count: state.count\n' +
  '    }\n' +
  '}\n' +
  '\n' +
  'function mapDispatchToProps(dispatch) {\n' +
  '    return bindActionCreators({plusOne, minusOne}, dispatch);\n' +
  '}\n' +
  '\n' +
  'const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(CounterRedux);\n' +
  '\n' +
  'export default class CounterSample extends React.Component{\n' +
  '    render() {\n' +
  '        return (\n' +
  '            <Provider store={store}>\n' +
  '                <ConnectedCounter />\n' +
  '            </Provider>\n' +
  '        );\n' +
  '    }\n' +
  '\n' +
  '}\n';

/*------------propTypes---------------*/

const titles = ['1. react prop-types的使用讲解', '2. react中使用prop-types检测props数据类型'];
const props = 'static propTypes = {\n' +
  '    blog: PropTypes.object.isRequired,\n' +
  '    actions: PropTypes.object.isRequired,\n' +
  '};';
const staticProp = 'static propTypes = {\n' +
  '    blog: PropTypes.object.isRequired,\n' +
  '    actions: PropTypes.object.isRequired,\n' +
  '};';
const old = '// 老写法\n' +
  'class Foo {\n' +
  '  // ...\n' +
  '}\n' +
  'Foo.prop = 1;';
const types = 'static propTypes = {\n' +
  '     optionalArray: PropTypes.array,//检测数组类型\n' +
  '     optionalBool: PropTypes.bool,//检测布尔类型\n' +
  '     optionalFunc: PropTypes.func,//检测函数（Function类型）\n' +
  '     optionalNumber: PropTypes.number,//检测数字\n' +
  '     optionalObject: PropTypes.object,//检测对象\n' +
  '     optionalString: PropTypes.string,//检测字符串\n' +
  '     optionalSymbol: PropTypes.symbol,//ES6新增的symbol类型\n' +
  '}';
const oneType = 'static propTypes = {\n ' +
  ' title: PropTypes.oneOfType([PropTypes.string, PropTypes.number])\n' +
  '}';

const arrayOf = 'static propTypes = {\n' +
  '     array:PropTypes.arrayOf(PropTypes.number)\n' +
  '}\n';

const shape = 'static propTypes = {\n' +
  '   object:\n' +
  '       PropTypes.shape({\n' +
  '       name:PropTypes.string,\n' +
  '       age:PropTypes.number\n' +
  '       })\n' +
  '}';
const require = 'static propTypes = {\n' +
  '    number:PropTypes.number.isRequired\n' +
  '}';

const fun = 'static propTypes = {\n' +
  '     email:function(props,propName,componentName){\n' +
  '            if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(props[propName])){\n' +
  '                  return new Error(\'组件\' + componentName+ \'里的属性\' + propName + \'不符合邮箱的格式\');\n' +
  '                         }\n' +
  '                }\n' +
  '}';
const propTypes = { titles, props, staticProp, old, types, oneType, arrayOf, shape, require, fun };
/*------------propTypes---------------*/

const code = Object.assign({
  codes,
  json,
  dependencies,
  scripts,
  json_server,
  rekit,
  json_route,
  less,
  bindActionCreator, bindActionCreators,
  connect,
}, propTypes);

export default code;

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
const code = {
  codes,
  json,
  dependencies,
  scripts,
  json_server,
  rekit,
  json_route,
  less,
};

export default code;

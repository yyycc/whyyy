const div = '<div style="text-align: center;">\n' +
  '  <img/>\n' +
  '</div>';

const p = '<div>\n' +
  '  <p styl="text-align:center"><img/></p>\n' +
  '</div>';

const flexCenter = '<div style="display: flex;justify-content: center">\n' +
  ' <img/>\n' +
  '</div>';

const flexColumn = '<div style="display: flex;flex-direction: column;align-items: center">\n' +
  ' <img/>\n' +
  '</div>';

const codes = [
  'content: "\\f2b9"',
  'npm install --save font-awesome',
  '@import \'～/node_modules/font-awesome/css/font-awesome.min.css\';',

];

const link = '<head>\n' +
  '  <link rel="stylesheet" type="text/css" href="～/font-awesome-4.7.0/css/font-awesome.min.css">\n' +
  '  <style>\n' +
  '    .fa:before{\n' +
  '      content: "\\f2b9";\n' +
  '    }\n' +
  '  </style>\n' +
  '</head>\n' +
  '...\n' +
  '<li>\n' +
  '  <i class="fa"></i>\n' +
  '</li>';

const i = '<li>\n' +
  '  <i>&#xf2b9;</i>\n' +
  '</li>';

const code = {
  div,
  p,
  flexCenter,
  flexColumn,
  codes,
  link,
  i,
};

export default code;

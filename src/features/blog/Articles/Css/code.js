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
  'window.addEventListener(\'scroll\', this.scroll);',
  'margin: auto',
  'height: 0.5px;',
  'background-image: linear-gradient(0deg, transparent 50%, #000000 50%);',
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

const fixDiv = '<div className="blog-home-page">\n' +
  '  <div className="blog-home-page-top">\n' +
  '  </div>\n' +
  '  <div className="blog-home-page-bottom">\n' +
  '    <div className="blog-home-page-left">\n' +
  '      ...\n' +
  '    </div>\n' +
  '    <div className="blog-home-page-right">\n' +
  '      <div>...</div>\n' +
  '      <div>...</div>\n' +
  '      <div className="blog-home-page-right-fix">\n' +
  '        <div>...</div>\n' +
  '      </div>\n' +
  '    </div>\n' +
  '  </div>\n' +
  '</div>';

const scroll = 'scroll() {\n' +
  '  let a = document.getElementsByClassName(\'blog-home-page-right-fix\')[0];\n' +
  '  if (!!a) {\n' +
  '    if (window.scrollY > 440) {\n' +
  '      a.style.position = \'fixed\';\n' +
  '      a.style.top = \'34px\';\n' +
  '      a.style.width = \'inherit\';\n' +
  '    } else {\n' +
  '      a.style.position = \'static\';\n' +
  '    }\n' +
  '  }\n' +
  '}';

const scaleYCss = '.css-css-c-line{\n' +
  '  position: relative;\n' +
  '  top: 10px;\n' +
  '  width: 200px;\n' +
  '  height: 1px;\n' +
  '  background-color: #000000;\n' +
  '  transform: scaleY(.5);\n' +
  '}';

const scaleYHtml = '<div style="display: flex">\n' +
  '  <p>0.5px的线</p>\n' +
  '  <div className="css-css-c-line"/>\n' +
  '</div>';

const code = {
  div,
  p,
  flexCenter,
  flexColumn,
  codes,
  link,
  i,
  fixDiv,
  scroll,
  scaleYCss,
  scaleYHtml,
};

export default code;

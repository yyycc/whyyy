// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.
const initialState = {
  example: {
    center: {
      title: 'img居中显示实例页面',
      css: 'img {\n' +
        '    height: 150px;\n' +
        '    width: auto;\n' +
        '  }',
      html: '<div style="display: flex;flex-direction: column;align-items: center">\n' +
        '    <img src=\'img.png\'/>\n' +
        '</div>\n' +
        '<div>\n' +
        '    <p style="text-align: center;">\n' +
        '        <img src=\'img.png\'/>\n' +
        '    </p>\n' +
        '</div>\n' +
        '<div style="text-align: center;">\n' +
        '    <img src=\'img.png\'/>\n' +
        '</div>',
    },
    half: {
      title: '0.5px的线实例页面',
      css: '.css-css-c-line,\n' +
        '.css-css-c-line-one,\n' +
        '.css-css-c-line-two {\n' +
        '  position: relative;\n' +
        '  top: 10px;\n' +
        '  width: 200px;\n' +
        '  height: 1px;\n' +
        '}\n' +
        '.css-css-c-line {\n' +
        '  background-color: #000000;\n' +
        '  transform: scaleY(.5);\n' +
        '}\n' +
        '.css-css-c-line-one {\n' +
        '  background-color: #000000;\n' +
        '}\n' +
        '.css-css-c-line-two {\n' +
        '  background-color: #c0c0c0;\n' +
        '}' +
        '\n' +
        '.css-css-c-line-three {\n' +
        '  position: relative;\n' +
        '  top: 10px;\n' +
        '  width: 200px;\n' +
        '  height: 10px;\n' +
        '  background: linear-gradient(0deg, transparent 50%, red 50%);\n' +
        '}',
      html: '<div style="display: flex">\n' +
        '  <p>0.5px的线</p>\n' +
        '  <div className="css-css-c-line"/>\n' +
        '</div>\n' +
        '\n' +
        '<div style="display: flex">\n' +
        '  <p>1px的线</p>\n' +
        '  <div className="css-css-c-line-one"/>\n' +
        '</div>\n' +
        '\n' +
        '<div style="display: flex">\n' +
        '  <p>1px，颜色浅一些的线</p>\n' +
        '  <div className="css-css-c-line-two"/>\n' +
        '</div>' +
        '\n' +
        '<div style={{ display: \'flex\' }}>\n' +
        '  <p>1px，渐变的线</p>\n' +
        '  <div className="css-css-c-line-three"/>\n' +
        '</div>',
    },
    triangle: {
      title: '三角形实例页面',
      css: '.css-triangle-a {\n' +
        '  width: 0;\n' +
        '  height: 0;\n' +
        '  border-width: 50px;\n' +
        '  border-style: solid;\n' +
        '  border-color: transparent #0099CC transparent transparent;\n' +
        '  transform: rotate(90deg); /*顺时针旋转90°*/\n' +
        '}\n' +
        '.css-triangle-b {\n' +
        '  width: 0;\n' +
        '  height: 0;\n' +
        '  border-bottom: 50px solid red;\n' +
        '  border-left: 50px solid transparent;\n' +
        '  border-right: 50px solid transparent;\n' +
        '}\n' +
        '.css-square-a {\n' +
        '  width: 0;\n' +
        '  height: 0;\n' +
        '  border-width: 50px;\n' +
        '  border-style: solid;\n' +
        '  border-color: red yellow green blue;\n' +
        '}\n' +
        '.css-square-b {\n' +
        '  width: 0;\n' +
        '  height: 0;\n' +
        '  border-bottom: 50px solid red;\n' +
        '  border-left: 50px solid green;\n' +
        '  border-right: 50px solid green;\n' +
        '}',
      html: '<div className="css-triangle">\n' +
        '  <div className="css-triangle-one">\n' +
        '    <div className="css-triangle-column">\n' +
        '      <p>这是一个三角形哦</p>\n' +
        '      <div className="css-triangle-a"/>\n' +
        '    </div>\n' +
        '    <div className="css-triangle-column-two">\n' +
        '      <p>这是一个正方形哦</p>\n' +
        '      <div className="css-square-a"/>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '  <div className="css-triangle-two">\n' +
        '    <div className="css-triangle-column">\n' +
        '      <p>这也是一个三角形哦</p>\n' +
        '      <div className="css-triangle-b"/>\n' +
        '    </div>\n' +
        '    <div className="css-triangle-column-two">\n' +
        '      <p>这是一个长方形哦</p>\n' +
        '      <div className="css-square-b"/>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>',
    },
    float: {
      title: '清除浮动实例页面',
      css: '.css-float-two-a,\n' +
        '.css-float-one-a {\n' +
        '  height: 100px;\n' +
        '  width: 100px;\n' +
        '  background-color: red;\n' +
        '}\n' +
        '.css-float-two-b,\n' +
        '.css-float-one-b {\n' +
        '  height: 50px;\n' +
        '  width: 50px;\n' +
        '  background-color: blue;\n' +
        '}\n' +
        '.css-float-one-c,\n' +
        '.css-float-two-c {\n' +
        '  height: 50px;\n' +
        '  width: 200px;\n' +
        '  background-color: green;\n' +
        '}\n' +
        '.css-float-two-a,\n' +
        '.css-float-two-b {\n' +
        '  float: left;\n' +
        '}\n' +
        '.css-float-div:after {\n' +
        '  clear: both;\n' +
        '  display: block;\n' +
        '  content: \'\';\n' +
        '}\n' +
        '.css-float-div {\n' +
        '  *zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/\n' +
        '}',
      html: '<div className="css-float">\n' +
        '  <p>不浮动</p>\n' +
        '  <div style={{ border: \'1px solid black\' }}>\n' +
        '    <div className="css-float-one-a"/>\n' +
        '    <div className="css-float-one-b"/>\n' +
        '  </div>\n' +
        '  <div className="css-float-one-c"/>\n' +
        '  <br/>\n' +
        '  <p>浮动</p>\n' +
        '  <div style={{ border: \'1px solid black\' }}>\n' +
        '    <div className="css-float-two-a"/>\n' +
        '    <div className="css-float-two-b"/>\n' +
        '  </div>\n' +
        '  <div className="css-float-two-c"/>\n' +
        '  <br/><br/><br/><br/>\n' +
        '  <p>clear: both 清除浮动</p>\n' +
        '  <div style={{ border: \'1px solid black\' }}>\n' +
        '    <div className="css-float-two-a"/>\n' +
        '    <div className="css-float-two-b"/>\n' +
        '    <div style={{ clear: \'both\' }}/>\n' +
        '  </div>\n' +
        '  <div className="css-float-two-c"/>\n' +
        '  <br/><br/>\n' +
        '  <p>BFC清除浮动</p>\n' +
        '  <div style={{ border: \'1px solid black\', width: \'400px\', overflow: \'hidden\'}}>\n' +
        '    <div className="css-float-two-a"/>\n' +
        '    <div className="css-float-two-b"/>\n' +
        '  </div>\n' +
        '  <div className="css-float-two-c"/>\n' +
        '  <br/>\n' +
        '  <p>伪元素清除浮动</p>\n' +
        '  <div style={{ border: \'1px solid black\' }} className="css-float-div">\n' +
        '    <div className="css-float-two-a"/>\n' +
        '    <div className="css-float-two-b"/>\n' +
        '  </div>\n' +
        '  <div className="css-float-two-c"/>\n' +
        '</div>',
    },
  },
};

export default initialState;

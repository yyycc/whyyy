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
  },
};

export default initialState;

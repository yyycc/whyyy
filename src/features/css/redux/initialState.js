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
        '\t<img src=\'img.png\'/>\n' +
        '</div>\n' +
        '<div>\n' +
        '\t<p style="text-align: center;">\n' +
        '\t\t<img src=\'img.png\'/>\n' +
        '\t</p>\n' +
        '</div>\n' +
        '<div style="text-align: center;">\n' +
        '\t<img src=\'img.png\'/>\n' +
        '</div>',
    },
  },
};

export default initialState;

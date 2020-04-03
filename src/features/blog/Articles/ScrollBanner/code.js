const html = '<div className="blog-scroll-text-scroll">\n' +
  '  <ul className={animate ? \'blog-scroll-text-scroll-animate\' : \'\'}>\n' +
  '    {texts.map((text, index) => {\n' +
  '      return <li key={index}>\n' +
  '        <Link to={text[\'route\']}>{text[\'content\']}</Link>\n' +
  '      </li>;\n' +
  '    })}\n' +
  '  </ul>\n' +
  '</div>';

const texts = 'texts: [\n' +
  '    {route: \'/blog/about\', content: \'关于\'},\n' +
  '    {route: \'/blog/fLinks\', content: \'友链\'},\n' +
  '    {route: \'/blog\', content: \'主页\'}\n' +
  '  ]';

const css = 'li {\n' +
  '  list-style: none;\n' +
  '  cursor: pointer;\n' +
  '  height: 25px;\n' +
  '}\n' +
  '\n' +
  '.blog-scroll-text-scroll {\n' +
  '  height: 25px;\n' +
  '  overflow: hidden;\n' +
  '  // ul的动画\n' +
  '  .blog-scroll-text-scroll-animate {\n' +
  '    transition: all 0.5s;\n' +
  '    margin-top: -25px;\n' +
  '  }\n' +
  '}';

const js = 'componentDidMount() {\n' +
  '  this.interval = setInterval((props) => {\n' +
  '      props.actions.scrollBanner(\'animate\');\n' +
  '      setTimeout(() => {\n' +
  '        props.actions.scrollBanner(\'scroll\', props.blog);\n' +
  '      }, 1000);\n' +
  '    }\n' +
  '    , 5000, this.props);\n' +
  '}\n' +
  '\n' +
  'componentWillUnmount() {\n' +
  '  clearInterval(this.interval);\n' +
  '}\n' +
  '\n' +
  'export function scrollBanner(arg1, blog) {\n' +
  '  let anim;\n' +
  '  let texts;\n' +
  '  if (arg1 === \'animate\') {\n' +
  '    anim = true;\n' +
  '  } else {\n' +
  '    texts = blog.texts;\n' +
  '    texts.push(blog.texts[0]);\n' +
  '    texts.shift();\n' +
  '    anim = false;\n' +
  '  }\n' +
  '  return {\n' +
  '    type: BLOG_SCROLL_BANNER,\n' +
  '    anim: anim,\n' +
  '    texts: texts,\n' +
  '  };\n' +
  '}\n' +
  '\n' +
  'export function reducer(state, action) {\n' +
  '  switch (action.type) {\n' +
  '    case BLOG_SCROLL_BANNER:\n' +
  '      return {\n' +
  '        ...state,\n' +
  '        animate: action.anim,\n' +
  '        texts: action.texts ? action.texts : state.texts,\n' +
  '\n' +
  '      };\n' +
  '\n' +
  '    default:\n' +
  '      return state;\n' +
  '  }\n' +
  '}';

const interval = 'mount() {\n' +
  '  clearInterval(this.interval);\n' +
  '}\n' +
  'unMount() {\n' +
  '  this.interval = setInterval((props) => {\n' +
  '      props.actions.scrollBanner(\'animate\');\n' +
  '      setTimeout(() => {\n' +
  '        props.actions.scrollBanner(\'scroll\', props.blog);\n' +
  '      }, 1000);\n' +
  '    }\n' +
  '    , 5000, this.props);\n' +
  '}\n' +
  '...\n' +
  '<div className="blog-scroll-text-scroll">\n' +
  '  <ul className={animate ? \'blog-scroll-text-scroll-animate\' : \'\'} onMouseOver={() => this.mount()}\n' +
  '      onMouseOut={() => this.unMount()}>\n' +
  '    {texts.map((text, index) => {\n' +
  '      return <li key={index}>\n' +
  '        <Link to={text[\'route\']}>{text[\'content\']}</Link>\n' +
  '      </li>;\n' +
  '    })}\n' +
  '  </ul>\n' +
  '</div>';

const code = {
  html,
  css,
  js,
  texts,
  interval,
};

export default code;

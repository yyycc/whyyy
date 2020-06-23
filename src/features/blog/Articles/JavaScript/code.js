const codes = [
  '\'my name is CYY\'.search(/cyy/i)',
  'let cyy = new RegExp("\\\\w+")',
];

const ajax = 'let url = \'http://localhost:8881/users/query\';\n' +
  'let ajax = (url, success_fun = () => {}, error_fun = () => {}) => {\n' +
  '  $.ajax({\n' +
  '    url: url,\n' +
  '    type: \'get\',\n' +
  '    dataType: \'json\',\n' +
  '    success: data => {success_fun(data)},\n' +
  '    error: e => {error_fun(e)}\n' +
  '  })\n' +
  '}';

const callBack = 'let callback = () => {\n' +
  '  $(\'#note\').text(\'回调函数：\');\n' +
  '  // 异步操作1\n' +
  '  ajax(url,\n' +
  '    data => {\n' +
  '      $(\'#inp_1\').val(data.data.length);\n' +
  '      // 异步操作2\n' +
  '      ajax(url + \'?name=cyy\',\n' +
  '        data => {\n' +
  '          $(\'#inp_2\').val(\'success\');\n' +
  '        },\n' +
  '        err => {\n' +
  '          $(\'#inp_2\').val(\'err\');\n' +
  '        });\n' +
  '    },\n' +
  '    err => {\n' +
  '      $(\'#inp_1\').val(\'err\');\n' +
  '    },\n' +
  '  );\n' +
  '};';

const event = '';

const promise = 'let promise_ajax = (url) => {\n' +
  '  const p2 = new Promise((resolve, reject) => {\n' +
  '    ajax(url\n' +
  '      ,(data) => {resolve(data);}\n' +
  '      ,(err) => {reject(err)}\n' +
  '    );\n' +
  '  });\n' +
  '  return p2;\n' +
  '}\n' +
  '\n' +
  '// 一般来说，不要在then()方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。\n' +
  'let promise = () => {\n' +
  '  $(\'#note\').text(\'promise对象\');\n' +
  '  // Promise 新建后就会立即执行\n' +
  '  const p = promise_ajax(url);\n' +
  '  // 将回调函数的嵌套改为 链式调用\n' +
  '  p.then((data) => {\n' +
  '    console.log(data);\n' +
  '    $(\'#inp_1\').val(data.data.length);\n' +
  '    return promise_ajax(url + \'?name=cyy\');\n' +
  '  }).then(data => {\n' +
  '    $(\'#inp_2\').val(\'success\');\n' +
  '    console.log(data);\n' +
  '  }).catch((err) => {\n' +
  '    console.log(err);\n' +
  '    $(\'#inp_1\').val(\'err\');\n' +
  '    $(\'#inp_2\').val(\'err\');\n' +
  '  });\n' +
  '}\n' +
  '// Promise 的最大问题是代码冗余，原来的任务被 Promise 包装了一下，不管什么操作，一眼看去都是一堆then，原来的语义变得很不清楚。';

const generate = 'let query_data = (url) => {\n' +
  '  $.ajax({\n' +
  '    url: url,\n' +
  '    type: \'get\',\n' +
  '    dataType: \'json\',\n' +
  '    success: data => {\n' +
  '      g.next(data)\n' +
  '    },\n' +
  '    error: e => {\n' +
  '      console.log(e)\n' +
  '      g.throw(new Error(\'查询出错\'));\n' +
  '    }\n' +
  '  })\n' +
  '}\n' +
  '\n' +
  'function* gen() {\n' +
  '  try{\n' +
  '    let y1 = yield query_data(url);\n' +
  '    $(\'#inp_1\').val(y1.data.length);\n' +
  '    let y2 = yield query_data(url + \'?name=cyy\');\n' +
  '    $(\'#inp_2\').val(y2.success);\n' +
  '  } catch(e) {\n' +
  '    console.error(e);\n' +
  '    alert(\'wrong\');\n' +
  '  }\n' +
  '}\n' +
  '\n' +
  'let g;\n' +
  '\n' +
  'let genarate = () => {\n' +
  '  $(\'#note\').text(\'generate函数\');\n' +
  '  g = gen();\n' +
  '  g.next()\n' +
  '}';

const async = 'let query = async () => {\n' +
  '  try {\n' +
  '    let f1 = await promise_ajax(url);\n' +
  '    $(\'#inp_1\').val(f1.data.length);\n' +
  '    let f2 = await promise_ajax(url + \'q?name=cyy\');\n' +
  '    $(\'#inp_2\').val(f2.success);\n' +
  '  } catch(e) {\n' +
  '    console.error(\'err\');\n' +
  '    console.error(e);\n' +
  '  }\n' +
  '}\n' +
  '\n' +
  'let async = () => {\n' +
  '  $(\'#note\').text(\'async函数\');\n' +
  '  query().then(console.log(\'ok\'))\n' +
  '}';

const reduce = '[1,2,3,4,5].reduce((a, b) => a + b, 10)';

const reducer = 'reducers.reduce((s, r) => r(s, action), newState)';

const proxy = 'var pipe = function (value) {\n' +
  '  var funcStack = [];\n' +
  '  var oproxy = new Proxy({} , {\n' +
  '    get : function (pipeObject, fnName) {\n' +
  '      if (fnName === \'get\') {\n' +
  '        return funcStack.reduce(function (val, fn) {\n' +
  '          return fn(val);\n' +
  '        },value);\n' +
  '      }\n' +
  '      funcStack.push(window[fnName]);\n' +
  '      return oproxy;\n' +
  '    }\n' +
  '  });\n' +
  '\n' +
  '  return oproxy;\n' +
  '}\n' +
  '\n' +
  'var double = n => n * 2;\n' +
  'var pow    = n => n * n;\n' +
  'var reverseInt = n => n.toString().split("").reverse().join("") | 0;\n' +
  '\n' +
  'pipe(3).double.pow.reverseInt.get; // 63';

const code = {
  ajax,
  codes,
  callBack,
  event,
  promise,
  generate,
  async,
  reduce,
  reducer,
  proxy,
};

export default code;




import React, { Component } from 'react';

const js = 'rgb2hex(sRGB) {\n' +
  '  let left = sRGB.replace(\'rgb(\', \'\').replace(\')\', \'\').replace(\' \', \'\');\n' +
  '  let arr = left.split(\',\');\n' +
  '  if (arr.length !== 3 && arr.length !== 4) {\n' +
  '    return \'\';\n' +
  '  }\n' +
  '  let sexes = [];\n' +
  '  for (let i = 0; i < arr.length; i++) {\n' +
  '    if (arr[i] >= 0 && arr[i] < 256) {\n' +
  '      let sex = Number(arr[i]).toString(16);\n' +
  '      if (Number(arr[i]) < 16) {\n' +
  '        sex = \'0\' + sex;\n' +
  '      }\n' +
  '      sexes.push(sex);\n' +
  '    } else {\n' +
  '      return \'\';\n' +
  '    }\n' +
  '  }\n' +
  '  return \'#\' + sexes.join(\'\');\n' +
  '}\n' +
  '\n' +
  'hex2rgb(sRGB) {\n' +
  '  sRGB = sRGB.replace(\'#\', \'\');\n' +
  '  let arrOrigin = Array.from(sRGB);\n' +
  '  let arr = [];\n' +
  '  if (arrOrigin.length === 3) {\n' +
  '    for (let i = 0; i < 3; i++) {\n' +
  '      arr.push(arrOrigin[i] + arrOrigin[i]);\n' +
  '    }\n' +
  '  } else if (arrOrigin.length === 6) {\n' +
  '    for (let i = 0; i < 6; i++) {\n' +
  '      arr.push(arrOrigin[i] + arrOrigin[++i]);\n' +
  '    }\n' +
  '  } else {\n' +
  '    return \'\';\n' +
  '  }\n' +
  '  let sexes = \'\';\n' +
  '  for (let i = 0; i < arr.length; i++) {\n' +
  '    if (arr[i] >= \'00\' && arr[i] <= \'ff\') {\n' +
  '      let sex = Number(\'0x\' + arr[i]).toString(10) + \',\';\n' +
  '      sexes += sex;\n' +
  '    } else {\n' +
  '      return \'\';\n' +
  '    }\n' +
  '  }\n' +
  '  return \'rgb(\' + sexes.slice(0, sexes.length - 1) + \')\';\n' +
  '}';

const rgb2hex = sRGB => {
  let left = sRGB.replace('rgb(', '').replace(')', '').replace(' ', '');
  let arr = left.split(',');
  if (arr.length !== 3 && arr.length !== 4) {
    return '';
  }
  let sexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && arr[i] < 256) {
      let sex = Number(arr[i]).toString(16);
      if (Number(arr[i]) < 16) {
        sex = '0' + sex;
      }
      sexes.push(sex);
    } else {
      return '';
    }
  }
  return '#' + sexes.join('');
};

const hex2rgb = sRGB => {
  sRGB = sRGB.replace('#', '');
  let arrOrigin = Array.from(sRGB);
  let arr = [];
  if (arrOrigin.length === 3) {
    for (let i = 0; i < 3; i++) {
      arr.push(arrOrigin[i] + arrOrigin[i]);
    }
  } else if (arrOrigin.length === 6) {
    for (let i = 0; i < 6; i++) {
      arr.push(arrOrigin[i] + arrOrigin[++i]);
    }
  } else {
    return '';
  }
  let sexes = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= '00' && arr[i] <= 'ff') {
      let sex = Number('0x' + arr[i]).toString(10) + ',';
      sexes += sex;
    } else {
      return '';
    }
  }
  return 'rgb(' + sexes.slice(0, sexes.length - 1) + ')';
};

const calc = (id, value) => {
  if (id === 'rgb') {
    document.getElementById('hex').value = rgb2hex(value);
  }

  if (id === 'hex') {
    document.getElementById('rgb').value = hex2rgb(value);
  }
};

export default class Color extends Component {
  constructor() {
    super();
    this.state = {
      color: 'none',
      js: js,
    };
  }

  onBlur(e) {
    let value = e.target.value;
    if (value.indexOf(',') >= 0 && value.indexOf('rgb') < 0) {
      value = 'rgb(' + value + ')';
    }
    if (value.indexOf(',') < 0 && value.indexOf('#') < 0) {
      value = '#' + value;
    }
    this.setState({
      ...this.state,
      color: value,
    });
    calc(e.target.id, value);
  }

  onEnter(event) {
    let code;
    if (event.key !== undefined) {
      code = event.key;
    } else if (event.keyIdentifier !== undefined) {
      code = event.keyIdentifier;
    } else if (event.keyCode !== undefined) {
      code = event.keyCode;
    }
    if (code.toLowerCase() === 'enter') {
      let value = event.target.value;
      if (value.indexOf(',') >= 0 && value.indexOf('rgb') < 0) {
        value = 'rgb(' + value + ')';
      }
      if (value.indexOf(',') < 0 && value.indexOf('#') < 0) {
        value = '#' + value;
      }
      this.setState({
        ...this.state,
        color: value,
      });
      calc(event.target.id, value);
    }
  }

  render() {
    return (
      <div className="css-color">

        <div className="css-layout-body-rgb">
          <h3>RGB</h3>
          <div className="css-layout-body-rgb-content">
            <p>输入rgb格式</p>
            <input placeholder='rgb(255,255,255)' id='rgb' onBlur={(e) => this.onBlur(e)}
                   onKeyPress={(e) => this.onEnter(e)}/>
            <dl>
              <dt>支持格式</dt>
              <dd>
                <em>rgba(128,128,128,0.5)</em>
              </dd>
              <dd>
                <em>rgba(128,128,128)</em>
              </dd>
              <dd>
                <em>128,128,128,0.5</em>
              </dd>
              <dd>
                <em>128,128,128</em>
              </dd>
            </dl>
          </div>
        </div>
        <div className="css-layout-body-show">
          <h3>预览</h3>
          <div className="css-layout-body-show-content"
               style={{ background: this.state.color !== 'none' ? 'none' : '#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMzMz0oyR4AAAARSURBVAgdY/jPwIAVYRf9DwB+vw/xbMOy9QAAAABJRU5ErkJggg==) 50%' }}>
            <div style={{ backgroundColor: `${this.state.color}` }}/>
          </div>
        </div>
        <div className="css-layout-body-hex">
          <h3>HEX</h3>
          <div className="css-layout-body-hex-content">
            <p>输入hex格式</p>
            <input placeholder='#ffffff' id='hex' onBlur={(e) => this.onBlur(e)}
                   onKeyPress={(e) => this.onEnter(e)}/>
            <dl>
              <dt>支持格式</dt>
              <dd>
                <em>#ddeeff</em>
              </dd>
              <dd>
                <em>#def</em>
              </dd>
              <dd>
                <em>ddeeff</em>
              </dd>
              <dd>
                <em>def</em>
              </dd>
            </dl>
          </div>
        </div>
        <div className="css-layout-body-func">
          <h3>方法</h3>
          <pre>
            <code className="javaScript">
                {this.state.js}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

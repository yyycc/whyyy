import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeColor } from '../redux/actions';

export class Color extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  rgb2hex(sRGB) {
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
  }

  hex2rgb(sRGB) {
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
  }

  calc(id, value) {
    if (id === 'rgb') {
      document.getElementById('hex').value = this.rgb2hex(value);
    }

    if (id === 'hex') {
      document.getElementById('rgb').value = this.hex2rgb(value);
    }
  }

  onBlur(e, changeColor) {
    let value = e.target.value;
    if (value.indexOf(',') >= 0 && value.indexOf('rgb') < 0) {
      value = 'rgb(' + value + ')';
    }
    if (value.indexOf(',') < 0 && value.indexOf('#') < 0) {
      value = '#' + value;
    }
    changeColor(value);
    this.calc(e.target.id, value);
  }

  onEnter(event, changeColor) {
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
      changeColor(value);
      this.calc(event.target.id, value);
    }
  }

  render() {
    let color = this.props.color;
    let js = this.props.js;
    const { changeColor } = this.props.actions;
    return (
      <div className="css-color">

        <div className="css-layout-body-rgb">
          <h3>RGB</h3>
          <div className="css-layout-body-rgb-content">
            <p>输入rgb格式</p>
            <input placeholder='rgb(255,255,255)' id='rgb' onBlur={(e) => this.onBlur(e, changeColor)}
                   onKeyPress={(e) => this.onEnter(e, changeColor)}/>
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
               style={{ background: color !== 'none' ? 'none' : '#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMzMz0oyR4AAAARSURBVAgdY/jPwIAVYRf9DwB+vw/xbMOy9QAAAABJRU5ErkJggg==) 50%' }}>
            <div style={{ backgroundColor: `${color}` }}/>
          </div>
        </div>
        <div className="css-layout-body-hex">
          <h3>HEX</h3>
          <div className="css-layout-body-hex-content">
            <p>输入hex格式</p>
            <input placeholder='#ffffff' id='hex' onBlur={(e) => this.onBlur(e, changeColor)}
                   onKeyPress={(e) => this.onEnter(e, changeColor)}/>
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
                {js}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    color: state.css.color,
    js: state.css.js,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators({changeColor} , dispatch),
    actions: { changeColor: bindActionCreators(changeColor, dispatch) },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Color);

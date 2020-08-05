import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*
 * @name: 功能框标题
 * @description: blog-fa-title 左边fa图标，右边title，可设置宽度百分比
 * @arg1: className  图标选择
 * @arg2: title      标题(字符串：直接显示；数组：路由显示)
 * @arg3: width      宽度百分比(可选)
 */
export default class FaTitle extends Component {
  static defaultProps = {
    width: 100,
  };

  // 静态属性(类本身属性)
  static propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  };

  render() {
    let className = `fa fa-${this.props.className}`;
    let width = this.props.width;
    let title = this.props.title;
    // 判断标题类型(是否加路由)
    let routeFlag = typeof title === 'string';
    return (
      <div className="blog-fa-title" style={{ width: `${width}%` }}>
        <h3>
          <li>
            <i className={className}/>
          </li>
          {routeFlag ? title : <Link to={title[0]}>{title[1]}</Link>}
        </h3>
      </div>
    );
  }
}

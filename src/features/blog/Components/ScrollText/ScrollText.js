import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*
 * @name: 轮播公告
 * @description: 实现滚动显示公告
 * @arg1: tests   [{route:'', content: ''}] {跳转路由,公告内容}
 * @arg2: animate: 动画class
 */

export default class ScrollText extends Component {

  componentDidMount() {
    this.interval = setInterval((props) => {
        props.scrollBanner('animate');
        setTimeout(() => {
          props.scrollBanner('scroll', props.blog);
        }, 500);
      }
      , 5000, this.props);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  mount() {
    clearInterval(this.interval);
  }

  unMount() {
    this.interval = setInterval((props) => {
      props.scrollBanner('animate');
      setTimeout(() => {
        props.scrollBanner('scroll', props.blog);
      }, 500);
    }, 5000, this.props);
  }

  render() {
    const { texts, animate } = this.props.blog;
    return (
      <div className="blog-scroll-text">
        <div className="blog-scroll-text-volume">
          <li>
            <i className="fa fa-volume-up"/>
          </li>
        </div>
        <div id="scroll-div">
          <div className="blog-scroll-text-scroll">
            <ul className={animate ? 'blog-scroll-text-scroll-animate' : ''} onMouseOver={() => this.mount()}
                onMouseOut={() => this.unMount()}>
              {texts.map((text, index) => {
                return <li key={index}>
                  <Link to={text['route']}>{text['content']}</Link>
                </li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

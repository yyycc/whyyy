import React, { Component } from 'react';
import { Anchor } from 'antd';

/*
 * @name: 文章目录
 * @description: 点击后直接定位到小标题
 * @problem: 重新渲染的问题待解决
 */

export class AnchorIndex extends Component {
  static propTypes = {};

  render() {
    const id = this.props.id;
    const { Link } = Anchor;
    const h2 = Array.prototype.slice.call(document.getElementsByTagName('h2'));
    const h3 = Array.prototype.slice.call(document.getElementsByTagName('h3'));
    return (
      <div className="blog-anchor-index">
        <Anchor affix={false} offsetTop={60}>
          {h2.map((ele, index) => {
            let href = '#' + ele.id;
            return <Link key={index} href={href} title={ele.innerText}>
              {!id && h3.map((e, i) => {
                // 加上-，否则a-10-1就放到a-1下面去了。。。
                if ((e.id).indexOf(ele.id + '-') > -1) {
                  href = '#' + e.id;
                  return <Link key={i} href={href} title={e.innerText}/>;
                } else {
                  return null;
                }
              })}
            </Link>;
          })}
        </Anchor>
      </div>
    );
  }
}

export default AnchorIndex;

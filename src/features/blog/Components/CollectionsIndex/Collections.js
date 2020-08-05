import React, { Component } from 'react';
import FaTitle from '../Titles/FaTitle';

/*
 * @name: 归档
 * @description: 按月份统计、按归类统计
 * @arg1: posts  所有博客
 * @arg2: 方法  queryPostsByDate, queryPostsByTag 根据日期/标签查询文章
 * @update: 归档只显示最近6个月的，之前的缩略
 */

export class Collections extends Component {
  static propTypes = {};

  render() {
    const { posts, international } = this.props.blog;
    const { queryPostsByDate, queryPostsByTag } = this.props.actions;
    const dates = posts.map((ele) => ele['date'].slice(0, 7)).sort(); // 获取年月
    let typeCount = { 'frontEnd': 0, 'java': 0, 'linux': 0, 'database': 0, 'git': 0 };
    let type = ['frontEnd', 'java', 'linux', 'database', 'git'];

    // 所以之前为什么会写这么复杂的方法呢
    let datesCount = {};
    for (let i = 0; i < dates.length; i++) {
      if (!datesCount[dates[i]]) {
        datesCount[dates[i]] = 1;
      } else {
        datesCount[dates[i]]++;
      }
    }

    // 获取各种类型的blogs数量
    type.forEach((ele, index) => {
      posts.forEach((e, i) => {
        if (e.tag.indexOf(ele) > -1) {
          typeCount[ele]++;
        }
      });
    });
    let datesList = Object.keys(datesCount);
    let start = 0;
    if (datesList.length > 6) {
      start = datesList.length - 6;
      datesList = datesList.slice(-6);
    }
    const countsList = Object.values(datesCount);
    const typeList = Object.keys(typeCount);
    const typeCountsList = Object.values(typeCount);
    return (
      <div className="blog-collections">
        <div className="blog-collections-titles">
          <FaTitle className='folder-open' title={['/blog/collections', '归档']} width='50'/>
          <FaTitle className='folder-open-o' title='归类' width='50'/>
        </div>
        <div className="blog-collections-lists">
          <div className="blog-collections-lists-date">
            {
              datesList.map((ele, index) => {
                let index_reverse = index + start;
                let listName = ele.split('-')[0] + '年' + ele.split('-')[1] + '月(' + countsList[index_reverse] + ')';
                return <li onClick={() => queryPostsByDate(ele)} key={index}>
                  <i className="fa fa-calendar"/>{listName}</li>;
              })
            }
          </div>
          <div className="blog-collections-lists-type">
            {typeList.map((ele, index) => {
              let listName = international[ele] + '(' + typeCountsList[index] + ')';
              return <li onClick={() => queryPostsByTag(ele)} key={index}>
                <i className="fa fa-bookmark-o"/>{listName}</li>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Collections;

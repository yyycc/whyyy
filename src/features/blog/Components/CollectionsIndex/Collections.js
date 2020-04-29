import React, { Component } from 'react';

/*
 * @name: 归档
 * @description: 按月份统计、按归类统计
 * @arg1: posts  所有博客
 * @arg2: 方法  queryPostsByDate, queryPostsByTag 根据日期/标签查询文章
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
    const datesList = Object.keys(datesCount);
    const countsList = Object.values(datesCount);
    const typeList = Object.keys(typeCount);
    const typeCountsList = Object.values(typeCount);
    return (
      <div className="blog-collections">
        <div className="blog-collections-titles">
          <h3>
            <li>
              <i className="fa fa-folder-open"/>
            </li>
            归档
          </h3>
          <h3>
            <li>
              <i className="fa fa-folder-open-o"/>
            </li>
            归类
          </h3>
        </div>
        <div className="blog-collections-lists">
          <div className="blog-collections-lists-date">
            {
              datesList.map((ele, index) => {
                let listName = ele.split('-')[0] + '年' + ele.split('-')[1] + '月(' + countsList[index] + ')';
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

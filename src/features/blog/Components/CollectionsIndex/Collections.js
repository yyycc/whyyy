import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

/*
 * @name: 归档
 * @description: 按月份统计、按归类统计
 * @arg1: posts  所有博客
 * @arg2: 方法  queryPostsByDate, queryPostsByTag 根据日期/标签查询文章
 */

export class Collections extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { posts } = this.props.blog;
    const { queryPostsByDate, queryPostsByTag } = this.props.actions;
    const dates = posts.map((ele) => ele['date'].slice(0, 7)).sort(); // 获取年月
    let datesCount = {};
    let lastDate = dates[0];
    let count = 1;
    let counts = dates.length;
    // 获取每个月份的blogs数量
    dates.forEach((ele, index) => {
      if (index > 0) {
        if (ele !== lastDate) {
          let obj = {};
          obj[lastDate] = count;
          Object.assign(datesCount, obj);
          count = 1;
          if (index === counts - 1) {
            let obj = {};
            obj[ele] = 1;
            Object.assign(datesCount, obj);
          }
        } else if (index === counts - 1) {
          let obj = {};
          obj[ele] = ++count;
          Object.assign(datesCount, obj);
        } else {
          count++;
        }
      }
      lastDate = ele;
    });
    const datesList = Object.keys(datesCount);
    const countsList = Object.values(datesCount);
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
                const listName = ele.split('-')[0] + '年' + ele.split('-')[1] + '月(' + countsList[index] + ')';
                return <li onClick={() => queryPostsByDate(ele)} key={index}>
                  <i className="fa fa-calendar"/>{listName}</li>;
              })
            }
          </div>
          <div className="blog-collections-lists-type">
            <li onClick={() => queryPostsByTag('frontEnd')}><i className="fa fa-bookmark-o"/>前端(6)</li>
            <li onClick={() => queryPostsByTag('java')}><i className="fa fa-bookmark-o"/>后端(3)</li>
            <li onClick={() => queryPostsByTag('linux')}><i className="fa fa-bookmark-o"/>linux(3)</li>
            <li onClick={() => queryPostsByTag('database')}><i className="fa fa-bookmark-o"/>数据库(2)</li>
            <li onClick={() => queryPostsByTag('git')}><i className="fa fa-bookmark-o"/>版本管理(1)</li>
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    blog: state.blog,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Collections);

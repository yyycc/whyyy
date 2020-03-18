import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

export class Collections extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { posts } = this.props.blog;
    const { queryPostsByDate } = this.props.actions;
    const dates = posts.map((ele, index) => ele['date'].slice(0, 7)).sort();
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
        <h3>
          <li>
            <i className="fa fa-folder-open"/>
          </li>
          归档
        </h3>
        <div className="blog-collections-lists">
          {
            datesList.map((ele, index) => {
              const listName = ele.split('-')[0] + '年' + ele.split('-')[1] + '月(' + countsList[index] + ')';
              return <li onClick={() => queryPostsByDate(ele)} key={index}>
                <i className="fa fa-calendar"/>{listName}</li>;
            })
          }
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

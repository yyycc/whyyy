import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class CollectionsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: new Array(30).fill(false),
    };
  }

  render() {
    const changeDisplay = (index) => {
      let new_display = [...this.state.display];
      new_display[index] = !new_display[index];
      this.setState({
        display: new_display,
      });
    };
    const { posts } = this.props;
    const { display } = this.state;
    const dates = posts.map((ele) => ele['date'].slice(0, 7)).sort(); // 获取年月
    let datesCount = {};
    for (let i = 0; i < dates.length; i++) {
      if (!datesCount[dates[i]]) {
        datesCount[dates[i]] = 1;
      } else {
        datesCount[dates[i]]++;
      }
    }

    let datesList = Object.keys(datesCount);
    const countsList = Object.values(datesCount);
    return (
      <div className="blog-collections-detail">
        <h1>归档详情</h1>
        <div className="blog-collections-detail-lists">
          {
            datesList.map((ele, index) => {
              let listName = ele.split('-')[0] + '年' + ele.split('-')[1] + '月(' + countsList[index] + ')';
              return <ol key={index}>
                <i className="fa fa-calendar" onClick={() => changeDisplay(index)}/>&nbsp;&nbsp;{listName}
                {
                  (posts.filter(post => post.date.slice(0, 7) === ele)).map((e, i) => {
                    return <li style={{ display: display[index] ? 'block' : 'none' }}
                               key={i}><Link to={e.route}>{i + 1}. {e.title}</Link></li>;
                  })
                }
              </ol>;
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.blog.posts,
  };
}

export default connect(mapStateToProps)(CollectionsDetail);

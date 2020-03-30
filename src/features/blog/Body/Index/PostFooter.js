import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import theEnd from '../../../../images/theEnd.png';
import { Link } from 'react-router-dom';

export class PostFooter extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  upPage(e, route, up) {
    if (up)
      e.props.history.push('/blog/' + route);
  }

  downPage(e, route, down) {
    if (down)
      e.props.history.push('/blog/' + route);
  }

  render() {
    let up = '上一篇', upTitle, upRoute;
    let down = '下一篇', downTitle, downRoute;
    const pathname = this.props.props.location.pathname.split('/');
    const order = Number(pathname[pathname.length - 1]);
    const name = pathname[pathname.length - 2];
    const { posts } = this.props.blog;
    const postsOfName = posts.filter((ele) => {
      return ele.tag.indexOf(name) > -1;
    }).sort((cur, last) =>
      cur.order - last.order,
    );
    let upPoint = true;
    let downPoint = true;
    if (postsOfName.length === 1) {
      upTitle = '已是第一篇';
      downTitle = '已是最后一篇';
      upPoint = false;
      downPoint = false;
    } else if (order === 1) {
      upTitle = '已是第一篇';
      down = '下一篇 >';
      upPoint = false;
      downTitle = postsOfName[order]['title'];
      downRoute = name + '/' + (order + 1);
    } else if (order === postsOfName.length) {
      downTitle = '已是最后一篇';
      up = '< 上一篇';
      upTitle = postsOfName[order - 2]['title'];
      downPoint = false;
      upRoute = name + '/' + (order - 1);
    } else {
      up = '< 上一篇';
      down = '下一篇 >';
      downTitle = postsOfName[order]['title'];
      upTitle = postsOfName[order - 2]['title'];
      upRoute = name + '/' + (order - 1);
      downRoute = name + '/' + (order + 1);
    }

    return (
      <div className="blog-post-footer">
        <p><img src={theEnd} alt="The End"/></p>
        <div className="blog-post-footer-page-turn">
          <div onClick={() => this.upPage(this.props, upRoute, upPoint)}
               style={{ cursor: upPoint ? 'pointer' : 'auto' }}
               className="blog-post-footer-page-up">
            <p>{up}
              <br/>{upTitle}
            </p>
          </div>
          <div onClick={() => this.downPage(this.props, downRoute, downPoint)}
               style={{ cursor: downPoint ? 'pointer' : 'auto' }}
               className="blog-post-footer-page-down">
            <p>{down}
              <br/>{downTitle}
            </p>
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
)(PostFooter);

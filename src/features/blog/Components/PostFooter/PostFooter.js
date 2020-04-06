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

  render() {
    let up = '<上一篇', upTitle, upRoute;
    let down = '下一篇>', downTitle, downRoute;
    const { posts } = this.props.blog;
    let postsInOrder = posts.concat();
    postsInOrder.sort((cur, last) =>
      cur.key - last.key);
    const location = this.props.props.location;
    const order = location.state;
    let upPoint = true;
    let downPoint = true;

    if (order === 1) {
      upTitle = '已是第一篇';
      down = '下一篇 >';
      upPoint = false;
      downTitle = postsInOrder[order]['title'];
      downRoute = postsInOrder[order - 2]['route'];
    } else if (order === posts.length) {
      downTitle = '已是最后一篇';
      up = '< 上一篇';
      upTitle = postsInOrder[order - 2]['title'];
      downPoint = false;
      upRoute = postsInOrder[order - 2]['route'];
    } else {
      downTitle = postsInOrder[order]['title'];
      upTitle = postsInOrder[order - 2]['title'];
      upRoute = postsInOrder[order - 2]['route'];
      downRoute = postsInOrder[order]['route'];
    }
    const urlStatesDown = {
      pathname: downRoute,
      state: order + 1,
    };
    const urlStatesUp = {
      pathname: upRoute,
      state: order - 1,
    };

    return (
      <div className="blog-post-footer">
        <p><img src={theEnd} alt="The End"/></p>
        <div className="blog-post-footer-page-turn">
          <Link to={urlStatesUp}>
            <div style={{ cursor: upPoint ? 'pointer' : 'auto' }}
                 className="blog-post-footer-page-up">
              <p>{up}
                <br/>{upTitle}
              </p>
            </div>
          </Link>
          <Link to={urlStatesDown}>
            <div
              style={{ cursor: downPoint ? 'pointer' : 'auto' }}
              className="blog-post-footer-page-down">
              <p>{down}
                <br/>{downTitle}
              </p>
            </div>
          </Link>
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

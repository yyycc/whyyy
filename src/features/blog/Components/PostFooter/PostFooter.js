import React, { Component } from 'react';
import theEnd from '../../../../images/theEnd.png';
import theEndNight from '../../../../images/theEndNight.png';
import { Link } from 'react-router-dom';

/*
 * @name: 翻页
 * @description: 根据传过来的order参数/路径(没有参数是)来找到上下一条数据
 * @args: this.props
 */

export class PostFooter extends Component {
  static propTypes = {};

  render() {
    let up = '<上一篇', upTitle, upRoute;
    let down = '下一篇>', downTitle, downRoute;
    const { posts, mode, location } = this.props.blog;
    let postsInOrder = posts.concat();
    postsInOrder.sort((cur, last) =>
      cur.key - last.key);
    let order = location.state; // 如果直接用路径访问，就会获取不到order
    if (!order) {
      for (let i = 0; i < postsInOrder.length; i++) {
        if (location.pathname === postsInOrder[i].route) {
          order = postsInOrder[i].blog_id;
          break;
        }
      }
    }
    let upPoint = true;
    let downPoint = true;

    const urlStatesDown = {
      state: order + 1,
    };
    const urlStatesUp = {
      state: order - 1,
    };

    if (order === 1) {
      upTitle = '已是第一篇';
      down = '下一篇 >';
      upPoint = false;
      downTitle = postsInOrder[order]['title'];
      downRoute = postsInOrder[order]['route'];
      urlStatesUp.state = order;
    } else if (order === posts.length) {
      downTitle = '已是最后一篇';
      up = '< 上一篇';
      upTitle = postsInOrder[order - 2]['title'];
      downPoint = false;
      upRoute = postsInOrder[order - 2]['route'];
      urlStatesDown.state = order;
    } else {
      downTitle = postsInOrder[order]['title'];
      upTitle = postsInOrder[order - 2]['title'];
      upRoute = postsInOrder[order - 2]['route'];
      downRoute = postsInOrder[order]['route'];
    }

    urlStatesDown.pathname = downRoute;
    urlStatesUp.pathname = upRoute;

    return (
      <div className="blog-post-footer">
        <p><img className="blog-post-footer-img" src={mode === 'day' ? theEnd : theEndNight} alt="The End"/></p>
        <div className="blog-post-footer-page-turn">
          {!upPoint && <a>
            <div style={{ cursor: upPoint ? 'pointer' : 'auto' }}
                 className="blog-post-footer-page-up">
              <p>{up}
                <br/>{upTitle}
              </p>
            </div>
          </a>}
          {upPoint && <Link to={urlStatesUp}>
            <div style={{ cursor: upPoint ? 'pointer' : 'auto' }}
                 className="blog-post-footer-page-up">
              <p>{up}
                <br/>{upTitle}
              </p>
            </div>
          </Link>}
          {!downPoint && <a>
            <div
              style={{ cursor: downPoint ? 'pointer' : 'auto' }}
              className="blog-post-footer-page-down">
              <p>{down}
                <br/>{downTitle}
              </p>
            </div>
          </a>}
          {downPoint && <Link to={urlStatesDown}>
            <div
              style={{ cursor: downPoint ? 'pointer' : 'auto' }}
              className="blog-post-footer-page-down">
              <p>{down}
                <br/>{downTitle}
              </p>
            </div>
          </Link>}
        </div>
      </div>
    );
  }
}

export default PostFooter;

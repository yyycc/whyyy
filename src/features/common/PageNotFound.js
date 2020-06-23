import React, { PureComponent } from 'react';
import lost from '../../images/cute-girl.png';

export default class PageNotFound extends PureComponent {

  render() {
    const goBack = (props) => props.history.goBack();
    const goHome = (props) => props.history.push('/blog');
    return (
      <div className="common-page-not-found">
        <div className="common-page-not-found-tip">
          <h1>404</h1>
          <div>
            <h2>不是我搬家了，就是你迷路啦</h2>
            <div className="common-page-not-found-back">
              <a onClick={() => goBack(this.props)}>
                返回上一层</a>
              <li><i className="fa fa-level-down"> </i></li>
            </div>
            <div className="common-page-not-found-home">
              <a onClick={() => goHome(this.props)}>
                返回主页</a>
              <li><i className="fa fa-home"> </i></li>
            </div>
          </div>
        </div>
        <div className="common-page-not-found-pic">
          <img className="common-page-not-found-img" src={lost}
               alt="page error"/>
        </div>
      </div>
    );
  }
}

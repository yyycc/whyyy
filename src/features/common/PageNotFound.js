import React, { PureComponent } from 'react';

export default class PageNotFound extends PureComponent {
  render() {
    return (
      <div className="common-page-not-found">
        <div className="common-page-not-found-tip">
          <h1>404</h1>
          <div>
            <h3>跑偏啦</h3>
          </div>
        </div>
        <div>
          <img className="ErrorPage-errorImage" src="//zhstatic.zhihu.com/assets/error/liukanshan_wire.svg"
               alt="page error"/>
        </div>
      </div>
    );
  }
}

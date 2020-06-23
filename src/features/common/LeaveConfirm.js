import React, { Component } from 'react';

export default class LeaveConfirm extends Component {

  render() {
    const goBack = (props) => props.history.goBack();
    const goHome = (props) => props.history.push('/blog');
    return (
      <div className="common-leave-confirm">
        <div className="common-leave-confirm-tip">
          <h2>whyyy his blog</h2>
          <div className="common-leave-confirm-tip-content">
            <h3>即将离开whyyy的博客</h3>
            <p>常肥来看看~~</p>
            <p>{this.props.location.state}</p>
            <a onClick={() => goBack(this.props)} href={this.props.location.state} target="_blank"
               rel="noopener norefferrer">
              继续访问</a>
            <a onClick={() => goBack(this.props)}>
              返回上一层</a>
            <a onClick={() => goHome(this.props)}>
              返回主页</a>
          </div>
        </div>
      </div>
    );
  }
}

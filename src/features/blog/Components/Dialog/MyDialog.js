import React, { Component } from 'react';

export default class MyDialog extends Component {
  constructor(props) {
    super(props);
    let a = () => {
      return true;
    };
    this.state = {
      confirm: null,
      cancel: null,
      title: props.title || '提示',
      success: props.success || a,
      failure: props.failure || a,
    };
  }

  componentDidMount() {
    let pro = new Promise((resolve, reject) => {
      this.setState({
        ...this.state,
        confirm: resolve,
        cancel: reject,
      });
    });
    pro.then(data => {
      this.state.success(data);
      console.log(data.toLowerCase());
    }, data => {
      this.state.failure(data);
    }).catch((e) => {
      console.log(e);
      debugger;
    });
  }

  render() {
    return (
      <div className="blog-my-dialog">
        <p>{this.state.title}</p>
        <button onClick={() => this.state.confirm(23)}>确定</button>
        <button onClick={() => this.state.cancel('fail')}>取消</button>
      </div>
    );
  }
}

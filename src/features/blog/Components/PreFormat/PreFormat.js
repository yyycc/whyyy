import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import Highlight from 'react-highlight';

export class PreFormat extends Component {
  static propTypes = {};

  /*
   * @name: 代码
   * @description: 显示代码(灰底)
   * @arg1：content  代码内容
   */

  render() {
    const content = this.props.content;
    const className = this.props.className;
    return (
      <div className="blog-pre-format">
        <Highlight className={className}>{content}</Highlight>
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
)(PreFormat);

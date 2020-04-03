import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

/*
 * @name: 字体选择
 * @description: 可增大缩小、显示默认字体
 * @args: 方法：addFontSize, minusFontSize, defaultFontSize
 */

export class ChangeFont extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { addFontSize, minusFontSize, defaultFontSize } = this.props.actions;
    return (
      <div className="blog-change-font">
        <ul className="blog-change-font-lists">
          <li onClick={addFontSize} className="blog-change-font-add">A+</li>
          <li onClick={minusFontSize} className="blog-change-font-minus">A-</li>
          <li onClick={defaultFontSize} className="blog-change-font-minus">A</li>
        </ul>
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
)(ChangeFont);

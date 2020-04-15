import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

export class Layout extends Component {
  static propTypes = {
    css: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { example } = this.props.css;
    const pathname = this.props.location.pathname.replace('/css/', '');
    let title = example[pathname]['title'];
    let css = example[pathname]['css'];
    let html = example[pathname]['html'];
    return (
      <div className="css-layout">
        <div className="css-layout-head">
          <div className="css-layout-head-blog-title">
            <p>whyyy his blog</p>
          </div>
          <div className="css-layout-head-title">
            <p>{title}</p>
          </div>
        </div>
        <div className="css-layout-body">
          <div className="css-layout-body-code">
            <h3>代码</h3>
            <div className="css-layout-body-code-content">
              <h4>css代码</h4>
              <pre>{css}</pre>
              <h4>html代码</h4>
              <pre>{html}</pre>
            </div>
          </div>
          <div className="css-layout-body-effect">
            <h3>效果</h3>
            <div className="css-layout-body-code-effect">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    css: state.css,
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
)(Layout);

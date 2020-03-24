import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class LeaveConfirm extends Component {
  static propTypes = {
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  goBack(props) {
    props.history.goBack();
  }

  render() {
    debugger
    return (
      <div className="common-leave-confirm">
        <div className="common-leave-confirm-tip">
          <h2>whyyy his blog</h2>
          <div className="common-leave-confirm-tip-content">
            <h3>即将离开whyyy的博客</h3>
            <p>常肥来看看~~</p>
            <p>{this.props.location.state}</p>
            <a href={this.props.location.state} target="_blank" rel="noopener">
              继续访问</a>
            <a onClick={() => this.goBack(this.props)}>
              返回上一层</a>
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    common: state.common,
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
)(LeaveConfirm);

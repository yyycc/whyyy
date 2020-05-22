import React from 'react';
import * as actions from './redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const TestCyy = props => {
  return (
    <div className="visualized-test">
    </div>
  );
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    visualized: state.visualized,
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
)(TestCyy);

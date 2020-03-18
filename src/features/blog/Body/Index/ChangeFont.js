import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { Button } from 'antd';

export class ChangeFont extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { addFontSize, minusFontSIze } = this.props.actions;
    const display = this.props.props.location.pathname.split('/').length > 3;
    return (
      <div>
        {
          display && <div className="blog-change-font">
            <ul className="blog-change-font-lists">
              <li onClick={addFontSize} className="blog-change-font-add">A+</li>
              <li onClick={minusFontSIze} className="blog-change-font-minus">A-</li>
            </ul>
          </div>
        }
      </div>
    )
      ;
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

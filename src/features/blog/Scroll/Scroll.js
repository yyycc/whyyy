import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

// import { UpOutlined } from 'antd';

export class Scroll extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  scrollToBottom() {
    window.scrollTo({
      top: 99999,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className="blog-scroll">
        <a className="scroll-top" onClick={this.scrollToTop}>
          <i className="fa fa-angle-up"/>
          {/*<UpOutlined />*/}
        </a>
        <a className="scroll-bottom" onClick={this.scrollToBottom}>
          <i className="fa fa-angle-down"/>
        </a>
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
)(Scroll);

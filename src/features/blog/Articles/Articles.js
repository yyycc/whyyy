import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import ChangeFont from '../Components/ChangeFont/ChangeFont';
import PostFooter from '../Components/PostFooter/PostFooter';
// import frame from '../../../images/frame-1.jpeg'
// import frame from '../../../images/frame-2.jpeg';
// import frame from '../../../images/frame-3.jpg';
// import frame from '../../../images/frame-4.jpg';
import frame from '../../../images/frame-5.jpg';

export class Articles extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <div className="blog-articles">
          <img className="blog-articles-img" src={frame}/>
          <ChangeFont props={this.props}/>
          {this.props.children}
        </div>
        <div className="blog-articles-footer">
          <PostFooter props={this.props}/>
        </div>
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
)(Articles);

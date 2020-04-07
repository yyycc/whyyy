import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import ChangeFont from '../Components/ChangeFont/ChangeFont';
import PostFooter from '../Components/PostFooter/PostFooter';
// import frame from '../../../images/flower-2.png';
import frame from '../../../images/willow.png';

// import frame from '../../../images/maple.png';

export class Articles extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <div className="blog-articles">
          <img className="blog-articles-img" src={frame} alt=""/>
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

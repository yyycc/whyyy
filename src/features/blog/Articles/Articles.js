import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import ChangeFont from '../Components/ChangeFont/ChangeFont';
import PostFooter from '../Components/PostFooter/PostFooter';
// import frame from '../../../images/flower-2.png';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import day from '../../../images/willow.png';
import night from '../../../images/sakura.png';

// import frame from '../../../images/maple.png';

export class Articles extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    debugger;
    const pathname = this.props.location.pathname;
    const { posts, mode, fontSize } = this.props.blog;
    const display = posts.some((ele) => ele.route === pathname);
    return (
      <div>
        <BreadCrumb props={this.props}/>
        <div className="blog-articles">
          <img className="blog-articles-img" src={mode === 'day' ? day : night} alt=""/>
          <ChangeFont props={this.props}/>
          {React.cloneElement(this.props.children, { fontSize: fontSize })}
        </div>
        {display && <div className="blog-articles-footer">
          <PostFooter props={this.props}/>
        </div>}
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

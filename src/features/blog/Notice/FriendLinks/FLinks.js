import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import friends from '../../../../images/friends.jpg';

export class FLinks extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { fontSize } = this.props.blog;
    return (
      <div className="blog-f-links">
        <h1>友请链接</h1>
        <article style={{ fontSize: `${fontSize}px` }}>
          <p>反正链接都在这儿了，自己看吧</p>
          <p><img src={friends} alt='friends'/></p>
        </article>
        <div style={{ backgroundColor: 'white', marginTop: '20px' }}>
          <ul>
            <li>
              <span>
                <a href="https://lovesy.org.cn/" target="_blank" rel="noopener noreferrer">儿女意向来痴</a>
              </span>
            </li>
            <li>
              <span>
                <a href="http://www.zsythink.net/" target="_blank" rel="noopener noreferrer">朱双印的个人博客</a>
              </span>
            </li>
          </ul>
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
)(FLinks);

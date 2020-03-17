import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Link } from 'react-router-dom';

export class TagsIndex extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { tags } = this.props.blog;
    return (
      <div className="blog-tags-index">
        <h3>
          <li>
            <i className="fa fa-bars">&#xf8ff;</i>
          </li>
          标签
        </h3>
        <div className="blog-tags-index-lists">
          {
            tags.map((ele, index) => {
              const route = '/blog/' + ele;
              return <div key={index} className="blog-tags-index-div">
                <li className="blog-tags-index-tag">
                  <Link to={route}>{ele}</Link>
                </li></div>;
            })
          }
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
)(TagsIndex);

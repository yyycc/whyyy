import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

export class TagsIndex extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { tags, international } = this.props.blog;
    const { queryPostsByTag } = this.props.actions;
    return (
      <div className="blog-tags-index">
        <h3>
          <li>
            <i className="fa fa-bars"/>
          </li>
          标签
        </h3>
        <div className="blog-tags-index-lists">
          {
            tags.map((ele, index) => {
              const name = international[ele] ? international[ele] : ele;
              return <div key={index} className="blog-tags-index-div">
                <li onClick={() => queryPostsByTag(ele)} className="blog-tags-index-tag">
                  {name}
                </li>
              </div>;
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Input } from 'antd';

export class SearchIndex extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { Search } = Input;
    const { fuzzyQueryPosts } = this.props.actions;
    return (
      <div className="blog-search-index">
        <h3>
          <li>
            <i className="fa fa-search"/>
          </li>
          全站搜索
        </h3>
        <Search placeholder="搜索文章标题" onSearch={value => fuzzyQueryPosts(value)} enterButton/>
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
)(SearchIndex);

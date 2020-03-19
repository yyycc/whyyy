import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { Anchor } from 'antd';

export class AnchorIndex extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { Link } = Anchor;
    const pathname = this.props.pathname.split('/');
    const name = pathname[pathname.length - 1];
    const titles = this.props.blog.h2[name];
    return (
      <div className="blog-anchor-index">
        <Anchor>
          {titles.map((ele, index) => {
            const href = '#' + name + '-' + (index + 1);
            return <Link href={href} title={ele}></Link>;
          })}
        </Anchor>
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
)(AnchorIndex);

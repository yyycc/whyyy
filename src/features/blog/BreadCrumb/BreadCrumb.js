import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Link } from 'react-router-dom';

export class BreadCrumb extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidUpdate() {
    // 修改title
  }

  render() {
    const props = this.props.props;
    const route = props.location.pathname;
    const { international } = this.props.blog;
    let routes = route.split('/');
    routes.shift();
    return (
      <div className="blog-bread-crumb" style={{ marginTop: `${this.props.blog.top}px` }}>
        <div>
          <li>
            <i className="fa fa-home"/>
          </li>
        </div>
        {routes.map((ele, index) => {
          ele = international[ele] ? international[ele] : ele;
          ele = ele + ' >';
          const newRoutes = routes.slice(0, index + 1);
          const url = '/' + newRoutes.join('/');
          return <div className="blog-bread-crumb-routes" key={index}>
            <li key={index}>
              <Link to={url}>{ele}</Link>
            </li>
          </div>;
        })}
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
)(BreadCrumb);

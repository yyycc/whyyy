import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

export class SimpleTable extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const data = this.props.data;
    const titles = this.props.titles;
    const name = this.props.name;
    return (
      <div className="blog-simple-table">
        <table>
          <thead>
          <tr>
            {titles.map((ele, index) => {
              return <th key={index}>{ele}</th>;
            })}
          </tr>
          </thead>
          <tbody>
          {
            data.map((tr, index) => {
              return <tr key={index}>
                {
                  tr.map((td, i) => {
                    return <td key={i}>{td}</td>;
                  })
                }
              </tr>;
            })
          }
          </tbody>
        </table>
        <div className="blog-simple-table-name">
          <p>{name}</p>
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
)(SimpleTable);

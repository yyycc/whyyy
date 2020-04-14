import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import scroll from '../../../blog/Components/ScrollText/scroll';
import flower from '../../../../images/floating-flowers.png';

export class Sentences extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { sentences } = scroll;
    return (
      <div className="blog-sentences">
        <div className="blog-sentences-list-bg">
          <h1>everyday sentences</h1>
          <div className="blog-sentences-list-img">
            <img src={flower} alt=''/>
            <img src={flower} alt=''/>
            <img src={flower} alt=''/>
            <img src={flower} alt=''/>
          </div>
          <div className="blog-sentences-list-ol">
            <ol className="blog-sentences-list-bg-ol">
              {
                sentences.map((ele, index) => {
                  return <li key={index}>{ele}</li>;
                })
              }
            </ol>
          </div>
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
)(Sentences);

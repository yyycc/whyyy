import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

export class PreFormat extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const content = this.props.content;
    const contents = content.split('\n');
    const lastLine = contents.length - 1;
    return (
      <div className="blog-pre-format">
        {
          contents.map((ele, index) => {
            if (index === 0 && index === lastLine) {
              return <pre key={index}
                          className='only-class'>{ele}<br/></pre>;
            }
            return <pre key={index}
                        className={[index === 0 ? 'first-class' : null, index === lastLine ? 'last-class' : null].join(' ')}>{ele}<br/>
            </pre>;
          })
        }
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
)(PreFormat);

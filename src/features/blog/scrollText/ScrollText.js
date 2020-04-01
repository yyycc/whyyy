import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Link } from 'react-router-dom';

export class ScrollText extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.interval = setInterval((props) => {
        props.actions.scrollBanner('animate');
        setTimeout(() => {
          props.actions.scrollBanner('scroll', props.blog);
        }, 500);
      }
      , 5000, this.props);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  mount() {
    clearInterval(this.interval);
  }

  unMount() {
    this.interval = setInterval((props) => {
      props.actions.scrollBanner('animate');
      setTimeout(() => {
        props.actions.scrollBanner('scroll', props.blog);
      }, 1000);
    }, 5000, this.props);
  }

  render() {
    const { texts, animate } = this.props.blog;
    return (
      <div className="blog-scroll-text">
        <div className="blog-scroll-text-volume">
          <li>
            <i className="fa fa-volume-up"/>
          </li>
        </div>
        <div id="scroll-div">
          <div className="blog-scroll-text-scroll">
            <ul className={animate ? 'blog-scroll-text-scroll-animate' : ''} onMouseOver={() => this.mount()}
                onMouseOut={() => this.unMount()}>
              {texts.map((text, index) => {
                return <li key={index}>
                  <Link to={text['route']}>{text['content']}</Link>
                </li>;
              })}
            </ul>
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
)(ScrollText);

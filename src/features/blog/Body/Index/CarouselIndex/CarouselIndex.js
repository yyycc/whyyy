import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

export class CarouselIndex extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  jump(e, route) {
    e.props.history.push('/blog/' + route);
  }

  render() {
    const { index, images, imageRoutes } = this.props.blog;
    const src = images[index];
    const { changeImage } = this.props.actions;
    return (
      <div className="blog-carousel-index">
        <div>
          <img src={src} alt='pictures' onClick={() => this.jump(this.props, imageRoutes[index])}/>
        </div>
        <ul className="blog-carousel-index-dots">
          {images.map((ele, index) => {
            const className = ele === src ? 'blog-carousel-index-dots-active' : '';
            return <li key={index} className={className}>
              <button onMouseOver={() => changeImage(images, index)}>{index}</button>
            </li>;
          })}
        </ul>
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
)(CarouselIndex);

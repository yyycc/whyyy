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
    const h2 = Array.prototype.slice.call(document.getElementsByTagName('h2'));
    const h3 = Array.prototype.slice.call(document.getElementsByTagName('h3'));
    /*const pathname = this.props.pathname.split('/');
    const order = pathname[pathname.length - 1];
    const name = pathname[pathname.length - 2];
    const titles = this.props.blog.h2[name][order - 1];*/
    return (
      <div className="blog-anchor-index">
        <Anchor affix={false}>
          {h2.map((ele, index) => {
            let href = '#' + ele.id;
            return <Link key={index} href={href} title={ele.innerText}>
              {/*<i onClick={() => changeSubAnchorDisplay(index, name, order - 1, h2)}
                 className={['fa', ele[2] ? 'fa-angle-down' : 'fa-angle-right'].join(' ')}/>
              <div className={[ele[2] ? null : 'blog-anchor-index-block']}>*/}
              {h3.map((e, i) => {
                if (e.id.indexOf(ele.id) > -1) {
                  href = '#' + e.id;
                  return <Link key={i} href={href} title={e.innerText}/>;
                } else {
                  return null;
                }
              })}
            </Link>;
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

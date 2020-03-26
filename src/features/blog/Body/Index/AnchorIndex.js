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
    const order = pathname[pathname.length - 1];
    const name = pathname[pathname.length - 2];
    const h2 = this.props.blog.h2;
    const titles = this.props.blog.h2[name][order - 1];
    const { changeSubAnchorDisplay } = this.props.actions;
    return (
      <div className="blog-anchor-index">
        <Anchor affix={false}>
          {titles.map((ele, index) => {
            const href = '#' + name + '-' + order + '-' + (index + 1);
            if (typeof ele === 'string') {
              return <Link href={href} title={ele}></Link>;
            } else {
              return <Link href={href} title={ele[0]}>
                {/*<i onClick={() => changeSubAnchorDisplay(index, name, order - 1, h2)}
                className={['fa', ele[2] ? 'fa-angle-down' : 'fa-angle-right'].join(' ')}/>*/}
                <div className={[ele[2] ? null : 'blog-anchor-index-block']}>
                  {
                    ele[1].map((e, i) => {
                      const subHref = '#' + name + '-' + order + '-' + (index + 1) + '-' + (i + 1);
                      return <Link href={subHref} title={e}/>;
                    })
                  }
                </div>
              </Link>;
            }
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

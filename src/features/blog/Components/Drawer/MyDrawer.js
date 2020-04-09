import React, { Component } from 'react';
import windbell from '../../../../images/windbell.png';
import lotus from '../../../../images/lotus.png';

export class MyDrawer extends Component {
  static propTypes = {};

  closeDrawer(changeDrawer) {
    changeDrawer(false);
  }

  render() {
    const { changeDrawer } = this.props.action;
    const { drawer } = this.props.blog;
    const id = this.props.id;
    const from = this.props.from;
    const title = this.props.title;
    const className = 'blog-my-draw-' + from;
    let display = id === 'article' ? 'block' : 'none';
    return (
      <div
        className={['blog-my-drawer', 'blog-my-drawer-id-' + id, className, drawer ? 'blog-my-draw-open' : null].join(' ')}>
        <div className="blog-my-drawer-wrapper">
          <div className="blog-my-drawer-content">
            <div className="blog-my-drawer-content-header">
              <p>{title}</p>
            </div>
            <div className="blog-my-drawer-content-body">
              <div className="blog-my-drawer-content-body-image-top" style={{ display: `${display}` }}>
                <img src={windbell} alt=''/>
              </div>
              {this.props.children}
              <div className="blog-my-drawer-content-body-image-bottom" style={{ display: `${display}` }}>
                <img src={lotus} alt=''/>
              </div>
            </div>
            <div className="blog-my-drawer-content-close">
              <a className="blog-my-drawer-a" onClick={() => this.closeDrawer(changeDrawer)}>
                <i className="fa fa-close"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyDrawer;

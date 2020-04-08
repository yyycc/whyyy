import React, { Component } from 'react';

export class MyDrawer extends Component {
  static propTypes = {
  };

  closeDrawer(from) {
    let drawer = document.getElementsByClassName('blog-my-drawer')[0].classList;
    let container = document.getElementsByClassName('blog-layout-container')[0].classList;
    let fix = document.getElementsByClassName('blog-layout-right-bottom-fix')[0];
    if (!!drawer.contains('blog-my-draw-open')) {
      drawer.remove('blog-my-draw-open');
      container.add('blog-layout-container-drawer-close');
      container.remove('blog-layout-container-drawer-open-' + from);
      fix.style.display = 'block';
    }
  }

  render() {
    const from = this.props.from;
    const title = this.props.title;
    const className = 'blog-my-draw-' + from;
    return (
      <div className={['blog-my-drawer', className].join(' ')}>
        <div className="blog-my-drawer-wrapper">
          <div className="blog-my-drawer-content">
            <div className="blog-my-drawer-content-header">
              <p>{title}</p>
            </div>
            <div className="blog-my-drawer-content-body">
              {this.props.children}
            </div>
            <div className="blog-my-drawer-content-close">
              <a className="blog-my-drawer-a" onClick={() => this.closeDrawer(from)}>
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

import React, { Component } from 'react';

export class DrawerBar extends Component {
  static propTypes = {};

  openDrawer(from) {
    let drawer = document.getElementsByClassName('blog-my-drawer')[0].classList;
    let container = document.getElementsByClassName('blog-layout-container')[0].classList;
    let fix = document.getElementsByClassName('blog-layout-right-bottom-fix')[0];
    if (!drawer.contains('blog-my-draw-open')) {
      drawer.add('blog-my-draw-open');
      container.add('blog-layout-container-drawer-open-' + from);
      container.remove('blog-layout-container-drawer-close');
      fix.style.display = 'none';
    }
  }

  render() {
    const from = this.props.from;
    return (
      <div className="blog-drawer-bar">
        <a className="blog-my-drawer-a" onClick={() => this.openDrawer(from)}>
          <i className="fa fa-bars"/>
        </a>
      </div>
    );
  }
}

export default DrawerBar;

import React, { Component } from 'react';

export class DrawerBar extends Component {
  static propTypes = {};

  openDrawer() {
    let drawer = document.getElementsByClassName('blog-my-drawer')[0].classList;
    let container = document.getElementsByClassName('blog-layout-container')[0].classList;
    if (!drawer.contains('blog-my-draw-open')) {
      drawer.add('blog-my-draw-open');
      container.add('blog-layout-container-drawer');
    }
  }

  render() {
    return (
      <div className="blog-drawer-bar">
        <a className="blog-my-drawer-a" onClick={() => this.openDrawer()}>
          <i className="fa fa-bars"/>
        </a>
      </div>
    );
  }
}

export default DrawerBar;

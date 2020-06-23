import React, { Component } from 'react';

export class DrawerBar extends Component {
  static propTypes = {};

  openDrawer(changeDrawer) {
    changeDrawer(true);
  }

  render() {
    const changeDrawer = this.props.changeDrawer;
    return (
      <div className="blog-drawer-bar">
        <a className="blog-my-drawer-a" onClick={() => this.openDrawer(changeDrawer)}>
          <i className="fa fa-bars"/>
        </a>
      </div>
    );
  }
}

export default DrawerBar;

import React, { Component } from 'react';

export class MyDrawer extends Component {
  static propTypes = {
  };

  render() {
    const from = this.props.from;
    const className = 'blog-my-draw-' + from;
    return (
      <div className={['blog-my-drawer', className].join(' ')}>
        <div className="blog-my-drawer-wrapper">
          <div className="blog-my-drawer-content">
            <p>cyyyy</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyDrawer;

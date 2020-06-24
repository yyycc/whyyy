import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Layout extends Component {

  render() {
    const example = this.props.example;
    const pathname = this.props.location.pathname.replace('/css/', '');
    let css, html, title;
    if (example[pathname]) {
      title = example[pathname]['title'];
      css = example[pathname]['css'];
      html = example[pathname]['html'];
    }
    let isColor = pathname === 'color';
    return (
      <div className="css-layout">
        <div className="css-layout-head">
          <div className="css-layout-head-blog-title">
            <p>whyyy his blog</p>
          </div>
          <div className="css-layout-head-title">
            <p>{title}</p>
          </div>
        </div>
        {!isColor && <div className="css-layout-body">
          <div className="css-layout-body-code">
            <h3>代码</h3>
            <div className="css-layout-body-code-content">
              <h4>css代码</h4>
              <pre><code className="css">
                {css}
              </code></pre>
              <h4>html代码</h4>
              <pre><code className="html">
                {html}
              </code></pre>
            </div>
          </div>
          <div className="css-layout-body-effect">
            <h3>效果</h3>
            <div className="css-layout-body-code-effect">
              {this.props.children}
            </div>
          </div>
        </div>}
        {!!isColor && <div className="css-layout-body">
          {this.props.children}
        </div>}
        <div className="css-layout-footer">
          <p>Designed & Powerd by whyyy<br/>
            Copyright © 2020 yyycc</p>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    example: state.css.example,
  };
}

export default connect(
  mapStateToProps,
)(Layout);

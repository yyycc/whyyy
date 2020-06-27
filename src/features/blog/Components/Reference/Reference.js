import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Reference extends Component {
  static propTypes = {};

  render() {
    const { urlStates, titles } = this.props.reference;
    let leaveConfirm = false;
    return (
      <div className="blog-reference">
        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          {urlStates.map((ele, i) => {
            return <div><Link key={i} to={ele}>{titles[i]}</Link></div>;
          })}
        </p>}
        {!leaveConfirm &&
        <p>
          {urlStates.map((ele, i) => {
            return <div><a key={i} href={ele['state']} target="_blank"
                           rel="noopener noreferrer">
              {titles[i]}</a></div>;
          })}
        </p>
        }
      </div>
    );
  }
}

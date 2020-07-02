import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Reference extends Component {
  static propTypes = {
    reference: PropTypes.object.isRequired,
  };

  render() {
    const { urlStates, titles } = this.props.reference;
    let leaveConfirm = false;
    return (
      <div className="blog-reference">
        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <div>
          {urlStates.map((ele, i) => {
            return <Link to={ele}>{titles[i]}</Link>;
          })}
        </div>}
        {!leaveConfirm &&
        <div>
          {urlStates.map((ele, i) => {
            return <div><a key={i} href={ele['state']} target="_blank"
                           rel="noopener noreferrer">
              {titles[i]}</a></div>;
          })}
        </div>
        }
      </div>
    );
  }
}

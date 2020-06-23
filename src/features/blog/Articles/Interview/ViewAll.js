import React, { Component } from 'react';
import ViewOne from './ViewOne';
import ViewTwo from './ViewTwo';
import ViewThree from './ViewThree';
import ViewFour from './ViewFour';

export default class ViewAll extends Component {

  render() {
    return (
      <div className="blog-view-all">
        <ViewOne/>
        <ViewTwo/>
        <ViewThree/>
        <ViewFour/>
      </div>
    );
  }
}

import React, { Component } from 'react';
import tableCode from './tableCode';
import SimpleTable from '../../Components/SimpleTable/SimpleTable';

export default class Number extends Component {
  static propTypes = {};

  render() {
    const { number, numberTitle, numberName } = tableCode;
    return (
      <div className="blog-number">
        <p>(非数值会转为数值，转不了就NaN)</p>
        <SimpleTable titles={numberTitle} data={number} name={numberName}/>
      </div>
    );
  }
}

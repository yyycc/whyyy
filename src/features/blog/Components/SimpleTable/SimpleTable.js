import React, { Component } from 'react';

export class SimpleTable extends Component {

  render() {
    const data = this.props.data;
    const titles = this.props.titles;
    const name = this.props.name;
    return (
      <div className="blog-simple-table">
        <table>
          <thead>
          <tr>
            {titles.map((ele, index) => {
              return <th key={index}>{ele}</th>;
            })}
          </tr>
          </thead>
          <tbody>
          {
            data.map((tr, index) => {
              if (tr.length === 1) {
                return <tr key={index}>
                  <td style={{ color: '#c40000', fontWeight: 'bold' }}>{tr[0]}</td>
                </tr>;
              }
              return <tr key={index}>
                {
                  tr.map((td, i) => {
                    return <td key={i}>{td}</td>;
                  })
                }
              </tr>;
            })
          }
          </tbody>
        </table>
        <div className="blog-simple-table-name">
          <p>{name}</p>
        </div>
      </div>
    );
  }
}

export default SimpleTable;

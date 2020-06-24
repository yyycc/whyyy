import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class BreadCrumb extends Component {

  render() {
    const { top, pathname: route, international } = this.props.bread;
    let routes = route.split('/');
    routes.shift();
    return (
      <div className="blog-bread-crumb" style={{ marginTop: `${top}px` }}>
        <div>
          <li>
            <i className="fa fa-home"/>
          </li>
        </div>
        {routes.map((ele, index) => {
          ele = international[ele] ? international[ele] : ele;
          ele = ele + ' >';
          const newRoutes = routes.slice(0, index + 1);
          const url = '/' + newRoutes.join('/');
          return <div className="blog-bread-crumb-routes" key={index}>
            <li key={index}>
              <Link to={url}>{ele}</Link>
            </li>
          </div>;
        })}
      </div>
    );
  }
}

export default BreadCrumb;

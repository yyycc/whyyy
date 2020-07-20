import React, { Component } from 'react';

export default class MysqlB extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="blog-mysql-b">
        <h2 id='mysql-1'>1. </h2>
        <p>docker镜像拉不下来，网络错误，更换镜像源</p>
        <p>docker pull</p>
        <p>docker run --name mysql -p 3307:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:5.7.30</p>
        <p>就可以在本地环境访问啦</p>
        <p>进入容器</p>
        <p>docker exec -it mysql bash</p>
        <h3 id='-1-1'>1.1. </h3>
        <p></p>
        <p></p>
      </div>
    );
  }
}

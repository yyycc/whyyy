import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import code from './code';
import { PreFormat } from '../../Components/PreFormat/PreFormat';

export class MysqlA extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { codes, systemctl, firewall } = code;
    const { fontSize } = this.props.blog;
    return (
      <div className="blog-mysql-a">
        <h1>mysql(1): centos 7的服务器下安装mysql</h1>
        <article style={{ fontSize: `${fontSize}px` }}>

        <h2 id="mysql-1-1">1. yum源</h2>
        <p>下载mysql源安装包</p>
        <PreFormat content={codes[0]}/>
        <p>安装mysql源</p>
        <PreFormat content={codes[1]}/>

        <h2 id="mysql-1-2">2. 安装mysql</h2>
        <p>安装mysql</p>
        <PreFormat content={codes[2]}/>

        <h2 id="mysql-1-3">3. 开机自启</h2>
        <p>启动MySQL服务并设置开机启动</p>
        <PreFormat content={systemctl}/>

        <h2 id="mysql-1-4">4. 访问mysql</h2>
        <p>到此已经安装好啦可以通过 mysql -u -p 访问，输入密码就行啦</p>
        <PreFormat content={codes[3]}/>

        <h2 id="mysql-1-5">5. 初始密码</h2>
        <p>当然刚安装好，我门不知道初始密码是啥，可以通过下面的命令查看</p>
        <PreFormat content={codes[4]}/>
        <p>登录后先改root密码，初始化的密码要求规则比较复杂，可以先更改一下</p>
        <PreFormat content={codes[5]}/>

        <h2 id="mysql-1-6">6. 修改密码</h2>
        <PreFormat content={codes[6]}/>
        <p>or</p>
        <PreFormat content={codes[7]}/>
        <p>@'localhost'的用户是只支持本地访问的，我们添加一个支持远程访问的用户</p>
        <PreFormat content={codes[8]}/>

        <h2 id="mysql-1-7">7. 创建数据库</h2>
        <PreFormat content={codes[9]}/>

        <h2 id="mysql-1-8">8. 远程连接</h2>
        <PreFormat content={codes[10]}/>
        <p>如果访问不了，那就是端口没开放，mysql默认端口是3306</p>
        <PreFormat content={firewall}/>
        </article>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    blog: state.blog,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MysqlA);

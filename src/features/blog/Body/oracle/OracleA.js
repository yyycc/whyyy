import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { PreFormat } from '../component/PreFormat';
import code from './code';

export class OracleA extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { start, dba, occupy, grand, drop, sql, pkg, excel, oracle, sqls, listen } = code;
    const { fontSize } = this.props.blog;
    return (
      <div className="blog-oracle-a">
        <h1>oracle</h1>
        <body style={{ fontSize: `${fontSize}px` }}>
        <h2 id="oracle-1-1">1. 启动</h2>
        <p>我的oracle是安装在docker容器里面的，所以。。。</p>
        <PreFormat content={start}/>
        <p>偷偷记下来密码：admin</p>

        <h2 id="oracle-1-2">1. 连接数据库</h2>
        <PreFormat content={sqls[0]}/>
        <p>不以任何用户登录(nolog)，之后再输用户名、密码。或者直接sqlplus就行。</p>
        <PreFormat content={sqls[1]}/>
        <p>不要密码的dba登录</p>
        <PreFormat content={sqls[2]}/>
        <p>或者nolog之后</p>
        <PreFormat content={sqls[3]}/>

        <h2 id="oracle-1-3">3. 一些sql</h2>
        <p>我喜欢用Navicat，no feeling for sql developer什么的，所以很多东西没有可视化</p>
        <p>但是最近全是oracle的项目，不得不开始用sql developer，但是这些sql还是在用</p>
        <PreFormat content={dba}/>
        <p>查询表空间占用情况</p>
        <PreFormat content={occupy}/>

        <h2 id="oracle-1-4">4. 数据的导入导出</h2>
        <p>导出(DATA_PUMP_DIR就是一个逻辑地址)</p>
        <PreFormat content={sqls[4]}/>
        <p>导入</p>
        <PreFormat content={sqls[5]}/>
        <p>linux系统导入的时候可能会碰到权限问题，看一下dump文件的读写操作权限，权限不够就chmod 777一哈</p>
        <h2 id="oracle-1-5">5. 创建表空间、用户</h2>
        <p>创建表空间</p>
        <PreFormat content={sqls[6]}/>
        <p>创建用户</p>
        <PreFormat content={sqls[7]}/>

        <h2 id="oracle-1-6">6. 授权</h2>
        <PreFormat content={grand}/>

        <h2 id="oracle-1-7">7. 删除用户、表空间</h2>
        <PreFormat content={drop}/>

        <h2 id="oracle-1-8">8. 表备份</h2>
        <p>表名 sys_user</p>
        <PreFormat content={sqls[8]}/>

        <h2 id="oracle-1-9">9. 执行脚本文件</h2>
        <p>将多个sql语句放到test.sql文件中</p>
        <PreFormat content={sql}/>
        <p>或者以.pck结尾的包脚本 test.pck</p>
        <p>放到某个目录下 ~/test</p>
        <PreFormat content={pkg}/>
        <p>如果执行报错，可以执行show error，看具体错误。</p>

        <h2 id="oracle-1-10">10. sql结果导入excel</h2>
        <PreFormat content={excel}/>
        <p>可以直接放进一个sql脚本中执行，当前目录下就会生成一个test.xls文件。</p>
        <h2 id="oracle-1-11">11. 实例启动</h2>
        <p>数据库实例的启动、结束指令</p>
        <PreFormat content={oracle}/>
        <h2 id="oracle-1-12">12. 监听</h2>
        <p>监听的启动、结束指令</p>
        <PreFormat content={listen}/>
        </body>
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
)(OracleA);

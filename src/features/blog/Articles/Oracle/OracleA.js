import React, { Component } from 'react';
import { PreFormat } from '../../Components/PreFormat/PreFormat';
import code from './code';
import url from './urls';
import { Link } from 'react-router-dom';

export class OracleA extends Component {
  static propTypes = {};

  render() {
      const {
          start, dba, occupy, grand, drop, sql, pkg, excel, oracle, sqls,
          listen, compile, lock, unlock, sequence, increment, dropSequence, selectCur, selectNext,
      } = code;
    const { urlStates } = url;
    let leaveConfirm = true;
    return (
      <div className="blog-oracle-a">
        <h2 id="oracle-1-1">1. 启动</h2>
        <p>我的oracle是安装在docker容器里面的，所以。。。</p>
        <PreFormat content={start}/>
        <p>偷偷记下来密码：admin</p>

        <h2 id="oracle-1-2">2. 连接数据库</h2>
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
        <p>导出(DATA_PUMP_DIR就是一个逻辑地址，存在dba_directories里)</p>
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
        <h2 id="oracle-1-13">13. 批量编译</h2>
        <p>当数据库重新导入，新导入的过程、视图等会存在无效的状态，需要重新编译，下面是一个批量重新编译的sql</p>
        <PreFormat content={compile}/>
          <h2 id="oracle-1-14">14. 锁</h2>
          <p>查看锁表进程</p>
          <PreFormat content={lock}/>
          <p>杀掉锁表进程：</p>
          <p>记录下SID和serial# ，分别替换掉下面的1155,39095，即可解除锁表</p>
          <PreFormat content={unlock}/>
          <h2 id="oracle-1-15">15. 序列</h2>
          <p>新建</p>
          <PreFormat content={sequence}/>
          <p>删除</p>
          <PreFormat content={dropSequence}/>
          <p>更新步长</p>
          <PreFormat content={increment}/>
          <p>获取当前/下一个序列值</p>
          <PreFormat content={selectCur}/>
          <PreFormat content={selectNext}/>

          <h2 id="oracle-1-16">16. 同义词</h2>
          <p style={{ color: '#c40000', fontSize: '12px', marginBottom: '1px' }}>更新于2020-04-29</p>
          <p>昨天业务小哥重置了一个序列A_S，结果发现另一个序列B_S也被重置了，然后我就去找，但是咋都找不到这个序列。</p>
          <p>.nextval可以取到值，但是drop不了，说不存在这个序列，但是create又说对象被占用。。。</p>
          <p>我找啊找，终于在同义词里面找到了它。</p>
          <p>这两个序列其实都是同义词，他们有同一个BASE_OBJECT(序列C_S)</p>

        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[0]}>1. Oracle对象批量编译</Link><br/>
            <Link to={urlStates[3]}>2. Oracle中创建、修改、删除序列</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://blog.csdn.net/WMSOK/article/details/78891457" target="_blank"
             rel="noopener noreferrer">
            1. Oracle对象批量编译</a><br/>
            <a href="https://www.cnblogs.com/nicholas_f/articles/1525585.html" target="_blank"
               rel="noopener noreferrer">
                2. Oracle中创建、修改、删除序列</a><br/>
        </p>
        }
      </div>
    );
  }
}

export default OracleA;

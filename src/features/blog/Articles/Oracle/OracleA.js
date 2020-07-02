import React, { Component } from 'react';
import { PreFormat } from '../../Components/PreFormat/PreFormat';
import code from './code';
import url from './urls';
import { Link } from 'react-router-dom';
import extractValueImg from '../../../../images/extractvalue.gif';

export class OracleA extends Component {

  render() {
    const {
      start, dba, occupy, grand, drop, sql, pkg, excel, oracle, sqls, formats,
      listen, compile, lock, unlock, sequence, increment, dropSequence, selectCur, selectNext,
      extract, extractValue, extractValue2, packages, synonym, synonym_delete, user,
    }
      = code;
    const { urlStates } = url;
    let leaveConfirm = true;
    return (
      <div className="blog-oracle-a">
        <h2 id="oracle-1-1">1. docker中启动数据库</h2>
        <p>我的oracle是安装在docker容器里面的，所以。。。</p>
        <PreFormat content={start}/>
        <p>偷偷记下来密码：admin</p>

        <h2 id="oracle-1-2">2. 连接数据库</h2>
        <PreFormat content={sqls[0]}/>
        <p>不以任何用户登录(nolog)，之后再输用户名、密码。或者直接sqlplus就行。</p>
        <PreFormat content={sqls[1]}/>
        <p>用户登录</p>
        <PreFormat content={sqls[13]}/>
        <p>不要密码的dba登录</p>
        <PreFormat content={sqls[2]}/>
        <p>或者nolog之后</p>
        <PreFormat content={sqls[3]}/>
        <p>我本地这样会报错：ORA-01031: insufficient privileges</p>

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
        <p>经常出现"无法删除当前已连接的用户"，又不知道还有什么地方连着这个用户</p>
        <p>查出进程把他们kill调</p>
        <PreFormat content="select sid, serial# from v$session where username='用户名';"/>
        <PreFormat content="alter system kill session '151, 51';"/>

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
        <p style={{ color: '#c40000', fontSize: '12px', marginBottom: '1px' }}>更新于2020-05-12</p>
        <p>如果内容输出不全，比如有clob字段，可以加上一句</p>
        <PreFormat content={sqls[12]}/>

          <h2 id="oracle-1-11">11. 实例重启</h2>
          <p>先以dba身份进入sqlplus</p>
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

        <h2 id="oracle-1-17">17. 密码期限</h2>
        <p>检查显示信息中历史库用户对应的profile。一般都为DEFAULT</p>
        <PreFormat content={sqls[9]}/>
        <p>检查概要文件（默认为default）的密码有效期设置。</p>
        <PreFormat content={sqls[10]}/>
        <p>如果limit列有数字值，那就是有期限的，如果是unlimited，就是没有期限</p>
        <p>执行如下指令就可以改成无期限的：</p>
        <PreFormat content={sqls[11]}/>

          <p style={{ color: '#c40000', fontSize: '12px', marginBottom: '1px' }}>更新于2020-07-02</p>
          <p>最近本地数据库碰到这个问题，也这样做了，但是明明设置成了unlimit，还是一链接就说密码快过期。</p>
          <p>于是就改了两回密码</p>
          <PreFormat content='alter user nw_dev identified by ***;'/>

        <h2 id="oracle-1-18">18. xmltype</h2>
        <p style={{ color: '#c40000', fontSize: '12px', marginBottom: '1px' }}>更新于2020-05-12</p>
        <p>做接口的时候，把报文都存在了类型行XMLTYPE的字段里</p>
        <p>存的时候很开心(java存的)，取的时候就很糟心，这个报文要怎么解析呢</p>
        <p>可以用extract和extractValue函数</p>
        <PreFormat content={extract}/>
        <p>这个方法可以获取到整个faultstring节点信息： &lt;faultstring&gt;错误信息&lt;/faultstring&gt;</p>
        <p>查出来的值还是xmltype类型的</p>
        <PreFormat content={extractValue}/>
        <p>这个方法可以获取到faultstring节点值： 错误信息</p>
        <p>这个方法查出来的值是就是基础类型</p>
        <p>两个方法都有三个参数</p>
        <p>第一个就是xmltype的数据</p>
        <p>第二个是XPath参数，它有点像节点树，从根节点一直枚举到你要查询的节点</p>
        <p>第三个参数官方文档(参考5)里一开始没找到，是在参考4里面看到的，这个参数是命名空间，你在第二个参数中枚举的节点中如果有命名空间就要在这个参数里面列举出来，中间用空格分开。</p>
        <PreFormat content={extractValue2}/>
        <p>soapenv:Envelope和ns1:Fault节点都有命名空间，所以把两个都写在参数3里面，这样就可以解析出faultString节点的值啦。</p>
        <p>后来看到了这张图，嗯，虽然没给例子，但是确实告诉你可以有第三个参数了。。。</p>
        <div className="blog-oracle-a-img">
          <img src={extractValueImg} alt="EXTRACTVALUE语法"/>
          <br/>
          <p>图1. EXTRACTVALUE语法</p>
        </div>
        <h2 id="oracle-1-19">19. sql格式化</h2>
        <p>写sql的时候经常碰到，日期/数字格式化</p>
        <p>一般都是：tochar([字段], [format格式])</p>
        <p>这边列举一下常用的</p>
        <PreFormat content={formats[0]}/>
        <PreFormat content={formats[1]}/>
        <PreFormat content={formats[2]} classNmae=''/>
        <PreFormat content={formats[3]}/>
        <p>如果采用...999.00结果就是.00</p>
        <p style={{ color: '#c40000', fontSize: '12px', marginBottom: '1px' }}>更新于2020-06-22</p>

        <h2 id="oracle-1-20">20. WM_CONCAT</h2>
        <p>因为项目上用到了这个函数，这个坑我真的是踩了一万遍了，记录一下。。。</p>
        <p>首先创建wmsys用户</p>
        <PreFormat content={user}/>
        <p>登录wmsys用户创建包，包体和函数</p>
        <PreFormat content={packages}/>
        <p>创建同义词并授权</p>
        <PreFormat content={synonym}/>
        <p>如果要删除同义词(创建错了要删除的话)</p>
        <PreFormat content={synonym_delete}/>
        <p>就ok啦</p>

        <h2 id="oracle-1-21">21. 中文乱码</h2>
        <p>sqlplus执行sql时,会有中文乱码。</p>
        <p>查看Oracle服务端的字符集</p>
        <PreFormat content="select userenv('language') from dual;"/>
        <p>AMERICAN_AMERICA.AL32UTF8</p>
        <p>设置环境变量</p>
        <PreFormat content="export NLS_LANG=AMERICAN_AMERICA.AL32UTF8"/>
        <p>再执行sql就ok啦</p>
        <p>但是export设置环境变量是一时的，登出就没有了，要永久生效得把环境变量写进配置文件里。</p>
        <p>在/etc/profile文件最下面加上export NLS_LANG=AMERICAN_AMERICA.AL32UTF8，保存。</p>
        <p>执行source /etc/profile 使配置文件生效。</p>

          <h2 id="oracle-1-22">22. 日期处理</h2>
        <p>当月最后一天</p>
        <PreFormat content='lastday(sysdate)'/>
        <p>下月第一天</p>
        <PreFormat content='lastday(sysdate) + 1'/>
        <p>如果时分秒要0就加个trunc函数</p>
        <PreFormat content='trunc(lastday(sysdate) + 1)'/>
        <p>本月第一天</p>
        <PreFormat content="trunc(sysdate, 'mm')"/>
        <p>本周第一天(周一，不加1就是周日)</p>
        <PreFormat content="trunc(sysdate, 'd') + 1"/>
        <p>本年第一天</p>
        <PreFormat content="trunc(sysdate, 'yyyy')"/>

          <h2 id="oracle-1-23">23. 连接数</h2>
          <p>今天突然就无法用dba链接数据库了，但是另一个用户链接就好好的。</p>
          <p>用终端登录试了一下，报错了：maximum number of processes (100) exceeded </p>
          <p>故名思意就是连接数太多了。查一下连接</p>
          <PreFormat content="select sid,serial#,username,program,machine,status from v$session;"/>
          <p>居然有九十多条。。。而看那个报错，目前设置的最大100，所以要改一下</p>
          <PreFormat content="alter system set processes=500 scope = spfile;"/>
          <PreFormat content="create pfile from spfile;"/>
          <PreFormat content="show parameter processes;"/>
          <p>改完了直接show发现没变化，需要重启书库(见11. 实例重启)，重启之后再show一下，变成500了，也可以正常连接数据库啦。</p>


        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[0]}>1. Oracle对象批量编译</Link><br/>
          <Link to={urlStates[3]}>2. Oracle中创建、修改、删除序列</Link><br/>
          <Link to={urlStates[4]}>3. Oracle数据库密码有效期参数</Link><br/>
          <Link to={urlStates[5]}>4. oracle解析xml，带命令空间的节点获取</Link><br/>
          <Link to={urlStates[6]}>5. XMLType操作</Link><br/>
          <Link to={urlStates[7]}>6. 使用sqlplus执行sql时，发现有中文有乱码解决方法</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://blog.csdn.net/WMSOK/article/details/78891457" target="_blank"
             rel="noopener noreferrer">
            1. Oracle对象批量编译</a><br/>
          <a href="https://www.cnblogs.com/nicholas_f/articles/1525585.html" target="_blank"
             rel="noopener noreferrer">
            2. Oracle中创建、修改、删除序列</a><br/>
          <a href="https://www.cnblogs.com/xgxhellboy/archive/2013/06/14/3135005.html" target="_blank"
             rel="noopener noreferrer">
            3. Oracle数据库密码有效期参数</a><br/>
          <a href="https://blog.csdn.net/liu22985342/article/details/54669490" target="_blank"
             rel="noopener noreferrer">
            4. oracle解析xml，带命令空间的节点获取</a><br/>
          <a href="https://docs.oracle.com/cd/B19306_01/appdev.102/b14259/xdb04cre.htm#BABDGFFH" target="_blank"
             rel="noopener noreferrer">
            5. XMLType操作</a><br/>
          <a href="https://blog.csdn.net/fyyinjing/article/details/77877239" target="_blank"
             rel="noopener noreferrer">
            6. 使用sqlplus执行sql时，发现有中文有乱码解决方法</a><br/>
        </p>
        }
      </div>
    );
  }
}

export default OracleA;

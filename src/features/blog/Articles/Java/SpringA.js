import React, { Component } from 'react';
import code from './code';
import PreFormat from '../../Components/PreFormat/PreFormat';
import SimpleTable from '../../Components/SimpleTable/SimpleTable';
import tableCode from './tableCode';
import urls from '../WebService/urls';
import { Link } from 'react-router-dom';

export class SpringA extends Component {

  render() {
    const { codes } = code;
    const { propagation, propagationName, propagationTitles } = tableCode;
    let leaveConfirm = true;
    const { urlStates } = urls;
    return (
      <div className="blog-spring-a">
        <p>service中存在众多业务逻辑，往往一个方法中就涉及多个增删改，当一个ddl报错，我们肯定希望之前执行的回滚，之后的不再执行，</p>
        <p>这样才能保证事务的一致性。不然我只记录账上少了100，没有记录这个100的去处，账就崩了。</p>

        <h2 id="spring-1-1">1. @Transactional</h2>
        <p>在每个service类上都加上这么一个注解</p>
        <p>那么这个service中的所有方法，报错就会回滚。</p>
        <PreFormat content={codes[0]}/>
        <p>但是这个就存在问题，因为一个service下面的众多方法不是都需要事务支持的，有很多查询方法完全不需要事务，</p>
        <p>而将@Transactional注释在类上，就相当于将每个方法都纳入事务管理。会影响性能。</p>

        <p>所以最好不要再接口上加@Transactional注解，而是在每个具体的方法上加注解。</p>

        <p>查询的方法上可以这么写(没试过。。。)</p>
        <PreFormat content={codes[1]}/>

        <h2 id="spring-1-2">2. 注意事项</h2>
        <p>使用@Transactional注解的，只能是public，@Transactional注解的方法都是被外部其他类调用才有效，故只能是public。</p>
        <p>在 protected、private 或者 package-visible 的方法上使用 @Transactional 注解，它也不会报错，但事务无效。</p>

        <h2 id="spring-1-3">3. Propagation</h2>
        <SimpleTable titles={propagationTitles} data={propagation} name={propagationName}/>

        <p style={{ color: '#c40000', fontSize: '12px', marginBottom: '1px' }}>更新于2020-03-23</p>
        <p>说一下这个REQUIRES_NEW(因为今天用到了。。。)</p>
        <p>我是在什么情况下用到的呢，就是父事务是要回滚的，但是其中有一个子事务不能回滚，无论如何都得执行，那么就给这个子事务加上REQUIRES_NEW。</p>
        <p>新起一个事务，就不受原事务的影响了。</p>
        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[0]}>1. Spring中propagation的7种事务配置</Link><br/>
          <Link to={urlStates[1]}>2. @Transactional事务几点注意</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://blog.csdn.net/sayoko06/article/details/79164858" target="_blank"
             rel="noopener noreferrer">
            1. Spring中propagation的7种事务配置</a><br/>
          <a href="https://www.cnblogs.com/happyday56/p/8906443.html" target="_blank"
             rel="noopener noreferrer">2. @Transactional事务几点注意</a>
        </p>
        }
      </div>
    );
  }
}

export default SpringA;

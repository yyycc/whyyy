import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import urls from './urls';
import code from './code';
import PreFormat from '../../Components/PreFormat/PreFormat';
import tableCode from './tableCode';
import { SimpleTable } from '../../Components/SimpleTable/SimpleTable';
import status from '../../../../images/git_status.png';
import transfer from '../../../../images/status_transfer.jpeg';
import zones from '../../../../images/git_zones.jpg';
import { Link } from 'react-router-dom';

export class GitA extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { urlStates } = urls;
    const { codes, user, alias } = code;
    const { config, configTitles, configName } = tableCode;
    const { fontSize, leaveConfirm } = this.props.blog;
    return (
      <div className="blog-git-a">
        <h1>git(1): git的三种级别配置以及常用配置</h1>
        <article style={{ fontSize: `${fontSize}px` }}>

          <h2 id="git-1-1">1. mumbling</h2>
          <p>I was just mumbling. Skip it please</p>
          <p>自从开始工作，就开始用git，我记得第一个国庆的时候的任务，就是看git，还记得当时看的是廖雪峰老师的教程。</p>
          <p>当时基本是啥都不懂，就看个热闹，把看到的指令记录一下就觉得学会了，还觉得很简单。。。</p>
          <p>之后在工作上，用的是idea，基本不敲指令(就git clone拉一下项目)，都是图形化界面，每天也就拉拉代码，提提代码，有时候还会把别人的代码覆盖了，</p>
          <p>也不知道是什么原因，就被告知要先pull再push。。。</p>
          <p>后来上项目了跟着一个小姐姐，她用git bash和git gui，然后我也跟着用。</p>
          <p>再后来到了第二个项目开始知道还有merge呀stash等等，当然知道的多了，犯错的可能性就更大了。</p>
          <p>当时我们是多分支开发的，有一次我用master merge我的本地分支，但我的本地分支并不是最新的，导致好多提交都丢失了，经过了一上午才修复。</p>
          <p>那之后我一般就先本地merge master再push，再在master下merge远程分支了。。。</p>
          <p>再后来买了git的课程看，了解到它是分布式版本管理(*Distributed Version Control
            Systems*)，本地就可以是一个完整的仓库，没有远程也可以正常工作等等虽然是分布式的，但不是去中心化的，每个分布还是需要通过中心进行代码交换的。</p>
          <p>但是中心宕机不会影响本地，本地还是可以继续开发，等中心修复再push就可以了。</p>
          <p>后来小哥哥又给我讲了很多，基本上可以覆盖项目所需了。</p>
          <p>最近开始写blog，git总不能落下，好好梳理一下记录下来吧(我觉得这将会是搭blog以来，最长的一篇文了)。</p>

          <h2 id="git-1-2">2. preparation</h2>
          <p>环境：macos</p>
          <p>git版本：2.20.1</p>
          <p>编辑器：sublime</p>
          <p>diff工具：p4merge</p>
          <p>tips：</p>
          <p>git有一个特别好的地方，就是当你打了个指令，出错了，它会告诉你出错了、为什么出错以及可能的解决指令，一般你执行一下它给你指令，就能解决问题。</p>
          <p>git中，任何已提交的东西几乎都可以被找恢复，而未提交的丢失后很可能再也找不到了。</p>
          <p>另外，当你执行一些rebase呀，merge，reset包括pull的时候，最好先保证本地工作目录是干净的，可以用 stash 暂存，这样最安全，报错的可能性也会小一些。</p>

          <h2 id="git-1-3">3. config</h2>
          <p>安装就不说了，直接从配置开始吧。</p>
          <p>为什么开头要写那么多遍git status呢，因为这真的是git所有指令里(well，我用到的指令里)最难打的一个了。。。</p>
          <p>然而其实通过配置，我完全可以用一个字母替代他。。。两年了，想到这个不觉有些心酸</p>
          <p>前面提到git是分布式的，每个本地都可以作为一个服务器，实现完整的版本管理。</p>
          <p>比如在我的laptop上，我就可以在目录a建一个远程裸仓库A，在目录b分支master开发，在目录c分支dev开发，然后都push到A，从A再pull。</p>
          <p>这个b和c就是两个local，local级别的配置优先级最高，用下面的命令，就可以看到不同本地仓库的配置。</p>
          <p>(注：这个--local只能在git仓库中执行，如果没有仓库就会报错。)</p>
          <PreFormat content={codes[0]}/>
          <p>目录b和目录c可能是由不同的登录用户操作的，所以git还有global(用户)级别的配置，他的优先级低于local。</p>
          <PreFormat content={codes[1]}/>
          <p>此外还有系统级别的配置system，对所有登录用户都有效，优先级最低。</p>
          <PreFormat content={codes[2]}/>
          <p>除了用命令，还可以直接查看配置文件，目录如下：</p>
          <SimpleTable titles={configTitles} data={config} name={configName}/>

          <h3 id="git-1-3-1">3.1. user</h3>
          <p>先说最重要的用户配置吧，这个是必须的，不然之后commit会报错，让你去配置，因为每一次commit都会用到这些信息，并且这些信息会写入commit中，不可更改。一般配global，如果你这个仓库需要不同的用户，就用local。</p>
          <PreFormat content={user}/>
          <p>邮箱配你在用的，这样你的代码有啥问题，就可以发邮件告诉你了。</p>

          <h3 id="git-1-3-2">3.2. core</h3>
          <p>这里可以配置编辑器，我的git默认的编辑器是vim，我改成了 sublime。</p>
          <PreFormat content={codes[3]}/>
          <p>当需要你编辑信息的时候，就会自动打开sublime，-w表示他会等你编辑好保存关闭之后再执行指令，比如</p>
          <PreFormat content={codes[4]}/>
          <p>就会打开sublime，等你保存好关掉就提交了，如果不加-w，会打开sublime，但是直接报错回滚commit了。</p>
          <p>core.autocrlf=input // todo</p>

          <h3 id="git-1-3-3">3.3. alias</h3>
          <p>别名，这是个好东西呀，那些又臭又长的指令，都可以简化，举个例子。</p>
          <PreFormat content={alias}/>

          <h3 id="git-1-3-4">3.4 diff & merge</h3>

          {leaveConfirm && <p>
            <Link to={urlStates[0]}>1.【Git】(1)---工作区、暂存区、版本库、远程仓库</Link><br/>
            <Link to={urlStates[1]}>2. Git官网</Link><br/>
          </p>}
          {!leaveConfirm &&
          <p>
            <a href="https://www.cnblogs.com/qdhxhz/p/9757390.html" target="_blank" rel="noopener noreferrer">
              1.【Git】(1)---工作区、暂存区、版本库、远程仓库</a><br/>
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              2. Git官网</a><br/>
          </p>
          }
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
)(GitA);

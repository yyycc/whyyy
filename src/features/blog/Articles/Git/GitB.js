import React, { Component } from 'react';
import zones from '../../../../images/git_zones.jpg';
import status from '../../../../images/git_status.png';
import transfer from '../../../../images/status_transfer.jpeg';
import code from './code';
import { PreFormat } from '../../Components/PreFormat/PreFormat';
import { Link } from 'react-router-dom';
import urls from './urls';

export class GitB extends Component {
  static propTypes = {
  };

  render() {
    const { urlStates } = urls;
    let leaveConfirm = true;
    const { codes, add, commit } = code;
    return (
      <div className="blog-git-b">
        <h2 id="git-1-1">1. command</h2>
        <p>git的指令千千万，常用的也就那么几个，可以用git help看一下，每个指令的用处都可以看到，这个离线就可以看，非常方便。</p>
        <p>你还可以git help -a 一下，所有的指令都可以看到。</p>
        <p>这边的东西确实非常多，我竟不知道该用一个怎样的顺序来介绍。</p>

        <h3 id="git-1-1-1">1.1. git init</h3>
        <p>那就先用我这个blog项目作为实验对象，用版本管理起来吧。</p>

        <p>其实，之前在搭建的时候按照教程已经用了git，还上传了git hub，但之后push主题的时候一直报错。。。好像不支持我改配置。。。就很难受</p>
        <p>但是，我这个要放到服务器上去的，每次都scp的话太麻烦了，所以还是得传到git hub上，到时候就可以用jenkins部署启动啦。</p>
        <p>到需要git管理的目录下，我这边是 */Users/ever/lasting/ever-blog/public*，初始化git仓库。</p>
        <PreFormat content={codes[5]}/>

        <p>你会看到多了一个.git目录,之前提到的config配置文件就在这个目录里面，还有很多文件，文件夹，具体都是些啥，我们先不看。</p>
        <p>init之后，你就可以在这个目录下执行git的众多指令啦。</p>

        <h3 id="git-1-1-2">1.2. git add</h3>
        <p>当然init只是初始化，所有的文件还没有被git管理起来。用 git add 就可以实现对文件的跟踪啦。</p>
        <PreFormat content={add}/>

        <h3 id="git-1-1-3">1.3. git commit</h3>
        <p>再用git commit 将文件提交到本地仓库</p>
        <PreFormat content={commit}/>

        <p>这边提一句git commit -am，省略了git add步骤，可以直接提交，但是如果是从未被git跟踪过的文件，是不行的，只有git add过的才行。</p>

        <h3 id="git-1-1-4">1.4. 4个区和4种状态</h3>
        <p>上边提到了暂存区、本地仓库，就涉及到了git的四个区：</p>
        <p>工作区(workspace)、暂存区(Index/Stage)、本地仓库(Repository)、远程仓库(Remote)</p>

        <div className="blog-git-a-img">
          <img src={zones} alt="git四大区"/>
          <p>图1. git四大区</p>
        </div>

        <p>git中的文件也有多种状态：</p>
        <p>未跟踪(Untracked)、已入库未修改(Unmodified)、已修改(Modified)、暂存(Staged)、已提交(Committed)</p>
        <div className="blog-git-a-img">
          <img src={status} alt="git文件四种状态"/>
          <p>图2. git文件四种状态</p>
        </div>

        <div className="blog-git-a-img">
          <img src={transfer} alt="状态转变"/>
          <p>图3. 状态转变</p>
        </div>

        <p>实际操作一下，就一目了然啦～</p>
        <p>这边还没有远程仓库，就先到本地仓库为止。</p>

        <p>目前工作目录有文件index，未跟踪状态进行如下操作</p>

        {/*序号|状态(区)|指令/操作|状态(区)
        --|:--:|--:|--:
        1|Untracked(工作目录)|git add index|Staged(暂存区)
        2|Staged(暂存区)|git commit|Committed(本地仓库)
        3|Committed(本地仓库)|edit index|Modified(暂存区)
        4|Modified(暂存区)|git add index|Staged(暂存区)
        5|Staged(暂存区)|
        <font color=#00FFFF> **git reset HEAD**
        </font>
        index|Modified(暂存区)
        6|Modified(暂存区)|
        <font color=#00FFFF> **git checkout - -** </font>
        index|Unmodified(暂存区)
        7|Staged(暂存区)|
          <font color=#00FFFF> **git rm - -cached** </font> index|Untracked(工作目录)

        这边乍一看蛮混乱的，举几个实际例子吧。
        Example 1
        有两个文件file1、file2，我 git add -A 全部放进暂存区了，但是后来我发现这两个文件我必须分开提交，所以我得先把一个unstage，就可以用到第7条或者第5条也行。
        如果这个文件已经commit过了，那么5和7的效果是不一样的，5是把修改的部分从暂存区挪到工作区，而7是直接从暂存区删除整个文件，相当于rm，只是文件内容会保留在工作区，所以7主要是为了rm，而5是为了unstage。
        当你提交了7的操作，那个本地仓库当前版本中就是没有这个文件的。可以用cat-file看，这个我们后面说。
        Example 2
        文件file1我提交了一次，之后又做了修改，后来这些修改我都不想要了，就可以用到6，恢复到和本地仓库一样的状态；
        我又修改了file1，add了之后，又修改了，这时候执行6，就会回到add之后的状态。
        所以6就是用于删掉工作目录的修改，这部分未被跟踪的修改是无法恢复的，所以使用时要确认自己确实不要这部分修改了，不然还是建议先commit。

        *(Ps：为什么关于几个状态要说这么多呢，其实我最开始在idea中用到git，从来都没有用过git add，也不知道还有暂存区，但是随着项目做得多了，代码写得多了，你会发现，规范很重要，commit message很重要，它能告诉你，告诉别人，这个commit到底做了什么，有时候看到一个commit里面8万个文件，message只有寥寥几个字，真的很气。通过add、commit你可以记录自己开发的历程，不同的方案，很重要。)*

        上述的各种状态都可以通过
          <font color=#00FFFF> **git status** </font>看到，当然配置了alias之后，我可以直接用 git s 啦。
        多打打git status，git不仅会告诉你文件当前状态，还会告诉你你接下去可以执行的操作，非常人性化。

        上面提到了 git rm --cached ，如果你完全不想要这个文件了，可以省略 --cached ，直接
          <font color=#00FFFF> **git rm** </font>[file name]。
        如果你想重命名某个文件，你可以rm再创建，或者
          <font color=#00FFFF> **git mv** </font>[old name] [new name]。*/}

        <h3 id="git-1-1-5">1.5. git clone</h3>
        <p>好像有点跑偏，赶紧拉回来，继续说指令</p>
        <p>用git clone可以把远程项目拉到本地，比如下面是我的项目在github上的url，用git clone就可以拉到本地。</p>
        <PreFormat content={codes[6]}/>

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
      </div>
    );
  }
}

export default GitB;

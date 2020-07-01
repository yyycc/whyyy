import React, { Component } from 'react';
import zones from '../../../../images/git_zones.jpg';
import status from '../../../../images/git_status.png';
import transfer from '../../../../images/status_transfer.jpeg';
import code from './code';
import { PreFormat } from '../../Components/PreFormat/PreFormat';
import { Link } from 'react-router-dom';
import urls from './urls';

export class GitB extends Component {

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


          <h2 id="git-1-2">2. using</h2>
          <h3 id="git-1-2-1">2.1. git tag</h3>
          <p>新建tag</p>
          <PreFormat content='git tag -a v1.0 -m "publish 1.0 version"'/>
          <p>建好之后，/.git/refs目录下就会多一个tags目录，tags都存在这里边，现在里面有一个v1.0，看一下他的类型</p>
          <PreFormat content='git cat-file -t v1.0'/>
          <p>类型是tag(类型种类有blob, tree, commit, tag)</p>
          <p>vi看一下内容，发现里面是一串commit ID</p>

          <p>推送到远程服务器</p>
          <PreFormat content='git push origin --tags'/>
          <p>查看所有tag</p>
          <PreFormat content='git tag'/>
          <p>删除tag</p>
          <PreFormat content='git tag -d v1.0'/>
          <p>推送到远程服务器</p>
          <PreFormat content='git push origin :refs/tags/v1.0'/>
          <p>查看tag详细信息</p>
          <PreFormat content='git show v1.0'/>

          <h2 id="git-1-3">3. git worktree</h2>
          <p>在tag指令后面看到了一个名叫worktree的指令，研究了一番发现，是个好东东(再也不用克隆多个仓库啦)～</p>
          <h3 id="git-1-3-1">3.1. description</h3>
          <p>先做个简介(官网description部分的翻译)：</p>
          <p>同一个仓库下，管理多个工作树。</p>
          <p>一个git仓库支持多个工作树，它支持同时切多个分支。
              通过 git worktree add 指令，仓库就会有一个新的工作树。
              这个新的工作树被称为"被链接的工作树"，对应由 git init 或者 git clone产生的"主工作树"。
              一个仓库只有一个"主工作树"(除非是裸仓库)以及0到多个"被链接的工作树"。当你不需要某个"被链接的工作树"，你可以通过 git worktree remove 把它删掉(主工作树不能被remove)。</p>
          <p>如果"被链接的工作树"不是通过 git worktree remove 删掉的，那么跟他相关的仍留在仓库中文件最终会被自动移除，
              或者你可以在任意工作树下执行 git worktree prune 指令来清理所有过时的文件。</p>
          <p>如果"被链接的工作树"在不总是挂载的移动设备或者网络共享上，你可以通过 git worktree lock 指令阻止相关文件被清理，
              执行这个指令的时候，可以加上 --reason 来说明为什么这个工作树要上锁。</p>
          <h3 id="git-1-3-2">3.2. 应用场景</h3>
          <p>上面是官网上对这个指令的描述，我翻译了一下，毕竟网页上的翻译可谓gpbt，看得我万分难受。下面说一下应用场景</p>
          <p>之前在项目上也遇到过，多分支开发，比如我在dev分支进行开发工作，这个时候生产出了个bug，那么就需要从master切一个hot-fix出来改bug。</p>
          <p>但是我本地的工作目录是脏的，我又不想提交，那就只能stash，就很麻烦，可能过一段时间我就把这个stash给忘了。</p>
          <p>当时嫌麻烦，解决方案是再clone一个下来，开俩同时工作，通过远程分支来进行同步，我们一个项目文件大约2.5G，两个就是5G，要是分支更多。。。</p>
          <p>worktree就是来解决这个问题的。</p>
          <h3 id="git-1-3-3">3.3. 应用</h3>
          <p>还是拿我的博客做例子，首先看一下我的worktree</p>
          <PreFormat content="git worktree list"/>
          <p>看一下结果，有一个working tree，这个是git init后自己生成的，上面提到过， git init 或者 git clone都会产生主工作树，除非是裸仓库。</p>
          <p>16d751f 是这个工作树指向的commit ID，后面是分支。</p>
          <PreFormat content="/Users/ever/2020/lasting/blog/whyyy  16d751f [master]"/>
          <p>那么现在我切一个hot-fix出来改个bug，目录是必须给的，一般就跟当前项目平级，所以用../表示当前目录的父目录，后面还可以指定分支(可以切到已有分支，也可以新建一个分支)</p>
          <p>如果是已经有的分支，直接加上分支名，如果是新分支需要加上 -b</p>
          <PreFormat content="git worktree add ../whyyy_hot_fix -b hot_fix"/>
          <p>在用list看一下，就会发现多出来了一个工作树</p>
          <PreFormat content="/Users/ever/2020/lasting/blog/whyyy_hot_fix  16d751f [hot_fix]"/>
          <p>在whyyy/.git目录下也多了一个worktrees文件夹，里面有一个whyyy_hot_fix文件夹(里面有一堆东西，还没细研究)。</p>
          <p>我的blog目录下面多出来了一个whyyy_hot_fix文件夹，这个文件夹只有不到60M，我的原目录有600M(我试过另一个2.5G的项目，生成的工作树只有80M)。把它打开就得到了在hot_fix分支下一个干净的工作目录。</p>
          <p>我就可以在这个干净的目录下改bug啦～</p>
          <p>改完bug，提交代码，我不再需要这棵树了(这边用的是相对路径，所以必须在项目根目录下执行，也可以使用绝对路径，就是git worktree list指令看到的那个路径)</p>
          <PreFormat content="git worktree remove ../whyyy_hot_fix"/>
          <p>失败了，说它dirty，要加上 --force</p>
          <PreFormat content="git worktree remove --force/-f ../whyyy_hot_fix"/>
          <p>whyyy_hot_fix文件夹就没有了，.git目录下的worktrees也没有了</p>
          <p>如果你手动删除了whyyy_hot_fix文件夹，可以再执行一下下面一个指令进行清理，当然也可以不，git会自动帮你清理的(我也不知道它啥时候清理)。</p>
          <PreFormat content="git worktree prune"/>
          <p>还有lock，unlock指令，等有场景要用了再记录吧～</p>
          <p>总的来说，这个指令很棒，省去了我git clone的时间，还节约存储空间，就很nice。</p>

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

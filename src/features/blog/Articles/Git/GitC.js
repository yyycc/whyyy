import React, { Component } from 'react';
import { PreFormat } from '../../Components/PreFormat/PreFormat';
import Reference from '../../Components/Reference/Reference';

export default class GitC extends Component {
  static propTypes = {};

  render() {
    const urlStates = [
      {
        pathname: '/common/leave',
        state: 'https://git-scm.com/',
      },
      {
        pathname: '/common/leave',
        state: 'https://cloud.tencent.com/developer/article/1590377',
      },
    ];
    const titles = ['1. Git官网', '2. 工具系列 | 新鲜 git switch 和 git restore'];
    return (
      <div className="blog-git-c">

        <h2 id="git-1">1. git worktree</h2>
        <p>在tag指令后面看到了一个名叫worktree的指令，研究了一番发现，是个好东东(再也不用克隆多个仓库啦)～</p>
        <h3 id="git-1-1">1.1. description</h3>
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
        <h3 id="git-1-2">1.2. 应用场景</h3>
        <p>上面是官网上对这个指令的描述，我翻译了一下，毕竟网页上的翻译可谓gpbt，看得我万分难受。下面说一下应用场景</p>
        <p>之前在项目上也遇到过，多分支开发，比如我在dev分支进行开发工作，这个时候生产出了个bug，那么就需要从master切一个hot-fix出来改bug。</p>
        <p>但是我本地的工作目录是脏的，我又不想提交，那就只能stash，就很麻烦，可能过一段时间我就把这个stash给忘了。</p>
        <p>当时嫌麻烦，解决方案是再clone一个下来，开俩同时工作，通过远程分支来进行同步，我们一个项目文件大约2.5G，两个就是5G，要是分支更多。。。</p>
        <p>worktree就是来解决这个问题的。</p>
        <h3 id="git-1-3">1.3. 应用</h3>
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

        <h2 id="git-2">2. git remote</h2>
        <p>remote，顾名思义，远程，这个指令就是用来管理远程仓库的</p>
        <p>我们在本地用git管理代码，当想要通过git分享代码，或者需要多人合作开发，就需要通过远程仓库，通常在一个大家都能访问的服务器上。</p>
        <p>我们就用git hub来举例子</p>
        <p>首先在git hub上创建一个仓库，这边就不详细说了，直接上仓库地址。</p>
        <PreFormat content='https://github.com/yyycc/egg.git'/>
        <p>[]表示该参数可省略</p>
        <p>在本地工作目录下，先看一下有没有远程仓库，-v就是显示更详细一点，而且 -v 必须放在remote和子命令(下面的add、show就是子命令)之间</p>
        <PreFormat content='git remote [-v]'/>
        <p>现在还是啥都没有的，那我们来添加一下，origin是远程仓库的简称</p>
        <PreFormat content='git remote add origin https://github.com/yyycc/egg.git'/>
        <p>将本地推到远程master分支</p>
        <PreFormat content='git push -u origin master'/>
        <p>文件就都传到git hub上啦，可以通过show来看远程仓库的详细信息</p>
        <PreFormat content='git remote show origin'/>
        <p>如果远程有更新，可以直接pull，将本地仓库和远程仓库（本地的）更新为远程的最新版本</p>
        <PreFormat content='git pull'/>
        <p>也可以使用fetch+merge</p>
        <p>先fetch，更新本地远程仓库的代码为最新的，本地仓库的代码还未被更新</p>
        <PreFormat content='git fetch'/>
        <p>再通过merge将两个版本合并，跟合并分支一样将远程的master merge到本地的master</p>
        <PreFormat content='git merge origin/master'/>
        <p>还可以添加多个远程仓库，只要pull/push的时候指定仓库名，就可以操作指定的远程仓库啦。</p>

        <h2 id="git-3">3. git switch</h2>
        <p>看description的时候我就有点蒙，switch branches，这不是checkout的活儿么。</p>
        <p>了解到：git switch 和git store 发布于Git的新版本2.23(旧版本执行不了switch的，要用的话得升级哦)，用来替代git checkout。</p>
        <p>git checkout 的核心功能包括两个方面，一个是分支的管理，一个是文件的恢复。这两个核心功能，未来将由 git switch 和 git restore 分别负责。</p>
        <p>挺好的，又多了俩指令～～这边就把checkout switch都讲一下吧</p>
        <h3 id="git-3-1">3.1. 分支管理</h3>
        <p>创建并切换到新分支</p>
        <PreFormat content='git checkout -b dev'/>
        <p>or</p>
        <PreFormat content='git switch -c dev'/>
        <p>切换到已有分支</p>
        <PreFormat content='git checkout dev'/>
        <p>or</p>
        <PreFormat content='git switch dev'/>
        <p>以后就用switch吧</p>

        <h2 id="git-4">4. git restore</h2>
        <p>说完switch就说restore吧，还是从官方文档说起。</p>
        <p>首先，我看到这么一句</p>
        <strong>THIS COMMAND IS EXPERIMENTAL. THE BEHAVIOR MAY CHANGE.</strong>
        <p>忍不住竖起大拇指，夸一句nice。。。</p>
        <p>我是用，还是不用呢？</p>
        <p>先看看吧</p>

        <h2 id="git-4-1">4.1. after add</h2>
        <p>之前(git(2))里面提到过，git add之后文件就被staged了</p>
        <p>可以利用restore来进行unstage，回到git add 之前的状态</p>
        <PreFormat content='git restore --staged ever.js'/>

        <h2 id="git-4-2">4.2. after commit</h2>
        <p>如果不仅add，还commit了呢</p>
        <PreFormat content='git restore  -s HEAD~1 ever.js'/>
        <p>将版本回退到当前快照的前一个版本。这个时候ever.js就变成这次修改之前的样子。</p>
        <p>但是注意哦，这并没有删掉commit，他还是存在的。</p>
        <p>如果要删除commit，要用rebase，给要删除的commit的父commit的ID</p>
        <PreFormat content='git rebase  -i [commit iD]'/>
        <p>然后会弹出一个操作框，里面有很多注释，用drop [commit iD]，要删除的commit的ID。就可以吧这个commit删除啦(跑题了。。。)。</p>


        <Reference reference={{ urlStates, titles }}/>
      </div>
    );
  }
}

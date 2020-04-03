const codes = [
  'git config --list --local',
  'git config --list --global',
  'git config --list --system',
  'git config --global core.editor \'subl -w\'',
  'git commit',
  'git init',
  'git clone https://github.com/yyycc/ever.git',
];

const user = '$ git config --global user.name \'ever\'\n' +
  '        $ git config --global user.email \'89******2@qq.com\'';

const alias = '$ git config --global alias.ca \'commit --amend\'\n' +
  '        $ git config --global alias.l "log --graph --all --pretty=format:\'%C(yellow)%h%C(cyan)%d%Creset %s %C(white)-\n' +
  '        %an, %ar%Creset\'" //里面有单引号所以外面用双引号';

const add = 'git add [file_name] 将file_name添加到暂存区\n' +
  'git add -u 将已被git管理过的又修改了的文件添加到暂存区\n' +
  'git add . 将当前目录下的所有文件添加到暂存区\n' +
  'git add -A 将所有文件添加到暂存区';

const commit = 'git commit    // 会自动打开你配置好的编辑器\n' +
  'git commit -m \'writing your commit message here\'';

const code = {
  user,
  codes,
  alias,
  add,
  commit,
};

export default code;

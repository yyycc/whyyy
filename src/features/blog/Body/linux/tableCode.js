const vi = [
  ['vi + [file_name]', '进入编辑器'],
  ['i', '进入编辑状态'],
  ['esc', '退出编辑状态'],
  [':q!', '不保存退出'],
  [':wq', '保存退出'],
  ['跳转'],
  ['G', '跳到最后一行'],
  ['gg', '跳到第一行'],
  ['$', '跳到行尾'],
  ['0 / ^', '跳到行首'],
  ['ngg', '跳到第n行'],
  ['删除'],
  ['dd', '删除光标所在行'],
  ['ndd', '删除包括光标所在行以下n行'],
  ['d + $', '删除光标所在处到行尾的所有数据'],
  ['d + 0', '删除光标所在处到行首的所有数据'],
  ['行号'],
  [':set number/nu', '显示行号'],
  [':set nonumber/nonu', '不显示行号'],
  ['查找'],
  ['/ + [key] + 回车', '查找key'],
  ['n', '查看下一个匹配'],
  ['shift + n', '查看上一个匹配'],
  ['more'],
  ['u', '复原前一个动作'],
  ['.', '重复前一个动作'],
];

const viTitles = ['指令', '功能'];

const viName = '表1. vi';

const cpTitles = ['指令', '功能'];
const cpName = '表2. cp';
const cp = [
  ['基础的指令', '复制文件'],
  ['cp ~/lasting/cp-test-1/a ~/lasting/cp-test-2(/another_name)', '把ONE下的a复制到TWO下，括号里是给定复制出来的文件的名字，默认值是源文件文件名'],
  ['参数'],
  ['-i', '覆盖已经存在的目标文件时，给出提示(我本地不加参数时默认是不给提示的)'],
  ['-f', '覆盖已经存在的目标文件而不给出提示'],
  ['-r', '若给出的源文件是一个目录文件，此时将复制该目录下所有的子目录和文件'],
  ['-r 复制文件夹'],
  ['cp -r ~/lasting/cp-test-1 ~/lasting/cp-test-2(/)', '将ONE复制到TWO下'],
  ['cp -r ~/lasting/cp-test-1/ ~/lasting/cp-test-2(/)', '将ONE下的所有复制到TWO下'],
  ['相关指令 scp/docker cp'],
  ['scp local_file remote_username@remote_ip:remote_file'],
  ['主要就是加上了 远程服务器/容器名 再加上 冒号'],
  ['scp ~/lasting/cp-test-1/a  root:/usr/local', 'root是配置了的远程linux服务器'],
  ['docker cp ~/lasting/cp-test-1/a  oracle:/usr/local', 'oracle是docker容器名字'],
];

const tailTitles = ['指令', '功能'];
const tail = [
  ['tail -f file', '当某些行添加至文件时，会继续显示这些行'],
  ['tail -c 10 file', '显示file内容，最后10个字符'],
  ['tail +10 file', '显示file内容，从第十行至末尾'],
  ['tail -n -10 file', '显示file内容，从第十行至末尾'],
];
const tailName = ['表3. tail'];

const tableCode = {
  tail, tailName, tailTitles,
  vi, viName, viTitles,
  cp, cpName, cpTitles,
};

export default tableCode;

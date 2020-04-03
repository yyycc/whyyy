const codes = [
  'tail -f ./logs/catalina.out',
  'netstat -anp|grep 4000',
  'find . -type f | xargs grep -l \'abc\'',
  'find . -name "my*"',
  'grep -rnRi 指定的内容 * | awk -F":" \'{print $1}\'',
  'tar -cvf cyy.tar ～/cyy',
  'tar -xvf cyy.tar',
  'git config --list > config',
  'echo -e "\\033[43;31mever\\033[0m"',

];
const code = {
  codes,
};

export default code;

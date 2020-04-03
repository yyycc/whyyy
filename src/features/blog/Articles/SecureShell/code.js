const codes = [
  'vi /etc/ssh/sshd_config',
  '/sbin/service sshd restart',
  'ssh-keygen -t rsa',
  'scp root@ever:~/.ssh/id_rsa /usr/local/aliyun/SSH-ever-vultr-private',
];
const config = 'RSAAuthentication yes\n' +
  'PubkeyAuthentication yes\n' +
  'AuthorizedKeysFile .ssh/authorized_keys';

const localConfig = 'Host ever // 自定义服务名\n' +
  'HostName ip地址\n' +
  'Port 22\n' +
  'User root  //登录用户\n' +
  'IdentityFile    /usr/local/aliyun/SSH-ever-vultr-private   //本地密钥';

const code = {
  codes,
  config,
  localConfig,
};


export default code;

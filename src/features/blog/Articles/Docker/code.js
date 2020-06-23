const docker = 'docker ps -a          //查看所有的容器\n' +
  'docker ps             //查看所有运行的容器\n' +
  '// 后来变成了\n' +
  'docker container ls   //查看所有运行的容器\n' +
  'docker start oracle\n' +
  'docker container ls';

const ssh = 'ssh root@127.0.0.1 -p 49160\n' +
  'password';

const codes = [
  'ssh root@127.0.0.1 -p 49160',
  '#AuthorizedKeysFile      %h/.ssh/authorized_keys',
  '/etc/init.d/ssh restart',
  'ssh ora',
  'docker cp oracle:/etc/ssh/ssh_host_rsa_key /usr/local/ssh_host_rsa_key',
  'docker exec -it oracle /bin/bash',

  'docker pull tomcat:jdk8-adoptopenjdk-openj9',
  'docker run -d --name tomcat -p 7080:7080 -p 8090:8090 8e6064eb6bcd',
  'docker ps -a',
  'docker exec -it tomcat /bin/bash',
  'docker run -it -d -p8888:8080 tomcat',
  'docker exec -it tomcat /bin/bash',
  'docker restart tomcat',
];

const yum = 'apt-get update\n' +
  'apt-get install vim';

const rm = 'docker rm  <container ID/name>   // 加不加container都可以\n' +
  'docker container rm  <container ID/name>';

const rpm = [
  'rpm -Uvh *.rpm --nodeps --force',
  'rpm -Uvh container-selinux-2.9-4.el7.noarch.rpm',
  'rpm -Uvh docker-ce-18.03.1.ce-1.el7.centos.x86_64.rpm',
  'systemctl start docker',
  'docker ps',
  'docker save gautamsaggar/oracle11g -o  oracle_11g.tar',
];

const docker_codes = [
  'docker pull gautamsaggar/oracle11g:',
  'docker images',
  'docker save gautamsaggar/oracle11g -o  oracle_11g.tar',
  'docker load -i oracle_11g.tar',
  'docker run -d --name oracle -p 49160:22 -p 1521:1521  {IMAGE ID}',
  'ssh root@localhost -p 49160 or ssh root@ -p 49160',
];

const code = {
  docker,
  ssh,
  codes,
  yum,
  rm,
  rpm,
  docker_codes,
};

export default code;

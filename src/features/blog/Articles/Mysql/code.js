const codes = [
  'wget http://dev.mysql.com/get/mysql57-community-release-el7-8.noarch.rpm',
  'yum localinstall mysql57-community-release-el7-8.noarch.rpm',
  'yum install mysql-community-server',
  'mysql -u root -p',
  'grep \'temporary password\' /var/log/mysqld.log',
  'set global validate_password_policy=0;',
  'ALTER USER \'root\'@\'localhost\' IDENTIFIED BY \'******\';',
  'set password for \'root\'@\'localhost\'=password(\'******\');',
  'GRANT ALL PRIVILEGES ON *.* TO \'ever\'@\'%\' IDENTIFIED BY \'******\' WITH GRANT OPTION;',
  'CREATE DATABASE IF NOT EXISTS last DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;',
  'mysql -u ever -h **.**.***.* -p',

];

const systemctl = 'systemctl start mysqld\n' +
  'systemctl enable mysqld\n' +
  'systemctl daemon-reload';

const firewall = 'firewall-cmd --query-port=3306/tcp                //  查看端口是否开放\n' +
  'firewall-cmd --add-port=3306/tcp --permanent      //  开放端口\n' +
  'firewall-cmd --reload                             //  重载入添加的端口\n' +
  'firewall-cmd --permanent --remove-port=3306/tcp   //  移除指定端口';

const code = {
  codes,
  systemctl,
  firewall,
};

export default code;

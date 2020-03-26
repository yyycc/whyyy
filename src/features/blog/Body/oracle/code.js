const start = 'docker start oracle\n' +
  'ssh root@localhost -p 49160  // 49160是docker容器映射出来的端口，用ssh连接docker';

const dba = 'select * from v$version;        // 查数据库版本\n' +
  '$ select * from dba_directories;  // 查出数据库的DATA_PUMP_DIR\n' +
  '$ select * from dba_users; \t   // 查出所有用户\n' +
  '$ select default_tablespace from dba_users where username=‘登录用户’;   // 查看该用户的默认表空间\n';

const occupy = 'select a.tablespace_name,a.total,b.free from( select tablespace_name,sum(bytes)/1024/1024 || \'M\'\n' +
  '        total from dba_data_files\n' +
  '        group by tablespace_name) a,\n' +
  '        ( select tablespace_name,sum(bytes)/1024/1024|| \'M\' free from dba_free_space\n' +
  '        group by tablespace_name) b\n' +
  '        where a.tablespace_name=b.tablespace_name; ';

const grand = 'grant dba to userName;\n' +
  'grant connect to userName;\n' +
  'grant alter session to userName;\n' +
  'grant create any context to userName;\n' +
  'grant create procedure to userName;\n' +
  'grant create sequence to userName;\n' +
  'grant create session to userName;\n' +
  'grant create synonym to userName;\n' +
  'grant create table to userName;\n' +
  'grant create type to userName;\n' +
  'grant create user to userName;\n' +
  'grant create view to userName;\n' +
  'grant create any table to userName;\n' +
  'grant DEBUG CONNECT SESSION to userName;\n' +
  'grant query rewrite to userName;\n' +
  'grant select any dictionary to userName;\n' +
  'grant unlimited tablespace to userName;\n' +
  'grant read,write on directory DATA_PUMP_DIR to userName;';

const drop = 'drop user username cascade;\n' +
  'drop tablespace tablespacename including contents and datafiles;';

const sql = 'begin\n' +
  '...\n' +
  'sql语句\n' +
  '...\n' +
  'commit;\n' +
  'end;\n' +
  '/';

const pkg = 'su - oracl\n' +
  'cd ~/test\n' +
  'sqlplus\n' +
  'username\n' +
  'passworf\n' +
  '@test.sql\n' +
  '@test.pck';

const excel = 'set linesize 1000 pagesize 0 echo off termout off trimout on trimspool on feedback off heading off pause off;\n' +
  'spool test.xls;\n' +
  'select t1.id from test t1;\n' +
  'spool off;\n' +
  'exit';

const oracle = 'shutdown immediat;\n' +
  'startup';

const sqls = [
  'su - oracle',
  'sqlplus / nolog',
  'sqlplus / as sysdba',
  'conn sys as sysdba',
  'expdp userName/pwd@ip:1521/orcl directory=DATA_PUMP_DIR dumpfile=name.DMP logfile=DATA_PUMP_DIR:name.log',
  'impdp userName/pwd remap_schema=source:target remap_tablespace=source:target directory=DATA_PUMP_DIR dumpfile=ZJZL_PROD_SIT20190823.DMP ',
  'CREATE TABLESPACE userName DATAFILE \'/u01/app/oracle/admin/XE/dpdump/userName.dbf\' SIZE 500M AUTOEXTEND ON;',
  'create user name identified by pwd default tablespace userName;',
  'create table sys_user_bak/sys_user_20200114 as select * from sys_user;',
];

const listen = 'lsnrctl stop;\n' +
  'lsnrctl start;\n' +
  'lsnrctl status;\n';

const code = {
  start,
  dba,
  occupy,
  grand,
  drop,
  sql,
  pkg,
  excel,
  oracle,
  sqls,
  listen,
};

export default code;

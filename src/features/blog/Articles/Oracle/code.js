const start = 'docker start oracle\n' +
  'ssh root@localhost -p 49160  // 49160是docker容器映射出来的端口，用ssh连接docker';

const dba = 'select * from v$version;        // 查数据库版本\n' +
  '$ select * from dba_directories;  // 查出数据库的DATA_PUMP_DIR\n' +
  '$ select * from dba_users; \t   // 查出所有用户\n' +
  '$ select default_tablespace from dba_users where username=\'登录用户\';   // 查看该用户的默认表空间';

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
  'startup;';

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
  'select username,profile from dba_users; ',
  'select * from dba_profiles s where s.profile=\'DEFAULT\' and resource_name=\'PASSWORD_LIFE_TIME\'; ',
  'alter profile default limit password_life_time unlimited; ',
];

const listen = 'lsnrctl stop;\n' +
  'lsnrctl start;\n' +
  'lsnrctl status;';

const compile = 'declare\n' +
  '    objowner varchar2(50) := \'nw_dev\';\n' +
  'begin\n' +
  '    for obj in (select * from all_objects where status = \'INVALID\' and object_type in (\'PROCEDURE\', \'FUNCTION\', \'VIEW\', \'TRIGGER\') and owner=upper(objowner))\n' +
  '    loop\n' +
  '        begin\n' +
  '            execute immediate \'alter \' ||obj.object_type|| \' \' ||obj.object_name || \' compile\';\n' +
  '        exception\n' +
  '            when others then\n' +
  '                dbms_output.put_line(sqlerrm);\n' +
  '        end;\n' +
  '    end loop;\n' +
  'end;';

const codes = [
  'grant all on utl_http to nw_dev;',
];

const acl = 'begin\n' +
  '  dbms_network_acl_admin.create_acl\n' +
  '    (acl         => \'/sys/acls/utl_http.xml\', -- 命名\n' +
  '     description => \'request\',           -- 描述\n' +
  '     principal   => \'NW_DEV\',                   -- 要赋权限的用户\n' +
  '     is_grant    => true,                     -- true表示赋权，false表示取消赋权\n' +
  '     privilege   => \'connect\');               -- 权限限制\n' +
  'end;\n' +
  '\n' +
  'begin\n' +
  '  dbms_network_acl_admin.assign_acl\n' +
  '    (acl        => \'/sys/acls/utl_http.xml\', -- 命名\n' +
  '     host       => \'127.0.0.1\',          -- 服务器地址\n' +
  '     lower_port => 1,                       -- 端口从\n' +
  '     upper_port => 10000);                  -- 端口到\n' +
  'end;\n' +
  '\n' +
  'begin\n' +
  '  dbms_network_acl_admin.add_privilege\n' +
  '  (acl       => \'/sys/acls/utl_http.xml\',\n' +
  '   principal => \'NW_DEV\',\n' +
  '   is_grant  => TRUE,\n' +
  '   privilege => \'connect\');\n' +
  '   end;';

const request = 'v_http_req := utl_http.begin_request(g_url_test,\n' +
  '                                     \'POST\',\n' +
  '                                     utl_http.http_version_1_1);';

const lock = 'select * from v$session t1, v$locked_object t2 where t1.sid = t2.SESSION_ID;';

const unlock = 'alter system kill session \'1155,39095\';';

const sequence = 'CREATE SEQUENCE  "TEST_S"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 181 CACHE 20 NOORDER  NOCYCLE ;';

const increment = 'alter sequence TEST_S increment by 100;';

const dropSequence = 'drop TEST_S;';

const selectNext = 'select TEST_S.nextval from dual';
const selectCur = 'select TEST_S.currval from dual';

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
  compile,
  codes,
  acl,
  request,
  lock,
  unlock,
  sequence,
  increment,
  dropSequence,
  selectNext,
  selectCur,
};

export default code;

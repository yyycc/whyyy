const transfer = 'location / {\n' +
  '            if ($request_uri ~* "/cyy") {\n' +
  '                proxy_pass http://ip:8070;\n' +
  '                break;\n' +
  '            }\n' +
  '        }';

const brew = 'brew install nginx';

const services = 'brew services start|restart|stop|status nginx';

const check = 'nginx: the configuration file /usr/local/etc/nginx/nginx.conf syntax is ok\n' +
  'nginx: configuration file /usr/local/etc/nginx/nginx.conf test is successful';

const yum = 'yum install -y nginx';

const tars = 'nginx-1.14.2.tar.gz    \n' +
  'openssl-1.1.1a.tar.gz  \n' +
  'pcre-8.42.tar.gz       \n' +
  'zlib-1.2.11.tar.gz';

const install = './configure  //有的是需要带参数，这里不详了\n' +
  'make\n' +
  'install';

const start = 'service nginx start';

const nginxConfig = '#user  nobody;\n' +
  'worker_processes  1;\n' +
  '\n' +
  '# error_log  logs/error.log;\n' +
  '# error_log  logs/error.log  notice;\n' +
  '# error_log  logs/error.log  info;\n' +
  '\n' +
  '#pid        logs/nginx.pid;\n' +
  '\n' +
  '\n' +
  'events {\n' +
  '    worker_connections  1024;\n' +
  '}\n' +
  'http {\n' +
  '    include       mime.types;\n' +
  '    default_type  application/octet-stream;\n' +
  '\n' +
  '    #log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n' +
  '    #                  \'$status $body_bytes_sent "$http_referer" \'\n' +
  '    #                  \'"$http_user_agent" "$http_x_forwarded_for"\';\n' +
  '\n' +
  '    #access_log  logs/access.log  main;\n' +
  '\n' +
  '    sendfile        on;\n' +
  '    #tcp_nopush     on;\n' +
  '\n' +
  '    #keepalive_timeout  0;\n' +
  '    keepalive_timeout  65;\n' +
  '\n' +
  '    #gzip  on;\n' +
  '    server {\n' +
  '        listen       8092;\n' +
  '        server_name  localhost;\n' +
  '\n' +
  '        #charset koi8-r;\n' +
  '\n' +
  '        #access_log  logs/host.access.log  main;\n' +
  '\n' +
  '        location / {\n' +
  '            root   html;\n' +
  '            index  cyy.html ;\n' +
  '        }\n' +
  '        error_page   500 502 503 504  /50x.html;\n' +
  '        location = /50x.html {\n' +
  '            root   html;\n' +
  '        }\n' +
  '        location ~ \\.php$ {\n' +
  '            root           html;\n' +
  '            fastcgi_pass   127.0.0.1:9000;\n' +
  '            fastcgi_index  index.php;\n' +
  '            fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;\n' +
  '            include        fastcgi_params;\n' +
  '        }\n' +
  '    }\n' +
  '    include servers/*;\n' +
  '}';

const listen = 'location / {\n' +
  '            alias html/public/;\n' +
  '            index index.html;\n' +
  '        }\n' +
  'location / {\n' +
  '            root   html;\n' +
  '            index  cyy.html ;\n' +
  '        }';
const code = {
  transfer,
  brew,
  services,
  check,
  yum,
  tars,
  install,
  start,
  nginxConfig,
  listen,
};

export default code;

import React from 'react';

const config = [
  ['local', '.git/config', '在本地仓库路径下'],
  ['global', '~/.gitconfig', 'macos: /Users/ever      centos: /home/ever'],
  ['system', '/usr/local/etc/gitconfig', '我的路径是这样的，不同的git安装目录，配置文件目录也不同，可以通过which git先看一下git安装目录'],
];

const configTitles = ['配置级别', '配置文件目录', '备注'];

const configName = '表1. git配置级别';

const tableCode = {
  config,
  configTitles,
  configName,
};

export default tableCode;

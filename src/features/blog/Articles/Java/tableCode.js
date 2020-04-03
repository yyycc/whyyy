const propagation = [
  ['REQUIRED', '支持当前事务，如果当前没有事务，就新建一个事务。这是最常见的选择。'],
  ['SUPPORTS', '支持当前事务，如果当前没有事务，就以非事务方式执行。'],
  ['MANDATORY', '支持当前事务，如果当前没有事务，就抛出异常。'],
  ['REQUIRES_NEW', '新建事务，如果当前存在事务，把当前事务挂起。'],
  ['NOT_SUPPORTED', '以非事务方式执行操作，如果当前存在事务，就把当前事务挂起。'],
  ['NEVER', '以非事务方式执行，如果当前存在事务，则抛出异常。'],
  ['NESTED', '支持当前事务，如果当前事务存在，则执行一个嵌套事务，如果当前没有事务，就新建一个事务。'],
];

const propagationTitles = ['事务属性', '解释'];

const propagationName = '表1. 事务属性';

const tableCode = {
  propagation,
  propagationTitles,
  propagationName,
};

export default tableCode;

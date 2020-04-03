const codes = [
  '@Transactional(rollbackFor = Exception.class)',
  '@Transactional(readOnly=true) //配置事务 查询使用 只读',

];
const code = {
  codes,
};

export default code;

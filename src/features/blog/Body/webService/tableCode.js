const annotate = [
  ['@WebService', '标志这是一个webservice服务'],
  ['@WebService(serviceName = "cyy")', '产生的服务的名称'],
  ['@WebService(name = "ss", targetNamespace = "http://core/")', '修改命名空间'],
  ['@WebMethod(operationName = "calc")', '修改方法名称'],
  ['@WebParam(name = "num")', '修改参数名称'],
  ['@WebResult(name = "returnNum")', '修改返回名称'],
  ['@WebMethod(exclude = true)', '将指定的public方法排除，用户将不能访问'],
];

const annotateTitles = ['注解', '作用'];

const annotateName = '表1. webService注解';

const tableCode = {
  annotate,
  annotateTitles,
  annotateName,
};

export default tableCode;

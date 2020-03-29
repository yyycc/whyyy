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

const inInterceptorTitles = ['阶段名称', '阶段功能描述'];
const inInterceptor = [
  ['RECEIVE', 'Transport level processing(接收阶段，传输层处理)'],
  ['(PRE/USER/POST)_STREAM', 'Stream level processing/transformations(流处理/转换阶段)'],
  ['READ', 'This is where header reading typically occurs(SOAPHeader读取)'],
  ['(PRE/USER/POST)_PROTOCOL', ' Protocol processing, such as JAX-WS SOAP handlers(协议处理阶段，例如JAX-WS的Handler处理)'],
  ['UNMARSHAL', 'Unmarshalling of the request(SOAP请求解码阶段)'],
  ['(PRE/USER/POST)_LOGICAL', 'Processing of the umarshalled request(SOAP请求解码处理阶段)'],
  ['PRE_INVOKE', 'Pre invocation actions(调用业务处理之前进入该阶段)'],
  ['INVOKE', 'Invocation of the service(调用业务阶段)'],
  ['POST_INVOKE', 'Invocation of the outgoing chain if there is one(提交业务处理结果，并触发输入连接器)'],
];
const inInterceptorName = ['表1. 拦截器输入阶段'];
const outInterceptorTitles = ['阶段名称', '阶段功能描述'];
const outInterceptor = [
  ['SETUP', 'Any set up for the following phases(设置阶段)'],
  ['(PRE/USER/POST)_LOGICAL', 'Processing of objects about to marshalled'],
  ['PREPARE_SEND', 'Opening of the connection(消息发送准备阶段，在该阶段创建Connection)'],
  ['PRE_STREAM', '流准备阶段'],
  ['PRE_PROTOCOL', 'Misc protocol actions(协议准备阶段)'],
  ['WRITE', 'Writing of the protocol message, such as the SOAP Envelope.(写消息阶段)'],
  ['MARSHAL', 'Marshalling of the objects'],
  ['(USER/POST)_PROTOCOL', 'Processing of the protocol message'],
  ['(USER/POST)_STREAM', 'Processing of the byte level message(字节处理阶段，在该阶段把消息转为字节)'],
];
const outInterceptorName = ['表2. 拦截器输出阶段'];

const tableCode = {
  propagation,
  propagationTitles,
  propagationName,
};

export default tableCode;

const pom = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<project xmlns="http://maven.apache.org/POM/4.0.0"\n' +
  '         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n' +
  '         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n' +
  '    <modelVersion>4.0.0</modelVersion>\n' +
  '\n' +
  '    <groupId>core</groupId>\n' +
  '    <artifactId>ws</artifactId>\n' +
  '    <version>1.0-SNAPSHOT</version>\n' +
  '    <packaging>war</packaging>\n' +
  '    <name>My Cxf Web Service</name>\n' +
  '    <url>http://maven.apache.org</url>\n' +
  '\n' +
  '    <dependencies>\n' +
  '        <dependency>\n' +
  '            。。。\n' +
  '        </dependency>\n' +
  '    </dependencies>\n' +
  '    <build>\n' +
  '        <finalName>ws</finalName>\n' +
  '    </build>\n' +
  '\n' +
  '</project>';

const dependency = '<dependency>\n' +
  '    <groupId>org.apache.cxf</groupId>\n' +
  '    <artifactId>cxf-api</artifactId>\n' +
  '    <version>2.5.0</version>\n' +
  '</dependency>\n' +
  '<dependency>\n' +
  '    <groupId>org.apache.cxf</groupId>\n' +
  '    <artifactId>cxf-rt-frontend-jaxws</artifactId>\n' +
  '    <version>2.5.0</version>\n' +
  '</dependency>\n' +
  '<dependency>\n' +
  '    <groupId>org.apache.cxf</groupId>\n' +
  '    <artifactId>cxf-rt-bindings-soap</artifactId>\n' +
  '    <version>2.5.0</version>\n' +
  '</dependency>\n' +
  '<dependency>\n' +
  '    <groupId>org.apache.cxf</groupId>\n' +
  '    <artifactId>cxf-rt-transports-http</artifactId>\n' +
  '    <version>2.5.0</version>\n' +
  '</dependency>\n' +
  '<dependency>\n' +
  '    <groupId>org.apache.cxf</groupId>\n' +
  '    <artifactId>cxf-rt-ws-security</artifactId>\n' +
  '    <version>2.5.0</version>\n' +
  '</dependency>';

const show = '@WebService(serviceName = "cyy")\n' +
  'public interface Show {\n' +
  '    @WebMethod(operationName = "calc")\n' +
  '    Number showNumber(Double a);\n' +
  '}';

const web = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<web-app version="2.5"\n' +
  '         xmlns="http://java.sun.com/xml/ns/javaee"\n' +
  '         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n' +
  '         xsi:schemaLocation="http://java.sun.com/xml/ns/javaee\n' +
  '    http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd">\n' +
  '    <!-- 配置 Spring 配置文件的名称和位置 -->\n' +
  '    <context-param>\n' +
  '        <param-name>contextConfigLocation</param-name>\n' +
  '        <param-value>/WEB-INF/spring/cxf-beans.xml</param-value>\n' +
  '    </context-param>\n' +
  '    <!-- 启动 IOC 容器的 ServletContextListener -->\n' +
  '    <listener>\n' +
  '        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>\n' +
  '    </listener>\n' +
  '\n' +
  '    <!-- 配置字符集 -->\n' +
  '    <filter>\n' +
  '        <filter-name>encodingFilter</filter-name>\n' +
  '        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>\n' +
  '        <init-param>\n' +
  '            <param-name>encoding</param-name>\n' +
  '            <param-value>UTF-8</param-value>\n' +
  '        </init-param>\n' +
  '        <init-param>\n' +
  '            <param-name>forceEncoding</param-name>\n' +
  '            <param-value>true</param-value>\n' +
  '        </init-param>\n' +
  '    </filter>\n' +
  '    <filter-mapping>\n' +
  '        <filter-name>encodingFilter</filter-name>\n' +
  '        <url-pattern>/*</url-pattern>\n' +
  '    </filter-mapping>\n' +
  '    <servlet>\n' +
  '        <servlet-name>CXFServlet</servlet-name>\n' +
  '        <servlet-class>org.apache.cxf.transport.servlet.CXFServlet</servlet-class>\n' +
  '        <load-on-startup>1</load-on-startup>\n' +
  '    </servlet>\n' +
  '    <servlet-mapping>\n' +
  '        <servlet-name>CXFServlet</servlet-name>\n' +
  '        <!--==这个设置很重要，那么我们的webservice的地址就是http://localhost:8080/yourProgramName/webservice/Greeting=== -->\n' +
  '        <url-pattern>/webservice/*</url-pattern>\n' +
  '    </servlet-mapping>\n' +
  '</web-app>';

const spring = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<beans xmlns="http://www.springframework.org/schema/beans"\n' +
  '       xmlns:context="http://www.springframework.org/schema/context"\n' +
  '       xmlns:jaxws="http://cxf.apache.org/jaxws" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n' +
  '       xsi:schemaLocation="http://www.springframework.org/schema/beans\n' +
  'http://www.springframework.org/schema/beans/spring-beans-3.0.xsd\n' +
  'http://www.springframework.org/schema/context\n' +
  'http://www.springframework.org/schema/context/spring-context-3.0.xsd\n' +
  'http://cxf.apache.org/jaxws\n' +
  'http://cxf.apache.org/schemas/jaxws.xsd">\n' +
  '    <!--=============== 实现类的bean，需要spring注入 ============================-->\n' +
  '    <bean id="IcxfWBImpl" class="cxfWB.IcxfWBImpl"/>\n' +
  '    <jaxws:endpoint id="invoice"  implementor="#IcxfWBImpl"   address="/invoice" />\n' +
  '\n' +
  '    <bean id="ShowImpl" class="com.ShowImpl"/>\n' +
  '    <jaxws:endpoint id="one" implementor="#ShowImpl" address="/one"/>\n' +
  '</beans>';

const commandReport = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:qwerty="http://qwerty.com">\n' +
  '   <soapenv:Header>\n' +
  '      <qwerty:security>\n' +
  '         <qwerty:username>?</qwerty:username>\n' +
  '         <qwerty:password>?</qwerty:password>\n' +
  '      </qwerty:security>\n' +
  '   </soapenv:Header>\n' +
  '   <soapenv:Body>\n' +
  '\t <qwerty:functionNameRequest>\n' +
  '\t    <!--Optional:-->\n' +
  '\t    <qwerty:number>?</qwerty:number>\n' +
  '\t    <!--Optional:-->\n' +
  '\t    <qwerty:id>?</qwerty:id>\n' +
  '\t    <!--Optional:-->\n' +
  '         <qwerty:date>?</qwerty:date>\n' +
  '\t </qwerty:functionNameRequest>\n' +
  '   </soapenv:Body>\n' +
  '</soapenv:Envelope>';

const generatedReport = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:qwe="http://qwerty.com">\n' +
  '   <soapenv:Header>\n' +
  '      <qwe:security>\n' +
  '         <qwe:username>?</qwe:username>\n' +
  '         <qwe:password>?</qwe:password>\n' +
  '      </qwe:security>\n' +
  '   </soapenv:Header>\n' +
  '   <soapenv:Body>\n' +
  '      <qwe:functionName>\n' +
  '         <qwe:functionNameRequest>\n' +
  '            <!--Optional:-->\n' +
  '            <qwe:paymentReqNumber>111</qwe:paymentReqNumber>\n' +
  '            <!--Optional:-->\n' +
  '            <qwe:contractId>?</qwe:contractId>\n' +
  '            <!--Optional:-->\n' +
  '            <qwe:applyPayDate>?</qwe:applyPayDate>\n' +
  '         </qwe:functionNameRequest>\n' +
  '      </qwe:functionName>\n' +
  '   </soapenv:Body>\n' +
  '</soapenv:Envelope>';

const packageInfo = '@XmlSchema(\n' +
  '        namespace = "http://qwerty.com",\n' +
  '        elementFormDefault = XmlNsForm.QUALIFIED,\n' +
  '        xmlns = {\n' +
  '                @XmlNs(prefix = "qwerty", namespaceURI = "http://qwerty.com")\n' +
  '        }\n' +
  ')\n' +
  'package hls.core.ws.dto;\n' +
  '\n' +
  'import javax.xml.bind.annotation.XmlNs;\n' +
  'import javax.xml.bind.annotation.XmlNsForm;\n' +
  'import javax.xml.bind.annotation.XmlSchema;';

const interceptorDefinition = '<bean id="inInterceptor" class="hls.core.ws.interceptor.ServiceInReceiveInterceptor"/>\n' +
  '<bean id="outInterceptor" class="hls.core.ws.interceptor.ServiceOutPreStreamInterceptor"/>\n' +
  '<jaxws:server id="wsFunctionName" serviceClass="hls.core.ws.service.FunctionName"\n' +
  '              address="/FunctionName">\n' +
  '    <jaxws:serviceBean>\n' +
  '        <bean class="hls.core.ws.service.impl.FunctionNameImpl"/>\n' +
  '    </jaxws:serviceBean>\n' +
  '    <jaxws:inInterceptors>\n' +
  '        <ref bean="inInterceptor"/>\n' +
  '    </jaxws:inInterceptors>\n' +
  '    <jaxws:outInterceptors>\n' +
  '        <ref bean="outInterceptor"/>\n' +
  '    </jaxws:outInterceptors>\n' +
  '</jaxws:server>';

const inReceiveInterceptor = 'public class ServiceInReceiveInterceptor extends AbstractPhaseInterceptor<Message> {\n' +
  '    protected static Logger log = LoggerFactory.getLogger(ServiceInReceiveInterceptor.class);\n' +
  '\n' +
  '    public ServiceInReceiveInterceptor() {\n' +
  '        super(Phase.RECEIVE);\n' +
  '    }\n' +
  '\n' +
  '    @Override\n' +
  '    public void handleMessage(Message message) throws Fault {\n' +
  '        InputStream is = message.getContent(InputStream.class);\n' +
  '        if (is != null) {\n' +
  '            try {\n' +
  '                String str = IOUtils.toString(is);\n' +
  '                // 原请求报文\n' +
  '                Exchange exchange = message.getExchange();\n' +
  '                exchange.put("input.content.origin", str);\n' +
  '                log.info("====> request xml=\\r\\n" + str);\n' +
  '\n' +
  '                // 修改报文格式\n' +
  '                str = str.replace("<qwerty:functionName>", \n' +
  '                "<qwerty:functionName>\\n" +\n' +
  '                        "      <qwerty:functionNameRequest>")\n' +
  '\n' +
  '                // 替换后的报文\n' +
  '                log.info("====> replaced xml=\\r\\n" + str);\n' +
  '                exchange.put("input.content", str);\n' +
  '\n' +
  '                InputStream ism = new ByteArrayInputStream(str.getBytes(StandardCharsets.UTF_8));\n' +
  '                message.setContent(InputStream.class, ism);\n' +
  '\n' +
  '            } catch (IOException e) {\n' +
  '                e.printStackTrace();\n' +
  '            }\n' +
  '        }\n' +
  '    }\n' +
  '}';
const inPreProtocolInterceptor = 'public class ServiceInPreProtocolInterceptor extends AbstractSoapInterceptor {\n' +
  '    protected static Logger log = LoggerFactory.getLogger(ServiceInPreProtocolInterceptor.class);\n' +
  '\n' +
  '    public ServiceInPreProtocolInterceptor() {\n' +
  '        super(Phase.PRE_PROTOCOL);\n' +
  '        getAfter().add(SAAJInInterceptor.class.getName());\n' +
  '    }\n' +
  '\n' +
  '    private static String USER_NAME = "USER_NAME";\n' +
  '    private static String PASSWORD  = "PASSWORD";\n' +
  '\n' +
  '\n' +
  '    @Override\n' +
  '    public void handleMessage(SoapMessage soapMessage) throws Fault {\n' +
  '        // 校验头信息\n' +
  '        System.out.println("开始验证用户信息！");\n' +
  '        List<Header> headers = soapMessage.getHeaders();\n' +
  '        for (Header header : headers) {\n' +
  '            SoapHeader soapHeader = (SoapHeader) header;\n' +
  '            // 取出SOAP的Header元素\n' +
  '            Element element = (Element) soapHeader.getObject();\n' +
  '            log.info("ELEMENT =" + element.toString());\n' +
  '            // XMLUtils.printDOM(element);\n' +
  '            NodeList userIdNodes = element.getElementsByTagName("qwe:username");\n' +
  '            NodeList pwdNodes = element.getElementsByTagName("qwe:password");\n' +
  '            if (userIdNodes.item(0) == null || pwdNodes.item(0) == null) {\n' +
  '                SOAPException soapExc = new SOAPException("请在Header中提供完整的用户名、密码信息");\n' +
  '                throw new Fault(soapExc);\n' +
  '            }\n' +
  '            String userName = userIdNodes.item(0).getTextContent();\n' +
  '            String password = pwdNodes.item(0).getTextContent();\n' +
  '            log.info("############ 打印帐号信息 ##############");\n' +
  '            log.info(userIdNodes.item(0) + "=" + userName);\n' +
  '            log.info(pwdNodes.item(0) + "=" + password);\n' +
  '            log.info("############  ————————  ##############");\n' +
  '            // 用户名及密码使用SM3加密后的密文进行传输，此处判断源数据与加密数据\n' +
  '            if (!SmUtils.verify(USER_NAME, userName) || !SmUtils.verify(PASSWORD, password)) {\n' +
  '                //认证失败则抛出异常，停止继续操作\n' +
  '                SOAPException soapExc = new SOAPException("请提供正确的用户名和密码！");\n' +
  '                throw new Fault(soapExc);\n' +
  '            }\n' +
  '        }\n' +
  '    }\n' +
  '}';
const outPreStreamInterceptor = 'public class ServiceOutPreStreamInterceptor extends AbstractPhaseInterceptor<Message> {\n' +
  '    protected static Logger log = LoggerFactory.getLogger(ServiceOutPreStreamInterceptor.class);\n' +
  '\n' +
  '    @Autowired\n' +
  '    private HlsCusWsRequestsMapper hlsCusWsRequestsMapper;\n' +
  '\n' +
  '    public ServiceOutPreStreamInterceptor() {\n' +
  '        super(Phase.PRE_STREAM);\n' +
  '    }\n' +
  '\n' +
  '    @Override\n' +
  '    public void handleMessage(Message message) throws Fault {\n' +
  '        try {\n' +
  '            OutputStream os = message.getContent(OutputStream.class);\n' +
  '            CachedStream cs = new CachedStream();\n' +
  '            message.setContent(OutputStream.class, cs);\n' +
  '            message.getInterceptorChain().doIntercept(message);\n' +
  '\n' +
  '            CachedOutputStream csnew = (CachedOutputStream) message.getContent(OutputStream.class);\n' +
  '            InputStream in = csnew.getInputStream();\n' +
  '\n' +
  '            String xml = IOUtils.toString(in);\n' +
  '            log.info("replaceBegin" + xml);\n' +
  '            Exchange exchange = message.getExchange();\n' +
  '            exchange.put("output.content.origin", xml);\n' +
  '\n' +
  '            // 记录日志\n' +
  '            record(message);\n' +
  '\n' +
  '            xml = xml.replace("return", "qwerty:response");//替换成你需要的格式\n' +
  '            log.info("replaceAfter" + xml);\n' +
  '\n' +
  '            //这里对xml做处理，处理完后同理，写回流中\n' +
  '            IOUtils.copy(new ByteArrayInputStream(xml.getBytes(StandardCharsets.UTF_8)), os);\n' +
  '\n' +
  '            cs.close();\n' +
  '            os.flush();\n' +
  '\n' +
  '            message.setContent(OutputStream.class, os);\n' +
  '        } catch (Exception e) {\n' +
  '            log.error("输入流解析错误 : " + "\\n" + e);\n' +
  '        }\n' +
  '    }\n' +
  '\n' +
  '    /**\n' +
  '     * 记录日志\n' +
  '     */\n' +
  '    private void record(Message message) {\n' +
  '        ...\n' +
  '    }\n' +
  '\n' +
  '    private class CachedStream extends CachedOutputStream {\n' +
  '        private CachedStream() {\n' +
  '            super();\n' +
  '        }\n' +
  '        protected void doFlush() throws IOException {\n' +
  '            currentStream.flush();\n' +
  '        }\n' +
  '        protected void doClose() throws IOException {\n' +
  '        }\n' +
  '        protected void onWrite() throws IOException {\n' +
  '        }\n' +
  '    }\n' +
  '}';
const code = {
  pom,
  dependency,
  show,
  web,
  spring,

  commandReport,
  generatedReport,
  packageInfo,
  inPreProtocolInterceptor,
  inReceiveInterceptor,
  interceptorDefinition,
  outPreStreamInterceptor,
};

export default code;

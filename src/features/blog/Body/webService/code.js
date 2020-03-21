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

const code = {
  pom,
  dependency,
  show,
  web,
  spring,
};

export default code;

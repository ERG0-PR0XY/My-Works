<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<% response.setHeader("Cache-Control","no-cache");response.setHeader("Cache-Control","no-store");response.setHeader("Cache-Control","must-revalidate");  response.setHeader("Pragma","no-cache");  response.setDateHeader ("Expires", 0);  %> 
<!-- saved from url=(0014)about:internet -->

<!-- 
This is GP landing page and also GP websites page based on the request

@author Lokesh B
-->
<html lang="en">
<body>
<%
String pageName = (String)request.getSession().getAttribute("pageName");
String carrierId = (String)request.getSession().getAttribute("carrierId");
String userName = (String)request.getSession().getAttribute("userName");

if(pageName!= null && pageName.equals("Websites")){
	request.getSession().removeAttribute("pageName");
	request.getSession().removeAttribute("carrierId");
	request.getSession().removeAttribute("userName");
	
    String redirectURL =  request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+"/gp/sites/websites.do?carrierId="+carrierId+"&userId="+userName;
    response.sendRedirect(redirectURL);

 } else {%>
	<jsp:forward page="GPMain.html">
		<jsp:param name="carrierId" value="<%=carrierId%>"/>
		<jsp:param name="userId" value="<%=userName%>"/>
	</jsp:forward>
<%}%>
</body>
</html>

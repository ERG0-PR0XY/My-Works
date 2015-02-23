<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<style type="text/css">
.userinfo{
	font-family : Tahoma, Verdana, Lucida, Arial, Helvetica, sans-serif;
	color : #000000;
	FONT-SIZE: 11px;
	padding-left: 5px;
	padding-right:5px;	
	white-space: nowrap;
	text-align:left;
}
.logininfo{
	font-family : Arial;
	color : #2780c2;
	FONT-SIZE: 12px;
	padding-left: 2px;
	padding-right:2px;
	white-space: nowrap;
	text-align:left;
}

.homeLink{
		font-size:12px;
		font-family:Arial;
		color:#1e61b4;
		font-weight: bold;
}
	
a:link    {
  /* Applies to all unvisited links */
  text-decoration:  none;
  font-weight:      bold;
  border:0;
  color:            blue;
  } 
a:visited {
  /* Applies to all visited links */
  text-decoration:  none;
  font-weight:      bold;
  color:            #f0f;
  } 


	
</style>


</head>
<body>
	<table width="95%">
		<tr align="right" valign="middle">
			<td width="80%">&nbsp;</td>
			
			<td width="5%"><a href='content.do?pageName=content' target="content"><img
			src="/gp/assets/images/tabicons/tab_home.png" border="0" alt="home.png" /></a></td>
			<td width="5%" align="left"><a href='content.do?pageName=content' target="content"><span class="logininfo"><b>Home</b></span></a></td>
			<td width="10%" align="right" class="userinfo"><span class="logininfo"><b>Welcome <%=(String)request.getAttribute("userName")%></b></span></td>
		</tr>
	</table>
</body>
</html>
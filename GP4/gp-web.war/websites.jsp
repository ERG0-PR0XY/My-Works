<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>GP Caterer Website</title>
</head>
<frameset id="menuFrameset" cols="225,*" frameborder="1" border="0" framespacing="0">
	<frame id="controls" name="menu" src='sidepanel.do?pageName=sidepanel' bordercolor="blue" marginheight="1" marginwidth="1"
			scrolling="auto" noresize="noresize"/>
	<frameset id="content" rows="40,*" frameborder="0" border="1" framespacing="0">
		<frame name="topNav" src='header.do?pageName=header' marginheight="0" scrolling="no" noresize="noresize"/>
		<frame name="content" src='content.do?pageName=content' marginheight="0"
			marginwidth="0" scrolling="auto" noresize="noresize"/>

		<noframes>
		<p>This website (everything between the 'noframes' tags) will only
		be displayed if the users' browser does support HTML frames.</p>
		</noframes>

	</frameset>
</frameset> 
</html>


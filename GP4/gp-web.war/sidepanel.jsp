<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<%@ page import="java.util.List"%>
<%@ page import="com.egatesolutions.gp.domain.StaticWebsiteDeploy"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script type="text/javascript">

function toggle() {
	var ele = document.getElementById("toggleDiv");
	var hidePanel = document.getElementById("hidePanel");
	var sidePanel = parent.document.getElementById("menuFrameset");
	if(ele.style.display == "block") {
		sidePanel.cols='23,*';
    	ele.style.display = "none";
		hidePanel.style.display = "block";
	}
	else {
		hidePanel.style.display = "none";
		ele.style.display = "block";
		sidePanel.cols='225,*';
	}
} 

</script>
<style type="text/css">
	.BoxColorHeader_top 	{background:url('/gp/assets/images/tabspanelholder/topNavigation-bg.gif'); background-repeat:repeat-x;}
	
	.colorboxHeader {
		font-family:Tahoma;
		font-size:11px;
		font-weight:bold;
		text-align:left;
		text-decoration:none;
		color:#FFFFFF;
		padding-left:8px;
	}
	
	.contentBoxTitle {height:22px; vertical-align:middle; margin:0px 1px 0px 1px; padding:0 0 0 2px;}
	
	.contentBoxTitle div{ padding-top:4px;}

	.toggleHeaderText{
		font-family:Verdana, Arial, Helvetica, sans-serif;  
		font-size:11px; 
		color:#525252;  
		text-align:left; 
		font-weight:bold ;
		text-decoration:none;
	}
	.toggleHeaderText A:LINK, .toggleHeaderText A:VISITED, .toggleHeaderText A:ACTIVE {
		font-family:Verdana, Arial, Helvetica, sans-serif;  
		font-size:11px; 
		color:#525252;  
		text-align:left; 
		font-weight:bold;
		text-decoration:none;
	}
	.toggleHeaderText:hover{
		color : #ff9900;
	}

	.publicationLink{
		font-size:12px;
		font-family:Arial;
		color:#1e61b4;
		font-weight: bold;
	}
	.arrowImg {
		display: block;
		margin-left: 90%;
		margin-top: -12px;
	}
</style>	
</head>
<body>
<div id="toggleDiv" style="display:block" class="BoxColorHeader_top colorboxHeader contentBoxTitle">
						<div><a class="toggleHeaderText" href="javascript:void(0);"  onMouseDown="toggle();"><span class="colorboxHeader" onclick="javascript:toggle();"> Publications</span>
						<img src="<%=request.getContextPath()%>/assets/images/dockablepanels/arrows/leftSide.png" border="0" class="arrowImg" name="toggleDiv" id="toggleDiv"></a></div>
			

<table>
<% 

List<StaticWebsiteDeploy> publications = (List<StaticWebsiteDeploy>) request.getAttribute("publications"); 
for(StaticWebsiteDeploy website:publications){ %>
<tr valign="middle">
<td style="padding-top:5px">
<img src="<%=request.getContextPath()%>/assets/images/publication.png" alt="publication.png"/>
</td>
<td><div style="padding-left:5px;" align="left">
<% 
out.println(website.getPublicationCode());
%>
</div></td>
</tr>
<%} %>

</table>
</div>
<div id="hidePanel" style="display:none" class="BoxColorHeader_top colorboxHeader contentBoxTitle">
						<div><a class="toggleHeaderText" href="javascript:void(0);"  onMouseDown="javascript:toggle();"><img src="<%=request.getContextPath()%>/assets/images/dockablepanels/arrows/rightSide.png" border="0" name="hidePanel" id="hidePanel"></a></div>
</div>
</body>
</html>
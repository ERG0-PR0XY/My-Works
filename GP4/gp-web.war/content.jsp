<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<%@ page import="java.util.List"%>
<%@ page import="com.egatesolutions.gp.business.publisher.vo.PublicationInfoVO"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<style type="text/css">
.footer {
	font-family: Arial;
	color: #000000;
	font-size: 10px;
	vertical-align: middle;
	padding-top: 1px;
}

</style>
</head>
<body>
<TABLE width="98%" height="100%">
	<TR height="20%">
		<TD width="50%" align="left"><img
			src="/gp/assets/images/logo.png" alt="logo.png" /></TD>
		<TD width="50%" align="right"></TD>
	</TR>
	<TR height="10%">
		<TD Colspan="3" valign="top">
		<hr color="#ACC2DA" />
		</TD>
	</TR>
	<TR height="60%">
		<TD Colspan="6">

		<table width="100%" height="100%" style="border:#cccccc solid 1px; background-color:#cccccc" cellspacing="1">
			<tbody >
				<tr style="background-color:#C0D9EC;padding:5px;font-weight:bold;border-right:#cccccc solid 2px;">
					<th bgcolor="#C0D9EC" style="font-weight:bold;padding:5px">Code</th>
					<th bgcolor="#C0D9EC" style="font-weight:bold;padding:5px">Name</th>
					<th bgcolor="#C0D9EC" style="font-weight:bold;padding:5px">Effective Date</th>
					<th bgcolor="#C0D9EC" style="font-weight:bold;padding:5px">End Date</th>
				</tr>
				
				<%List<PublicationInfoVO> publicationInfoList = (List<PublicationInfoVO>) request.getAttribute("publicationInfoList"); 
					for(PublicationInfoVO pubInfo:publicationInfoList){ %>
					<tr>
						<td bgcolor="#FFFFFF" style="padding:5px;">
						<% 
						out.println(pubInfo.getPublicationCode());
						%>
						</td>
						<td bgcolor="#FFFFFF" style="padding:5px"> 
						<% 
						out.println(pubInfo.getPublicationName());
						%>
						</td>
						<td bgcolor="#FFFFFF" style="padding:5px">
						<% 
						out.println(pubInfo.getEffDateString());
						%>
						</td>
						<td  bgcolor="#FFFFFF" style="padding:5px">
						<% 
						out.println(pubInfo.getEndDateString());
						%>
						</td>
					</tr>
					<%} %>
			</tbody>
		</table>

		</TD>
	</TR>
	
	<TR height="290">
		<TD Colspan="3" valign="bottom">
		<hr color="#ACC2DA" />
		</TD>
	</TR>
	<TR height="20%">
		<TD class="footer" align="left">Copyright &copy; All Rights
		Reserved.</TD>
		<td class="footer" align="right" style="
    padding-right: 10px;">Powered by</td>
		<TD class="footer" align="right"><img
			src="/gp/ifx/images/egatesolution_logo.jpg"
			alt="egatesolution_logo.jpg" /></TD>
	</TR>
</TABLE>
</body>
</html>
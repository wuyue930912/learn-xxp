<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<c:set var="appPath" value="cdweb" />
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>title</title>
<meta http-equiv="X-UA-Compatible" content="IE=12;IE=11;IE=10;IE=9;IE=8;IE=7;IE=EDGE" />
<link href="${ctx}/css/login.css" rel="stylesheet" type="text/css" />
<style type="text/css">
.required {
	
}
</style>
<link id="easyuiTheme" rel="stylesheet" type="text/css" href="${ctx}/js/easyui/themes/custom/easyui.css">
<link rel="stylesheet" type="text/css" href="${ctx}/js/easyui/themes/icon.css">
<link rel="stylesheet" type="text/css" href="${ctx}/js/easyui/themes/color.css">
<link rel="stylesheet" type="text/css" href="${ctx}/css/common.css">
<script type="text/javascript" src="${ctx}/js/easyui/jquery.min.js"></script>
<script type="text/javascript" src="${ctx}/js/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="${ctx}/js/easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="${ctx}/js/pubfun.js"></script>
<script type="text/javascript" src="${ctx}/js/app.js"></script>
<script type="text/javascript">
</script>
</head>
<body style="background-color: #F4F4F4"">
<div class="cont">
		<div class="cont_logo" style="margin-top: 100px">
			<img src="${ctx}/images/logo/logo.png" width="815" height="94" />
		</div> 
		<div class="cont_bg"> 
			<form id="form" method="post" action="${ctx}/j_spring_security_check">
				<div>
					<div style="font-size: 25px; width: 400px; height: 200px; color: white; margin-left: 35%;">
					<br/>
					<br/>
						会话超时请<a href="loginTwo">重新登录</a>！
					</div>
				</div>
				<!--错误信息显示位置和样式调整 -->
				<div id="errMsgDiv" style="width: 157px; color: white;font-size: 14px;float:left;margin-left:20px"></div>
			</form>
		</div>		
	</div>
	<div id="nantian" style='postion:relative;text-align:center;'>
	<div class="foot"></div>
	</div>
</body>
</html>

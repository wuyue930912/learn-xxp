<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/common/taglib.jsp"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>	
<meta http-equiv="pragma" content="no-cache"/>
<meta http-equiv="cache-control" content="no-cache,must-revalidate"/>
<meta http-equiv="expires" content="0"/>
<title>中央国债登记结算有限责任公司</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible"
	content="IE=12;IE=11;IE=10;IE=9;IE=8;IE=7;IE=EDGE" />
<link id="easyuiTheme" rel="stylesheet" type="text/css"
	href="${ctx}/js/easyui/themes/custom/easyuiTree.css">
<link rel="stylesheet" type="text/css"
	href="${ctx}/js/easyui/themes/icon.css">
<link rel="stylesheet" type="text/css"
	href="${ctx}/js/easyui/themes/color.css">
<link rel="stylesheet" type="text/css" href="${ctx}/css/common.css">
<link rel="stylesheet" type="text/css" href="${ctx}/css/base.css">
<style type="text/css">
.head_bg {
	background: url(${ctx}/images/bk.jpg);
	height: 65px;
	background-repeat: no-repeat;
	background-size: cover;
}

.head_logo {
	float: left;
	height: 65px;
	width: 800px;
	display: inline no-repeat;
}

.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  width: 98%;
  transition: all 0.5s;
  cursor: pointer;
  margin: 1px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '»';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

.button:active {
  background-color: #66ccff;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}


</style>
<script type="text/javascript" src="${ctx}/js/easyui/jquery.min.js"></script>
<script type="text/javascript"
	src="${ctx}/js/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript"
	src="${ctx}/js/easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="${ctx}/js/validate_ex.js"></script>
<script type="text/javascript" src="${ctx}/js/app.js"></script>
<script type="text/javascript" src="${ctx}/js/load.js"></script>
<script type="text/javascript" src="${ctx}/js/pubfun.js"></script>
<script type="text/javascript"> 
	function openURL(title,url){
	    if ($('#tt').tabs('exists', title)){
            $('#tt').tabs('select', title);
        } else {
            var content = '<iframe scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:100%;overflow:hidden;"></iframe>';
            $('#tt').tabs('add',{
                title:title,
                content:content,
                closable:true,
                height:700,
            });
        }
	}
	
	$(function(){
		$("#nav").accordion('getSelected').panel('collapse')
	});
</script>
<style type="text/css">
.jiesuo {
	color: white;
	padding-left: 20px;
	padding-right: 20px;
}
.tabs-panels>.panel>.panel-body {  
    overflow: hidden;  
} 
</style>
</head>
<body class="easyui-layout" id="mainbody">
<body class="easyui-layout">
	<div data-options="region:'north'"
		style="height: 10%; overflow: hidden">
		<div class="head_bg">
			<div class="head_logo"></div>
			<div class="head_right">
				<div class="head_img">
					<img src="${ctx}/images/lock.png" alt="" width="16" height="16" />
				</div>
				<div class="head_font">
					<a id='alock' href="javascript:void(0)" target="_top">锁屏</a>
				</div>
			</div>
			<div class="head_right">
				<div class="head_img">
					<img src="${ctx}/images/close.png" alt="" width="16" height="16" />
				</div>
				<div class="head_font">
					<a href="javascript:void(0)" target="_top" onclick="logout()">关闭</a>
				</div>
			</div>
			<div class="head_right">
				<div class="head_img">
					<img src="${ctx}/images/admin.png" alt="" width="16" height="16" />
				</div>
				<div class="head_font">${sessionScope.loginUser.username}</div>
			</div>
		</div>
	</div>
	<div data-options="region:'south'" style="height: 30px;">
		<div id="bottomDiv" class="bottom_font" align="center">
			&copy;中央国债登记结算有限责任公司 Copyright&copy; All Rights Reserved</div>
	</div>
	<div data-options="region:'west',split:true,iconCls:'icon-left_nav'" style="width: 20%;">
		<div class="easyui-layout" style="width: 100%; height: 100%;">
			<div data-options="region:'west',iconCls:'icon-msg',collapsed:false,collapsible:false "
				style="height: 65%; width: 100%; overflow: hidden" title="导航菜单">
				
				<div id="nav" class="easyui-accordion" fit="false" border="false" style="width: 100%; height: 98%; font-weight: bold;">
					<c:forEach items="${menuList}" var="menu">
						<div title='${menu.name}' style="height: 15px; font-weight: bold;">
							<c:forEach items="${sonList}" var="son">
								<c:if test="${menu.id == son.prentnode}" >
									<ul class="easyui-tree">
										<button href="javascript:void(0)" class="button" style="vertical-align:middle"
											onclick="openURL('${son.name}','${son.url}')">
											<span>
												${son.name}
											</span>
										</button>
									</ul>
								</c:if>
							</c:forEach>
						</div>
					</c:forEach>
				</div>
				
			</div>
			<div data-options="region:'south',iconCls:'icon-msg',collapsed:false,collapsible:false "
				style="height: 170px; width: 100%; overflow: hidden" title="登录信息">
				<div id="div2" class="easyui-panel"
					data-options="loadingMessage:'加载中...'"
					style="width: 100%; height: 100%;">
					<table>
						<tr>
							<td><span> 登录用户： </span></td>
							<td>${sessionScope.loginUser.username}</td>
						</tr>
						<tr>
							<td><span> 用户角色： </span></td>
							<td><c:if test="${sessionScope.loginUser.userrole == 1}">
									超级管理员
								</c:if> <c:if test="${sessionScope.loginUser.userrole == 2}">
									普通用户
								</c:if></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
	<div data-options="region:'center'" id="content"" style="padding: 0px; overflow: hidden;">
		<div id="tt" class="easyui-tabs" style="width:100%; height:550px; overflow: hidden;">
        	<div title="Home" style="background: url(images/bk.jpg);background-repeat: no-repeat;background-size: cover; -webkit-filter:blur(45px);
				-moz-filter:blur(45px);-o-filter:blur(45px);-ms-filter:blur(45px);filter:blur(45px); ">
        	</div>
    	</div>
	</div>
</body>


</body>
</html>
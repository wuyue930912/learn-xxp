<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
	 href="${ctx}/js/easyui/themes/metro-blue/easyui.css">
<link rel="stylesheet" type="text/css"
	href="${ctx}/js/easyui/themes/icon.css">
<link rel="stylesheet" type="text/css"
	href="${ctx}/js/easyui/themes/color.css">
<link rel="stylesheet" type="text/css" href="${ctx}/css/common.css">
<link rel="stylesheet" type="text/css" href="${ctx}/css/base.css">
<link href="${ctx}/bootstrap/css/bootstrap.min.css" rel="stylesheet">

<script type="text/javascript" src="${ctx}/js/easyui/jquery.min.js"></script>
<script type="text/javascript"
	src="${ctx}/js/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript"
	src="${ctx}/js/easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="${ctx}/js/validate_ex.js"></script>
<script type="text/javascript" src="${ctx}/js/app.js"></script>
<script type="text/javascript" src="${ctx}/js/load.js"></script>
<script type="text/javascript" src="${ctx}/js/pubfun.js"></script>
<script src="${ctx}/bootstrap/js/bootstrap.min.js"></script>
    <style type="text/css">
        .panel-body{
            padding: unset;
        }
    </style>
    <title>用户管理</title>
</head>
<body>
	<div style="margin-top: 2%">
		<fieldset class="fileset">
			<legend>
				<b>查询条件</b>
			</legend>
			<form id="search_msgUploadSearch">
				<table>
					<tr>
						<td>
							<div class="input-group" style="margin-left: 30px">
								<span class="input-group-addon">用户名</span>
								<input id="username_search" type="text" class="form-control" placeholder="twitterhandle" style="width: 200px;">
							</div>
						</td>
						<td style="padding-left: 600px;">
							<div class="btn-group" role="group" aria-label="...">
								<button type="button" class="btn btn-default" onclick="seachUserList();">查 询</button>
                                <button type="button" class="btn btn-default" onclick="reset();">重 置</button>
								<button type="button" class="btn btn-default" onclick="exportUser();">导 出</button>
							</div>
						</td>
					</tr>
				</table>
			</form>
		</fieldset>
	</div>
	<div style="margin-left: 2%; margin-top: 2%; padding: unset" id="roletable" >
		<table id="table_userList" style="width: 500px; height: 380px; align:'center'; padding: unset">
		</table>
	</div>
	
	<div id='userAddDlg'></div>
	<div id='userEditDlg'></div>
	
	<script type="text/javascript" src="${ctx}/js/user.js"></script>
</body>
</html>
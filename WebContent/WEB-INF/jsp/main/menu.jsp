<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>用户管理</title>
</head>
<body>
	<div>
		<fieldset class="fileset">
			<legend>
				<b>查询条件</b>
			</legend>
			<form id="search_msgUploadSearch">
				<table class="tb-search">
					<tr>
						<td align="center" style="width: 100px;">用户名:</td>
						<td> 
							<input id="username_search" data-options="width:'160px'" type="text" name="username" class="easyui-textbox" />
						</td>
						
						<td align="center" style="width: 100px;">
							<span class="btn-left" >
								<a href="#" id="btn_msgUploadSearchId" class="easyui-linkbutton"
								data-options="iconCls:'icon-search'" onclick="seachUserList();">查 询</a>
							</span>
						</td>
						
					</tr>
				</table>
			</form>
		</fieldset>
	</div>
	<div>
		<table id="table_userList" style="width: 100%; height: 360px;">
		</table>
	</div>
	
	<div id='userAddDlg'></div>
	<div id='userEditDlg'></div>
	
	<script type="text/javascript" src="js/user.js"></script>
</body>
</html>
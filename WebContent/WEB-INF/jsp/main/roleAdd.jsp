<%@page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
	<div class="list_div"
		style="margin-left: 60px; margin-top: 20px; border-bottom: 1px; width: 90%;">

		<TABLE id="sgYYTable1" align="center" cellspacing="1" cellpadding="3"
			width="98.5%" class="framing-table">
			<tr>
				<td align="right" class='table-textl'>角色名称:</td>
				<td align="left"><input type="text" id="roleName_add"
					name="roleName" maxlength="10" class="easyui-textbox"
					data-options="required:true,width:'160px'" /> <font color=red>*</font>
				</td>

				<td align="right" class='table-textl'>备注:</td>
				<td align="left"><input type="text" id="roleBz_add"
					name="roleBz" maxlength="10" class="easyui-textbox"
					data-options="width:'160px'" />
				</td>
			</tr>
		</table>

		<div class="list_div"
			style="margin-top: 20px; border-bottom: 1px; width: 90%;">
			<table align="center" cellspacing="1" cellpadding="3" width="98.5%"
				class="framing-table">
				<tr>
					<span> 选择角色权限： </span>
					<br />
				</tr>
				<tr>
					<br />
					<div>
						<table id="table_menuList" style="width: 100%; height: 360px;">
						</table>
					</div>
				</tr>
			</table>
		</div>
	</div>
</body>
</html>
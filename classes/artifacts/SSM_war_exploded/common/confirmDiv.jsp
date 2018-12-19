<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="fhView" class="easyui-window" title="复核" style="width: 300px; height: 180px;top:180px;" data-options="modal:true,closed:true,collapsible:false,minimizable:false,maximizable:false,resizable:false,draggable:false">
		<div align="center" style="margin-top:15px">
		<form id="fhViewForm" class="easyui-form" method="post" data-options="novalidate:true">
			<table style="width: 250px"  cellpadding="5">
				<tr height="35px">
					<td style="text-align: right">用户名：</td>
					<td>
						<input id="fhUserName" class="easyui-validatebox easyui-textbox" name="fhUserName" data-options="required:true" style="width: 120px;"/><font color="red">*</font>
					</td>
				</tr>
				<tr height="35px">
					<td style="text-align: right">密码：</td>
					<td>
						<input id="fhPassWord" name="fhPassWord" class="easyui-validatebox easyui-textbox" type="password"  autocomplete="off" data-options="required:true" style="width: 120px;"/><font color="red">*</font>
					</td>
				</tr>
			</table>
			<table style="margin-top: 10px;">
				<tr>
					<td align="right">
		     			<a id="fhbutton" href="javascript:void(0);"  class="easyui-linkbutton c9" onclick="doConfirmSubmit()" ><span style="padding-left:20px;padding-right:20px">复核</span></a>
					</td>
					<td align="left">
					    <a href="javascript:void(0);"  class="easyui-linkbutton c9" onclick="doConfirmCancel()"><span style="padding-left:20px;padding-right:20px">取消</span></a> 
					</td>
				</tr>
			</table>
			</form>
		</div>
</div>
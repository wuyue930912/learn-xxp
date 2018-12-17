<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<c:set var="appPath" value="cdweb" />
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>中央国债登记结算有限责任公司</title>
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
	var eDiv = document.createElement("div");
	var flag = "";
	if (navigator.appName.indexOf("Internet") >= 0 || navigator.appVersion.indexOf("Trident") >= 0) {
		if (window.navigator.cpuClass == "x86") {
			eDiv.innerHTML = "<object id=\"CryptoAgent\" codebase=\"CryptoKit.Ultimate.x86.cab\" classid=\"clsid:4C588282-7792-4E16-93CB-9744402E4E98\" ></object>";
		} else {
			eDiv.innerHTML = "<object id=\"CryptoAgent\" codebase=\"CryptoKit.Ultimate.x64.cab\" classid=\"clsid:B2F2D4D4-D808-43B3-B355-B671C0DE15D4\" ></object>";
		}
	} else {
		eDiv.innerHTML = "<embed id=\"CryptoAgent\" type=\"application/npCryptoKit.Ultimate.x86\" style=\"height: 0px; width: 0px\">";
	}
	if (top.location != self.location) {
		top.location = self.location;
	}
	$("#errMsgDiv").hide();
	$(function() { 
		//客户号
		$("#custon").hide();
		$("#errMsgDiv").fadeIn("slow");
		//非按钮聚焦事件
		$("input[type!=button]").focus(function() {
			//必填项校验判断
			if ($(this).attr("class") != undefined && $(this).attr("class") == 'required') {
				var val = $(this).val();
				if (val != "") {
					$(this).css("background", "white");
					$(this).attr("errmsg", "");
					$("#errMsgDiv").html($(this).attr("errmsg"));
				} else {
					$(this).css("background", "pink");
					if ($(this).attr("errmsg") != undefined && $(this).attr("errmsg") != "") {
						$("#errMsgDiv").html($(this).attr("errmsg"));
					}
				}
			} else {
				$(this).css("background", "white");
			}
		});
		$("input.required").blur(function() {
			var val = $(this).val();
			if (val != "") {
				var req = /^[0-9a-zA-Z]+$/;
				if (!req.test(val)) {
					$(this).focus();
					$(this).css("background", "pink");
					$(this).attr("errmsg", "输入内容只能是数字或字母！");
					$("#errMsgDiv").html($(this).attr("errmsg"));
				} else {
					$(this).css("background", "white");
					$(this).attr("errmsg", "");
					$("#errMsgDiv").html("");
				}
				if (($(this).attr("errmsg")) == "") {
					flag = "1";
				} else {
					flag = "0";
				}
			}
		});
		<c:if test="${APP.appID==1||APP.appID==4||APP.appID==5}">
		//默认账户被聚焦
		$("#accno").focus();
		/* $("#accno").css("background", "pink"); */
		$('#errMsgDiv').css('paddingTop','30px');
		</c:if>
		<c:if test="${APP.appID==2}">
		//默认账户被聚焦
		$("#customerCode").focus();
		/* $("#userName").css("background", "pink"); */
		$('.cont_con').css('paddingTop','30px');/* 申购端输入框居中 */
		$('#errMsgDiv').css('paddingTop','44px');
		</c:if>
		<c:if test="${APP.appID==3}">
		//默认账户被聚焦
		$("#userName").focus();
		/* $("#userName").css("background", "pink"); */
		$('.cont_con').css('paddingTop','30px');/* 中心端输入框居中 */
		$('#errMsgDiv').css('paddingTop','44px');
		</c:if>
		var high = ($(document).height()-360)/2-25;
		$('.cont').css({marginTop:high});
		<c:if test="${APP.cfcaKeyFlag==1}">
		
		document.body.appendChild(eDiv);
		var CryptoAgent = document.getElementById("CryptoAgent");
		var subjectDNFilter = "";
		var issuerDNFilter = "";
		var serialNumFilter = "";
		var bSelectCertResult = "";
		bSelectCertResult = CryptoAgent.SelectCertificate(subjectDNFilter, issuerDNFilter, serialNumFilter);
		var InfoTypeID = "";
		InfoTypeID = "SubjectDN";
		var InfoContent = CryptoAgent.GetSignCertInfo(InfoTypeID);
		var accno = InfoContent.toString().split('@');
		document.getElementById("accno").value = accno[1];
		//document.getElementById("customerCode").value = accno[2].toString().split('%')[1]; 
		$("#userName").focus();
		$("#userName").css("background", "pink");
		</c:if>
		
		
	});
	function keyLogin() {
		if (window.event.keyCode == 13) {
			login();
		}
	}
	
	function toUpperCase(t){
		//var e=event||window.event;
		//var c=e.keyCode;
		//if(!(c==37 || c==39)){
			t.value=t.value.toUpperCase();
		//}
		
	}
	function login() {
		var customerCode = $("#customerCode").val();
		if (customerCode == "" || customerCode == undefined || customerCode.length != 10) {
			$("#customerCode").focus();
			$("#customerCode").css("background", "pink");
			$("#customerCode").attr("errmsg", "客户号不正确！");
			$("#errMsgDiv").html($("#customerCode").attr("errmsg"));
			return;
		}
		var userName = $("#userName").val();
		if (userName == "" || userName == undefined) {
			$("#userName").focus();
			$("#userName").css("background", "pink");
			$("#userName").attr("errmsg", "用户名不能为空！");
			$("#errMsgDiv").html($("#userName").attr("errmsg"));
			return;
		}
		var password = $("#password").val();
		if (password == "" || password == undefined) {
			$("#password").focus();
			$("#password").css({
				'background' : 'pink'
			});
			$("#password").attr("errmsg", "密码不能为空！");
			$("#errMsgDiv").html($("#password").attr("errmsg"));
			return;
		}
		if (flag == "1") {
			var param = {"customerCode":customerCode,"userName":userName,"password":password};
			$.ajax({
				url : '${ctx}/toLoginTwo',
				type : "POST",
				data : param,
				dataType:"JSON",
				success : function(data) {
					if(data == '9001'){
						window.location.href = "${ctx}/main";
					}else if(data == '9999'){
						alert('用户不存在！');
						return false;
					}else if(data == '9002'){
						alert('密码错误！');
						return false;
					}
					
				}
			});
			
		}
	}
</script>
</head>
<body style="background-color: #F4F4F4" onkeydown="keyLogin()">
<div class="cont">
		<div class="cont_logo">
			<img src="${ctx}/images/logo/logo.png" width="815" height="94" />
		</div> 
		<div class="cont_bg"> 
			<form id="form" method="post" action="${ctx}/j_spring_security_check">
				<div class="cont_img">
					<img src="${ctx}/images/sgd.png" style="width:73px;height:25px"/>
				</div>
				<div class="cont_con">
					<div class="cont_log"> 
							<dl>
								<dt>
									<img src="${ctx}/images/logo/kehuhao.png" />
								</dt>
								<dd>
									<input id="customerCode" <c:if test="${APP.cfcaKeyFlag==1}">value="请插入UKEY！" readonly="readonly"</c:if> name="customerCode" value="" type="text" maxlength="10" class="cont_input required" />
								</dd>
							</dl>
							<dl>
								<dt>
									<img src="${ctx}/images/logo/yhm.png" />
								</dt>
								<dd>
									<input id="userName" value="" name="userName" type="text" maxlength="20" class="cont_input required" onblur="toUpperCase(this);"/>
								</dd>
							</dl>
							<dl>
								<dt>
									<img src="${ctx}/images/logo/mm.png" />
								</dt>
								<dd>
									<input id="password" value="" name="password" type="password" maxlength="6" class="cont_input required" />
								</dd>
							</dl>
						
						<input id="languageType" type="hidden" value="ZH" name="languageType" />
						<input id="requestFlag" type="hidden" value="0" name="requestFlag" />
					</div>
					<div class="cont_btn">
						<a href="#" onclick='javascript:login();'><img src="${ctx}/images/logo/button_1.png" width="181" height="37" /></a>
					</div>
				</div>
				<!--错误信息显示位置和样式调整 -->
				<div id="errMsgDiv" style="width: 157px; color: white;font-size: 14px;float:left;margin-left:20px"></div>
			</form>
		</div>		
	</div>
	<div id="nantian" style='postion:relative;text-align:center;'>
	<div class="foot">&copy; 中央国债登记结算有限责任公司 Copyright &copy; All Rights Reserved</div>
	</div>
	 <script>
	 $(document).ready(function(){
		 var h=$(window).height()-128.5-$('.cont').height();
		 $('#nantian').css('padding-top',h- $('.foot').height()-10);
	 });
	 </script>
</body>
</html>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<c:set var="appPath" value="cdweb"/>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>中央国债登记结算有限责任公司</title>
    <meta http-equiv="X-UA-Compatible" content="IE=12;IE=11;IE=10;IE=9;IE=8;IE=7;IE=EDGE"/>
    <style type="text/css">
        body {
            background: url("${ctx}/images/1.jpg");
            animation-name: myfirst;
            animation-duration: 12s;
            animation-delay: 2s;
            animation-iteration-count: infinite;
            animation-play-state: running;
        }

        @keyframes myfirst {
            0% {
                background: url("${ctx}/images/1.jpg");
            }
            34% {
                background: url("${ctx}/images/2.jpg");
            }
            67% {
                background: url("${ctx}/images/3.jpg");
            }
            100% {
                background: url("${ctx}/images/1.jpg");
            }
        }

        .form {
            background: rgba(255, 255, 255, 0.2);
            width: 400px;
            margin: 250px;
        }

        .fa {
            display: inline-block;
            top: 27px;
            left: 6px;
            position: relative;
            color: #ccc;
        }

        input[type="text"], input[type="password"] {
            padding-left: 26px;
        }

        .checkbox {
            padding-left: 21px;
        }
    </style>
    <link id="easyuiTheme" rel="stylesheet" type="text/css" href="${ctx}/js/easyui/themes/custom/easyui.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/js/easyui/themes/icon.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/js/easyui/themes/color.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/css/common.css">
    <link href="${ctx}/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <script type="text/javascript" src="${ctx}/js/easyui/jquery.min.js"></script>
    <script type="text/javascript" src="${ctx}/js/easyui/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="${ctx}/js/easyui/locale/easyui-lang-zh_CN.js"></script>
    <script type="text/javascript" src="${ctx}/js/pubfun.js"></script>
    <script type="text/javascript" src="${ctx}/js/app.js"></script>
    <script src="${ctx}/bootstrap/js/bootstrap.min.js"></script>
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
        $(function () {
            //客户号
            $("#custon").hide();
            $("#errMsgDiv").fadeIn("slow");
            //非按钮聚焦事件
            $("input[type!=button]").focus(function () {
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
            $("input.required").blur(function () {
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
            $('#errMsgDiv').css('paddingTop', '30px');
            </c:if>
            <c:if test="${APP.appID==2}">
            //默认账户被聚焦
            /* $("#userName").css("background", "pink"); */
            $('.cont_con').css('paddingTop', '30px');
            /* 申购端输入框居中 */
            $('#errMsgDiv').css('paddingTop', '44px');
            </c:if>
            <c:if test="${APP.appID==3}">
            //默认账户被聚焦
            $("#userName").focus();
            /* $("#userName").css("background", "pink"); */
            $('.cont_con').css('paddingTop', '30px');
            /* 中心端输入框居中 */
            $('#errMsgDiv').css('paddingTop', '44px');
            </c:if>
            var high = ($(document).height() - 360) / 2 - 25;
            $('.cont').css({marginTop: high});
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
            $("#userName").focus();
            $("#userName").css("background", "pink");
            </c:if>


        });

        function keyLogin() {
            if (window.event.keyCode == 13) {
                login();
            }
        }

        function toUpperCase(t) {
            //var e=event||window.event;
            //var c=e.keyCode;
            //if(!(c==37 || c==39)){
            t.value = t.value.toUpperCase();
            //}

        }

        function login() {
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
                    'background': 'pink'
                });
                $("#password").attr("errmsg", "密码不能为空！");
                $("#errMsgDiv").html($("#password").attr("errmsg"));
                return;
            }
            if (flag == "1") {
                var param = {"userName": userName, "password": password};
                $.ajax({
                    url: '${ctx}/toLoginTwo',
                    type: "POST",
                    data: param,
                    dataType: "JSON",
                    success: function (data) {
                        if (data == '9001') {
                            window.location.href = "${ctx}/main";
                        } else if (data == '9999') {
                            alert('用户不存在！');
                            return false;
                        } else if (data == '9002') {
                            alert('密码错误！');
                            return false;
                        }

                    }
                });

            }
        }
    </script>
</head>
<body style="overflow: hidden">
<div class="container">
    <div class="form row" style="margin-left: 340px;margin-top: 150px;">
        <div class="form-horizontal col-md-offset-3" id="login_form" style="height: 300px">
            <h3 class="form-title" style="margin-left: 155px; margin-top: 20px;">LOGIN</h3>

            <div class="col-md-9">

                <div class="form-group">
                    <i class="fa fa-lock fa-lg"></i>
                    <input id="userName" value="" name="userName" type="text" maxlength="20"
                           class="form-control required" placeholder="Username" autofocus="autofocus"
                           style="margin-left: 67px;width: 230px;"/>
                </div>

                <div class="form-group">
                    <i class="fa fa-lock fa-lg"></i>
                    <input id="password" value="" name="password" type="password" maxlength="6"
                           style="margin-left: 67px;width: 230px;" class="form-control required" placeholder="Password"/>
                </div>
                <div class="cont_btn">
                    <button type="button" class="btn btn-success pull-right" name="submit"
                            style="margin-left: 80px;margin-top:5px; width: 200px;" onclick='javascript:login();'>登   录
                    </button>
                </div>

            </div>
        </div>
    </div>
</div>

</body>
</html>

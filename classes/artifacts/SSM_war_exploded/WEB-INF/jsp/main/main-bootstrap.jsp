<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/common/taglib.jsp" %>
<%@page import="java.util.Map" %>
<%@page import="java.util.HashMap" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="pragma" content="no-cache"/>
    <meta http-equiv="cache-control" content="no-cache,must-revalidate"/>
    <meta http-equiv="expires" content="0"/>
    <title>Title</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible"
          content="IE=12;IE=11;IE=10;IE=9;IE=8;IE=7;IE=EDGE"/>
    <link id="easyuiTheme" rel="stylesheet" type="text/css"
          href="${ctx}/js/easyui/themes/metro-blue/easyui.css">
    <link rel="stylesheet" type="text/css"
          href="${ctx}/js/easyui/themes/icon.css">
    <link rel="stylesheet" type="text/css"
          href="${ctx}/js/easyui/themes/color.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/css/common.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/css/base.css">
    <link rel="stylesheet" href="${ctx}/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="${ctx}/bootstrap/css/bootstrap-theme.min.css">

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
        }

        .button {
            display: inline-block;
            border-radius: 4px;
            background-color: #337ab7;
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
    <script type="text/javascript" src="${ctx}/js/easyui/jquery.cookies.js"></script>
    <script type="text/javascript"
            src="${ctx}/js/easyui/jquery.easyui.min.js"></script>
    <script type="text/javascript"
            src="${ctx}/js/easyui/locale/easyui-lang-zh_CN.js"></script>
    <script type="text/javascript" src="${ctx}/js/validate_ex.js"></script>
    <script type="text/javascript" src="${ctx}/js/app.js"></script>
    <script type="text/javascript" src="${ctx}/js/load.js"></script>
    <script type="text/javascript" src="${ctx}/js/pubfun.js"></script>
    <script src="${ctx}/bootstrap/js/bootstrap.min.js"></script>

    <script type="text/javascript">
        function changeFeedback(id) {
            var str = document.getElementById(id).className;
            var tag = str.substring(25, str.length);
            if (tag == "right") {
                document.getElementById(id).className = "glyphicon glyphicon-menu-down";
            } else {
                document.getElementById(id).className = "glyphicon glyphicon-menu-right";
            }
        }

        function openURL(title, url) {
            if ($('#tt').tabs('exists', title)) {
                $('#tt').tabs('select', title);
            } else {
                var content = '<iframe scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:100%;overflow:hidden;"></iframe>';
                $('#tt').tabs('add', {
                    title: title,
                    content: content,
                    closable: true,
                    height: 700,
                });
            }
        }

        $(function () {
            $("#nav").accordion('getSelected').panel('collapse')
        });

        function logout() {
            $.messager.confirm('退出提示', '确定退出本系统？', function (r) {
                if (r) {
                    window.location.href = "${ctx}/login";
                }
            });
        }

        function time() {
            var vWeek, vWeek_s, vDay;
            vWeek = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
            var date = new Date();
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            hours = date.getHours();
            minutes = date.getMinutes();
            seconds = date.getSeconds();
            vWeek_s = date.getDay();
            document.getElementById("time").innerHTML = year + "年" + month + "月" + day + "日" + "\t" + hours + ":" + minutes + ":" + seconds + "\t" + vWeek[vWeek_s];
        };

        setInterval("time()", 1000);

        $("#btn1").click(function() {
            $("#d1").hide();
        });

        function showMsg(){
            $("#jumbotron").hide();
            $('#msg').attr("class","active");
            $('#home').attr("class","");
        }

        function gohome(){
            $("#jumbotron").show();
            $('#home').attr("class","active");
            $('#msg').attr("class","");
        }

    </script>
    <style type="text/css">
        .tabs-panels > .panel > .panel-body {
            overflow: hidden;
            padding: unset;
        }

    </style>
</head>
<body class="easyui-layout" style="padding: unset">
<div data-options="region:'south'" style="height: 30px;">
    <div id="bottomDiv" class="bottom_font" align="center">
    </div>
</div>
<div data-options="region:'west',split:true,iconCls:'icon-left_nav'" style="width: 20%; padding: unset">
    <div class="panel panel-primary" >
        <div class="panel-heading" >
            <h3 class="panel-title">登陆信息</h3>
        </div>
        <div class="panel-body">
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
                <tr>
                    <div id="time"></div>
                </tr>
            </table>
        </div>
    </div>
    <div class="container-fluid" style="padding: unset">

                <div class="row-fluid">
                    <div class="span12">
                        <div class="accordion" id="accordion-702175" STYLE="border: unset">
                            <div class="panel panel-primary" >
                                <div class="panel-heading" >
                                    <h3 class="panel-title">导航菜单</h3>
                                </div>
                                <div class="panel-body" style="padding: unset">
                                    <c:forEach items="${menuList}" var="menu">
                                        <div class="accordion-group">
                                            <div class="accordion-heading">
                                                <nav>
                                                    <ul class="nav nav-pills nav-stacked" >
                                                        <li role="presentation">
                                                            <a class="accordion-toggle collapsed" data-toggle="collapse"
                                                               data-parent="#accordion-702175"
                                                               href="#accordion-element-${menu.id}">${menu.name}</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>

                                            <div id="accordion-element-${menu.id}" class="accordion-body collapse">
                                                <c:forEach items="${sonList}" var="son">
                                                    <c:if test="${menu.id == son.prentnode}">
                                                        <div class="accordion-inner">
                                                            <button href="javascript:void(0)" class="button"
                                                                    style="vertical-align:middle"
                                                                    onclick="openURL('${son.name}','${son.url}')">
                                                        <span>
                                                                ${son.name}
                                                        </span>
                                                            </button>
                                                        </div>
                                                    </c:if>
                                                </c:forEach>
                                            </div>

                                        </div>
                                    </c:forEach>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
</div>
<div data-options="region:'center'" id="content" style="padding: 0px; overflow: hidden;">
    <div id="tt" class="easyui-tabs" style="width:100%; height:650px; overflow: hidden;">
        <div title="Home" style="height: 100%;">
            <div style="height: 41px">
                <nav class="navbar navbar-default" role="navigation">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">emmmm这应该叫啥系统？</a>
                        </div>
                        <div>
                            <ul class="nav navbar-nav" style="text-align: center">
                                <li id="home" class="active" style="width: 150px">
                                    <a href="#" onclick="gohome()">首页</a>
                                </li>

                                <li id="msg">
                                    <a href="#" onclick="showMsg()" style="float: right ; width: 150px">
                                    公告
                                    </a>
                                </li>

                                <li><a href="#" onclick="logout()" style="float: right ; width: 150px">
                                        关闭
                                    </a>
                                </li>
                                <li class="dropdown" style="float: right; width: 150px">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                            ${sessionScope.loginUser.username}
                                        <b class="caret"></b>&nbsp;
                                        <span class="badge">99+</span>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">jmeter</a></li>
                                        <li><a href="#">EJB</a></li>
                                        <li><a href="#">Jasper Report</a></li>
                                        <li class="divider"></li>
                                        <li><a href="#">分离的链接</a></li>
                                        <li class="divider"></li>
                                        <li><a href="#">另一个分离的链接</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


            </div>

            <div id="jumbotron" class="jumbotron" style="height: 100%;">
                <div id="myCarousel" class="carousel slide">
                    <!-- 轮播（Carousel）指标 -->
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                    </ol>
                    <!-- 轮播（Carousel）项目 -->
                    <div class="carousel-inner" style="height: 540px; margin-top: -36px;">
                        <div class="item active">
                            <img src="${ctx}/images/1.jpg" alt="First slide">
                        </div>
                        <div class="item">
                            <img src="${ctx}/images/2.jpg" alt="Second slide">
                        </div>
                        <div class="item">
                            <img src="${ctx}/images/3.jpg" alt="Third slide">
                        </div>
                        <div class="item">
                            <img src="${ctx}/images/4.jpg" alt="Third slide">
                        </div>
                    </div>
                    <!-- 轮播（Carousel）导航 -->
                    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

</div>

</body>
</html>
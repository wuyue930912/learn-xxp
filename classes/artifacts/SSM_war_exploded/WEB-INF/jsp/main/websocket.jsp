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
<title>title</title>
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

<script type="text/javascript" src="${ctx}/js/easyui/jquery.min.js"></script>
<script type="text/javascript"
	src="${ctx}/js/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript"
	src="${ctx}/js/easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="${ctx}/js/validate_ex.js"></script>
<script type="text/javascript" src="${ctx}/js/app.js"></script>
<script type="text/javascript" src="${ctx}/js/load.js"></script>
<script type="text/javascript" src="${ctx}/js/pubfun.js"></script>

<script type="text/javascript" charset="utf-8" src="${ctx}/ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="${ctx}/ueditor/ueditor.all.min.js"> </script>
<script type="text/javascript" charset="utf-8" src="${ctx}/ueditor/lang/zh-cn/zh-cn.js"></script>


<style type="text/css">
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
  width: 150px;
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

.chat-bubble-bottom {}
.chat-bubble-bottom:before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  right:10px;
  top:-21px;
  border: 10px solid;
  border-color:transparent transparent #337ab7 transparent ;
}
.chat-bubble-bottom:after {
 content: '';
 position: absolute;
 width: 0;
 height: 0;
 right:12px;
 top:-16px;
 border: 8px solid;
 border-color:transparent transparent #337ab7 transparent  ;
}
.chat-bubble{
  position: relative;
  margin:12px;
  padding:5px 8px;
  word-break: break-all;
  background:#fff;
  border: 1px solid #337ab7;
  border-radius: 5px;
  max-width:200px;
}
.chat-bubble-left {}
.chat-bubble-left:before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  left: -20px;
  top:5px;
  border: 10px solid;
  border-color:transparent #337ab7 transparent  transparent ;
}
.chat-bubble-left:after {
 content: '';
 position: absolute;
 width: 0;
 height: 0;
 left:-16px;
 top:7px;
 border: 8px solid;
 border-color:transparent #337ab7 transparent  transparent ;
}
 
.chat-bubble-right {}
.chat-bubble-right:before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  right: -20px;
  top:5px;
  border: 10px solid;
  border-color:transparent transparent transparent #337ab7;
}
.chat-bubble-right:after {
 content: '';
 position: absolute;
 width: 0;
 height: 0;
 right:-16px;
 top:7px;
 border: 8px solid;
 border-color:transparent transparent transparent #337ab7 ;
}

</style>

</head>
<body class="easyui-layout" id="mainbody">
		<input id = "username" type="hidden" value="${sessionScope.loginUser.username}">
		<div id="msg" data-options="region:'west',collapsed:false,collapsible:false "
			style="height: 65%; width: 100%;  overflow-y: auto;  background: url(${ctx}/images/1.jpg);background-repeat: no-repeat;background-size: cover; ">
			<div id="message"  style="width: 98%;" ></div>
		</div>

		<div data-options="region:'south',iconCls:'icon-msg',collapsed:false,collapsible:false "
			style="height: 170px; width: 100%; overflow: hidden">
			
			<div id="editor" style="height:100px">      
				<script type="text/javascript" charset="utf-8">      
					UE.getEditor('editor');      
				</script>  
			<button href="javascript:void(0)" style="vertical-align:middle" class="button" onclick="send()">发送消息</button>
			<button href="javascript:void(0)" style="vertical-align:middle" class="button" onclick="closeWebSocket()">关闭WebSocket连接</button> 
			</div>
		</div>
</body>


<script type="text/javascript">
    var websocket = null;
    //判断当前浏览器是否支持WebSocket
    if ('WebSocket' in window) {
        websocket = new WebSocket("ws://localhost:8080/websocket");
    }
    else {
        alert('当前浏览器 Not support websocket')
    }

    //连接发生错误的回调方法
    websocket.onerror = function () {
        setMessageInnerHTML("WebSocket连接发生错误");
    };

    //连接成功建立的回调方法
    websocket.onopen = function () {
        setMessageInnerHTML("WebSocket连接成功");
    }

    //接收到消息的回调方法
    websocket.onmessage = function (event) {
        setMessageInnerHTML(event.data);
    }

    //连接关闭的回调方法
    websocket.onclose = function () {
        setMessageInnerHTML("WebSocket连接关闭");
    }

    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function () {
        closeWebSocket();
    }

    //将消息显示在网页上
    function setMessageInnerHTML(innerHTML) {
    	var username = innerHTML.split(":")[3].trim();
    	var usersession = $("#username").val().trim();
    	if(username == usersession){
    		document.getElementById('message').innerHTML += '<div class=\'chat-bubble chat-bubble-right\' style=\'color: #FFFFFF; margin-left: 78%; text-align:left; background:#337ab7;\'>' + innerHTML + '<br/></div>';
            $("#msg").scrollTop($("#msg")[0].scrollHeight);
    	}else{
    		document.getElementById('message').innerHTML += '<div class=\'chat-bubble chat-bubble-left\' style=\'margin-left: 3%; text-align:left; background:#337ab7; \'>' + innerHTML + '<br/></div>';
            $("#msg").scrollTop($("#msg")[0].scrollHeight);
    	}
    }

    //关闭WebSocket连接
    function closeWebSocket() {
        websocket.close();
    }
    
    //发送消息
    function send() {
        var message = UE.getEditor('editor').getContent();
        websocket.send(message);
        UE.getEditor('editor').execCommand('cleardoc');
    }
</script>
</html>
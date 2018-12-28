<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
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
          content="IE=12;IE=11;IE=10;IE=9;IE=8;IE=7;IE=EDGE"/>

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
    <script src="${ctx}/jquery/jquery.lazy.js"></script>
    <script src="${ctx}/jquery/jquery.lazy.min.js"></script>
    <script type="text/javascript">
        $(function() {
            $('.lazy').Lazy({
                effect: 'fadeIn',
                effectTime: 2000,
                threshold: 0,
                // placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7..."
            });
        });
    </script>
    <style type="text/css">
        <%--img.lazy {--%>
            <%--width: 700px;--%>
            <%--height: 150px;--%>
            <%--display: block;--%>

            <%--/* optional way, set loading as background */--%>
            <%--background-image: url('${ctx}/images/loading.gif');--%>
            <%--background-repeat: no-repeat;--%>
            <%--background-position: 50% 50%;--%>
        <%--}--%>

        .panel-body {
            padding: unset;
        }
    </style>
    <title>用户管理</title>
</head>
<body>
<div class="row">
<c:forEach items="${lives}" var="item">
    <div class="col-sm-6 col-md-3">
        <div class="thumbnail">
            <img class="lazy"  data-src="${ctx}${item.liveimage}" alt="缩略图">
            <div class="caption">
                <h3>${item.livetitle}</h3>
                <p>${item.livename}</p>
                <p>
                    <a href="${ctx}/red5/toOneLive?name=${item.livename}" class="btn btn-primary" role="button">
                        按钮
                    </a>
                </p>
            </div>
        </div>
    </div>
</c:forEach>
</div>
</body>
</html>
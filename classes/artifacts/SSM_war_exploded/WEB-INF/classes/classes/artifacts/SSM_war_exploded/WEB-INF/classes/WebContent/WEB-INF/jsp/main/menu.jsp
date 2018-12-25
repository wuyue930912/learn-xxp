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
    <link href="${ctx}/bootstrap/dist/bootstrap-table.min.css" rel="stylesheet"/>
    <link href="${ctx}/bootstrap/dist/bootstrap-table.css" rel="stylesheet"/>

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

    <script src="${ctx}/bootstrap/dist/bootstrap-table.js"></script>

    <script src="${ctx}/bootstrap/dist/locale/bootstrap-table-zh-CN.js"></script>

    <style type="text/css">
        .fixed-table-toolbar{
            margin-top: -20px;
        }
        .panel-body {
            padding: unset;
        }
        table{
            table-layout: fixed;
        }
        table tr {
            height: 20px;
        }
        table tr td{
            height: 20px;
        }
    </style>
    <title>权限管理</title>
</head>
<body style="overflow: hidden">
<div class="panel-body" style="padding-bottom:0px; overflow: hidden">
    <div class="panel panel-default" style="overflow:hidden;">
        <div class="panel-body" style="overflow: hidden">
            <form id="formSearch" class="form-horizontal">
                <div class="form-group" style="margin-top:15px">
                    <table>
                        <tr>
                            <td>
                                <div class="input-group" style="margin-left: 30px">
                                    <span class="input-group-addon">导航名称</span>
                                    <input id="menuName" type="text" class="form-control" placeholder="twitterhandle" style="width: 200px;">
                                </div>
                            </td>
                            <td>
                                <div class="input-group" style="margin-left: 30px">
                                    <span class="input-group-addon">导航URL</span>
                                    <input id="menuUrl" type="text" class="form-control" placeholder="twitterhandle" style="width: 200px;">
                                </div>
                            </td>
                            <td>
                                <div class="col-sm-4" style="text-align:left;">
                                    <button type="button" style="margin-left:50px;width: 100px;" id="btn_query" class="btn btn-primary" onclick="serachbutton();">查询
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
        </div>
    </div>

    <div id="toolbar" class="btn-group">
        <button id="btn_father_add" type="button" class="btn btn-default"data-toggle="modal" data-target="#menuAddFatherModal">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增一级导航
        </button>

        <button id="btn_add" type="button" class="btn btn-default"data-toggle="modal" data-target="#menuAddModal">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增二级导航
        </button>

        <button id="btn_edit" type="button" class="btn btn-default">
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改
        </button>
        <button id="btn_delete" type="button" class="btn btn-default" onclick="todelete();">
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
        </button>
    </div>

    <table id="table_menuList" style="width: 100%; height: 360px; overflow: hidden;">
    </table>
</div>

<div class="modal fade" id="menuDeleteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="text-align: center">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title" id="myModalLabelDelete">
                    删除导航
                </h4>
            </div>
            <div id="isdel" class="modal-body" style="text-align: center">
                确定删除
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                </button>
                <button type="button" class="btn btn-primary" onclick="deleteMenu();">
                    确定
                </button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>

<script type="text/javascript">
   function todelete(){
        var row = $("#table_menuList").bootstrapTable('getSelections');
        if (row.length = 0){
            jQuery.messager.alert("请选择要删除的数据");
            return false;
        }else{
            $('#menuDeleteModal').modal('show');
        }
    }

</script>

<div class="modal fade" id="menuAddFatherModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="text-align: center">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title" id="myModalLabelFather">
                    新增一级导航
                </h4>
            </div>
            <div class="modal-body" style="text-align: center">
                <form class="form-horizontal" role="form">
                    <div class="input-group" style="margin-left: 100px">
                        <span class="input-group-addon">导航名称</span>
                        <input id="menuFatherNameAdd" type="text" class="form-control" placeholder="twitterhandle" style="width: 300px;">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                </button>
                <button type="button" class="btn btn-primary" onclick="submitMenuFather();">
                    提交
                </button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>

<script type="text/javascript">
    function submitMenuFather() {
        var menuNameAddFather = $("#menuFatherNameAdd").val();

        if (menuNameAddFather == undefined || menuNameAddFather == ''){
            jQuery.messager.alert("导航名必填！", 'info');
            return false;
        }

        $.ajax({
            type: "post",
            url: '/menu/submitMenu',
            data: {"menuNameAdd":menuNameAddFather,"menuUrlAdd":'',"fathernode":0},
            cache: false,
            async : false,
            dataType: "json",
            success: function (data){
                var flag = data.flag;
                if(flag == "success"){
                    jQuery.messager.alert( "新增成功！", 'info');
                    $('#table_menuList').bootstrapTable('refresh');
                    $('#menuAddFatherModal').modal('hide')
                }else if(flag == "error"){
                    jQuery.messager.alert("新增失败！", 'info');
                    return false;
                }else if(flag == "error2"){
                    jQuery.messager.alert("新增失败！用户名重复！", 'info');
                    return false;
                }
            },
            error:function(){
                jQuery.messager.alert("服务器异常！", 'error');
                return false;
            }
        });

    }
</script>
<!-- 模态框（Modal） -->
<div class="modal fade" id="menuAddModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="text-align: center">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title" id="myModalLabel">
                    新增二级导航
                </h4>
            </div>
            <div class="modal-body" style="text-align: center">
                <form class="form-horizontal" role="form">
                    <div class="input-group" style="margin-left: 100px">
                        <span class="input-group-addon">导航名称</span>
                        <input id="menuNameAdd" type="text" class="form-control" placeholder="twitterhandle" style="width: 300px;">
                    </div>

                    <div id="menuUrlAddDiv" class="input-group" style="margin-left: 100px;margin-top: 20px" hidden="hidden">
                        <span class="input-group-addon">导航URL</span>
                        <input id="menuUrlAdd" type="text" class="form-control" placeholder="twitterhandle" style="width: 300px;">
                    </div>

                    <div class="form-group" style="margin-left: 100px;margin-top: 20px">
                        <select id="fathernode" class="form-control" style="width: 380px" onchange="isOwnOrTwo();">
                            <c:forEach items="${fathers}" var="item">
                                <option value="${item.id}">${item.name}</option>
                            </c:forEach>
                        </select>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                </button>
                <button type="button" class="btn btn-primary" onclick="submitMenu();">
                    提交
                </button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>

<script type="text/javascript">

    function submitMenu() {
        var menuNameAdd = $("#menuNameAdd").val();
        var menuUrlAdd = $("#menuUrlAdd").val();
        var fathernode = $("#fathernode").val();

        if (menuNameAdd == undefined || menuNameAdd == ''){
            jQuery.messager.alert("导航名必填！");
            return false;
        }
        if (menuUrlAdd == undefined && menuUrlAdd != 0){
            jQuery.messager.alert("URL必填！");
            return false;
        }
        if (fathernode == undefined || fathernode == ''){
            jQuery.messager.alert("父节点必选！");
            return false;
        }

        $.ajax({
            type: "post",
            url: '/menu/submitMenu',
            data: {"menuNameAdd":menuNameAdd,"menuUrlAdd":menuUrlAdd,"fathernode":fathernode},
            cache: false,
            async : false,
            dataType: "json",
            success: function (data){
                var flag = data.flag;
                if(flag == "success"){
                    jQuery.messager.alert( "新增成功！");
                    $('#table_menuList').bootstrapTable('refresh');
                    $('#menuAddModal').modal('hide')
                }else if(flag == "error"){
                    jQuery.messager.alert( "新增失败！");
                    return false;
                }else if(flag == "error2"){
                    jQuery.messager.alert( "新增失败！用户名重复！");
                    return false;
                }
            },
            error:function(){
                jQuery.messager.alert("服务器异常！");
                return false;
            }
        });

    }
</script>

<script type="text/javascript" src="${ctx}/js/menu.js"></script>
</body>
</html>
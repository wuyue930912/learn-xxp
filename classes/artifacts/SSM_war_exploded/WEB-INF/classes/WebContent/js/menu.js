
$(this).ready(function() {
    searchMenu();
});

function searchMenu() {
    $('#table_menuList').bootstrapTable({
        method: 'get', //这里要设置为get，不知道为什么 设置post获取不了
        url: '/menu/queryMenuList',         //请求后台的URL（*）
        method: 'get',                      //请求方式（*）
        toolbar: '#toolbar',                //工具按钮用哪个容器
        striped: false,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: true,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        queryParams: queryParams,           //传递参数（*）
        sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber:1,                       //初始化加载第一页，默认第一页
        pageSize: 10,                       //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        search: false,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        showSearchButton: true,
        strictSearch: true,
        showExport: true,
        exportDataType: "all",
        exportTypes:['doc', 'excel', 'xlsx', 'pdf'],  //导出文件类型
        singleSelect : true,
        showColumns: true,                  //是否显示所有的列
        showRefresh: true,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        height: 480,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "id",                     //每一行的唯一标识，一般为主键列
        showToggle:true,                    //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: false,                   //是否显示父子表
        columns: [{
            checkbox: true,
            width: 10
        }, {
            field: 'id',
            title: '节点序号',
            width: 20
        }, {
            field: 'name',
            title: '导航名称',
            width: 20
        }, {
            field: 'url',
            title: '路径',
            width: 20,
            formatter: function (value) {
                if (value == '') {
                    return '根导航';
                } else {
                    return value;
                }
            }
        }, {
            field: 'state',
            title: '状态',
            width: 20
        }, {
            field: 'prentnode',
            title: '父节点',
            width: 20,
            formatter: function (value) {
                if (value == 0) {
                    return '根节点';
                } else {
                    return value;
                }
            }
        }, {
            field: 'creattime',
            title: '创建时间',
            width: 20,
            formatter: function (value) {
                var JsonDateValue = new Date(value.time);
                var text = JsonDateValue.toLocaleString();
                return text;
            }
        }]
    })
}
//设置传入参数
function queryParams(params) {
        var menuName = $("#menuName").val();
        var menuUrl = $("#menuUrl").val();

        return {
            "offset": params.offset,
            "limit": params.limit,
            "menuName": menuName,
            "menuUrl": menuUrl,
            "sort": params.sort,
            "search": params.search,
            "order": params.order
        }
}

function serachbutton(){
    $('#table_menuList').bootstrapTable('refresh');
}
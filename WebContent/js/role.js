	var roleList_tableBar = [
	    {
	   	 id:"r_drtManagerAdd",
	   	 iconCls: 'icon-add',
	   	 handler:function(){
	  		addRoleManager();
	  	 },
		 text:"新增"
	    },"-",
	    {
	   	 id:"r_drtManagerUpdate",
	   	 iconCls: 'icon-edit',
	   	 handler:function(){
	   		var row = $("#table_roleList").datagrid('getSelections');
	  		if (row.length > 0) {
	  			
	        } else {
	        	jQuery.messager.alert('温馨提示', "请选择一条要修改的数据！", 'info');
		    }
	  	 },
		 text:"修改"
	    },"-",
	    {
	   	 id:"r_drtManagerDelete",
	   	 iconCls: 'icon-cut',
	   	 handler:function(){
	   		var row = $("#table_roleList").datagrid('getSelections');
	   	    if (row.length > 0) {
	   	    	deleteRoleManager(row);
	        } else {
	        	jQuery.messager.alert('温馨提示', "请选择一条要删除的数据！", 'info');
	        }
	  		
	   	 },
		 text:"删除"
	    }
	];      
	
	$(this).ready(function() {
		initRole();
	});
	
	function initRole(){
		var table_userList=$("#table_roleList");
		table_userList.datagrid({ 
	    	pagination: true,
	    	url:"/user/queryRoleList",
	        toolbar:roleList_tableBar,
	        rownumbers:true,
	        fitColumns:true,
	        singleSelect : true,
	        width:Number($("fieldset").css("width").replace("px","")-15),
	        columns: [[
	            {field:'id',title:'序号',hidden:true},
	            {field:'name', title:'角色名',align:'center', width:50},
	            {field:'rolestate', title:'角色状态',align:'center', width:50},
	            {field:'createtime', title:'创建日期',align:'center', width:100,
	            	formatter:function(value,rowData,rowIndex){
	            	var JsonDateValue = new Date(value.time);
	            	var text = JsonDateValue.toLocaleString(); 
	            	     return text;
	                }
	           	},
	            {field:'bz', title:'备注',align:'center', width:60}
	            　	]]
	    });
	}
	
	var addRoleDia;
	function addRoleManager(){
		addRoleDia = $("#roleAddDlg");
		addRoleDia.dialog({
	   		title: '新增角色',
	   		href: '/role/toRoleAdd',
	   		width:800,
	   		height:480,
			draggable:true,
	   		modal: true,	    
	   		buttons:[{
				text:'保存',
				width:80,
				height:25,
				handler:function(){
					var roleName = $("#roleName_add").textbox('getValue');
					var bz = $("#roleBz_add").textbox('getValue');
					var menu = $("#table_menuList").datagrid('getSelections');
					
					if(roleName == undefined || roleName == ''){
						jQuery.messager.alert('温馨提示', "请输入角色名！", 'info');
						return false;
					}
					
					if(menu.length == 0){
						jQuery.messager.alert('温馨提示', "请选择角色权限！", 'info');
						return false;
					}
					
					var menus = "";
					for(var i = 0 ; i < menu.length ; i++){
						menus = menus + menu[i].id + ",";
					}
					
					$.ajax({
					     type: "post",
					     url: '/role/submitRole',
					     data: {"roleName":roleName,"bz":bz,"menu":menus.substring(0,menus.length-1)},
					     cache: false,
					     async : false,
					     dataType: "json",
					     success: function (data,textStatus){
					    	var flag = data.flag;
					    	if(flag == "success"){
					    		jQuery.messager.alert('温馨提示', "新增成功！", 'info');
					    		seachRoleList();
					    		$("#roleAddDlg").dialog('close');
					    	}else if(flag == "error"){
					    		jQuery.messager.alert('温馨提示', "新增失败！", 'info');
					    		return false;
					    	}else if(flag == "error2"){
					    		jQuery.messager.alert('温馨提示', "新增失败！角色名重复！", 'info');
					    		return false;
					    	}
				         },
				         error:function(){
				        	 jQuery.messager.alert('温馨提示', "服务器异常！", 'error');
				        	 return false;
				         }
					 });
				}
			},{
				text:'取消',
				width:80,
				height:25,
				handler:function(){
					addRoleDia.dialog('close');
				}
			}],
			onLoad:function(){
				var table_menuList=$("#table_menuList");
				table_menuList.datagrid({ 
			    	pagination: true,
			    	url:"/role/queryMenuList",
			        rownumbers:true,
			        fitColumns:true,
			        singleSelect:false,
			        height:300,
			        cache:false,
			        columns: [[
			            {field:'id',align:'center',hidden:true},
			            {field:'name',align:'center', width:100},
			            {field:'creattime',align:'center', width:100,
			            	formatter:function(value,rowData,rowIndex){
			            	var JsonDateValue = new Date(value.time);
			            	var text = JsonDateValue.toLocaleString(); 
			            	     return text;
			                }
			           	}
			            　	]]
			    });
			}
	   	});
	}
	
	function seachRoleList(){
		var rolename_search = $("#rolename_search").textbox('getValue');
		
		var table_userList=$("#table_roleList");
		table_userList.datagrid({ 
	    	pagination: true,
	    	url:"/user/queryRoleList?role="+rolename_search,
	        toolbar:roleList_tableBar,
	        rownumbers:true,
	        fitColumns:true,
	        singleSelect : true,
	        width:Number($("fieldset").css("width").replace("px","")-15),
	        columns: [[
	            {field:'id',title:'序号',hidden:true},
	            {field:'name', title:'角色名',align:'center', width:50},
	            {field:'rolestate', title:'角色状态',align:'center', width:50},
	            {field:'createtime', title:'创建日期',align:'center', width:100,
	            	formatter:function(value,rowData,rowIndex){
	            	var JsonDateValue = new Date(value.time);
	            	var text = JsonDateValue.toLocaleString(); 
	            	     return text;
	                }
	           	},
	            {field:'bz', title:'备注',align:'center', width:60}
	            　	]]
	    });
	}

	function deleteRoleManager(row){
		jQuery.messager.confirm('温馨提示','确认删除此条信息吗？',function(r){
			if(r){
				$.ajax({
				     type: "post",
				     url: '/role/deleteRole',
				     data: {"id":row[0].id},
				     cache: false,
				     async : false,
				     dataType: "json",
				     success: function (data,textStatus){
				    	var flag = data.flag;
				    	if(flag == "success"){
				    		jQuery.messager.alert('温馨提示', "删除成功！", 'info');
				    		seachRoleList();
				    		$("#userAddDlg").dialog('close');
				    	}else if(flag == "error"){
				    		jQuery.messager.alert('温馨提示', "删除失败！", 'info');
				    		return false;
				    	}else if(flag == "error2"){
				    		jQuery.messager.alert('温馨提示', "删除失败！不能删除超级管理员！", 'info');
				    		return false;
				    	}
			         },
			         error:function(){
			        	 jQuery.messager.alert('温馨提示', "服务器异常！", 'error');
			        	 return false;
			         }
				 });
				
			}
		});
	}
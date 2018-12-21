	var userList_tableBar = [
	    {
	   	 id:"a_drtManagerAdd",
	   	 iconCls: 'icon-add',
	   	 handler:function(){
  			addDrtManager();
  		 },
		 text:"新增"
	    },"-",
	    {
	   	 id:"a_drtManagerUpdate",
	   	 iconCls: 'icon-edit',
	   	 handler:function(){
	   		var row = $("#table_userList").datagrid('getSelections');
	  		if (row.length > 0) {
	  			editDrtManager(row);
	        } else {
	        	jQuery.messager.alert('温馨提示', "请选择一条要修改的数据！", 'info');
		    }
	  	 },
		 text:"修改"
	    },"-",
	    {
	   	 id:"a_drtManagerDelete",
	   	 iconCls: 'icon-cut',
	   	 handler:function(){
	   		var row = $("#table_userList").datagrid('getSelections');
	   	    if (row.length > 0) {
	   	    	deleteManager(row);
	        } else {
	        	jQuery.messager.alert('温馨提示', "请选择一条要删除的数据！", 'info');
	        }
	  		
	   	 },
		 text:"删除"
	    }
	];      
	
	$(this).ready(function() {
		initUser();
	});

	function exportUser(){
		window.location.href="/user/export";
	}

	function initUser(){
		var table_userList=$("#table_userList");
		table_userList.datagrid({ 
	    	pagination: true,
	    	url:"/user/queryUserList",
	        toolbar:userList_tableBar,
	        rownumbers:true,
	        fitColumns:true,
	        singleSelect : true,
	        width:Number($("fieldset").css("width").replace("px","")-15),
	        columns: [[
	            {field:'id',title:'序号',align:'center', width: 50},
	            {field:'username', title:'用户名',align:'center', width:50},
	            {field:'userstate', title:'用户状态',align:'center', width:50},
	            {field:'creattime', title:'创建日期',align:'center', width:100,
	            	formatter:function(value,rowData,rowIndex){
	            	var JsonDateValue = new Date(value.time);
	            	var text = JsonDateValue.toLocaleString(); 
	            	     return text;
	                }
	           	},
	            {field:'userrolename', title:'用户角色',align:'center', width:50},
	            {field:'bz', title:'备注',align:'center', width:60}
	            　	]]
	    });
	}
	
	var addUserDia;
	function addDrtManager() {
		addUserDia = $("#userAddDlg");
		addUserDia.dialog({
	   		title: '新增用户',
	   		href: '/user/toUserAdd',
	   		width: 800,
	   		height:480,
	   		draggable:true,
	   		modal: true,	    
	   		buttons:[{
				text:'保存',
				width:80,
				height:25,
				handler:function(){
					var userName = $("#userName_add").textbox('getValue');
					var passWord = $("#passWord_add").textbox('getValue');
					var role = $("#table_userRoleList").datagrid('getSelections');
					
					if(userName == undefined || userName == ''){
						jQuery.messager.alert('温馨提示', "请输入用户名！", 'info');
						return false;
					}
					
					if(passWord == undefined || passWord == ''){
						jQuery.messager.alert('温馨提示', "请输入密码！", 'info');
						return false;
					}
					
					if(role.length == 0){
						jQuery.messager.alert('温馨提示', "请选择用户权限！", 'info');
						return false;
					}
					
					
					$.ajax({
					     type: "post",
					     url: '/user/submitUser',
					     data: {"userName":userName,"passWord":passWord,"role":role[0].id},
					     cache: false,
					     async : false,
					     dataType: "json",
					     success: function (data,textStatus){
					    	var flag = data.flag;
					    	if(flag == "success"){
					    		jQuery.messager.alert('温馨提示', "新增成功！", 'info');
					    		seachUserList();
					    		$("#userAddDlg").dialog('close');
					    	}else if(flag == "error"){
					    		jQuery.messager.alert('温馨提示', "新增失败！", 'info');
					    		return false;
					    	}else if(flag == "error2"){
					    		jQuery.messager.alert('温馨提示', "新增失败！用户名重复！", 'info');
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
					addUserDia.dialog('close');
				}
			}],
			onLoad:function(){
				var table_userRoleList=$("#table_userRoleList");
				table_userRoleList.datagrid({ 
			    	pagination: true,
			    	url:"/user/queryRoleList",
			        rownumbers:true,
			        fitColumns:true,
			        singleSelect:true,
			        cache:false,
					height:300,
			        columns: [[
			            {field:'id',align:'center',hidden:true},
			            {field:'name',align:'center', width:100},
			            {field:'createtime',align:'center', width:100,
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
	
	function editDrtManager(row) {
		$("#userEditDlg").dialog({
	   		title: '修改用户',
	   		href: '/user/toUserEdit?userID='+row[0].id,
	   		draggable:true,
	   		width: 800,
	   		height:480,
	   		buttons:[{
				text:'保存',
				width:80,
				height:25,
				handler:function(){
					var id = row[0].id;
					var createtime = row[0].creattime;
					var userName = $("#userName_edit").textbox('getValue');
					var passWord = $("#passWord_edit").textbox('getValue');
					var role = $("#table_userRoleEditList").datagrid('getSelections');
					
					if(userName == undefined || userName == ''){
						jQuery.messager.alert('温馨提示', "请输入用户名！", 'info');
						return false;
					}
					
					if(passWord == undefined || passWord == ''){
						jQuery.messager.alert('温馨提示', "请输入密码！", 'info');
						return false;
					}
					
					if(role.length == 0){
						jQuery.messager.alert('温馨提示', "请选择用户权限！", 'info');
						return false;
					}
					
					var JsonDateValue = new Date(createtime.time);
	            	var text = JsonDateValue.toLocaleDateString().replace(/\//g, "-")+ " " + JsonDateValue.toTimeString().substr(0, 8); 
	            	
					$.ajax({
					     type: "post",
					     url: '/user/updateUser',
					     data: {"id":id,"userName":userName,"passWord":passWord,"createtime":text,"role":role[0].id},
					     cache: false,
					     async : false,
					     dataType: "json",
					     success: function (data,textStatus){
					    	var flag = data.flag;
					    	if(flag == "success"){
					    		jQuery.messager.alert('温馨提示', "修改成功！", 'info');
					    		seachUserList();
					    		$("#userEditDlg").dialog('close');
					    	}else if(flag == "error"){
					    		jQuery.messager.alert('温馨提示', "修改失败！", 'info');
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
					$("#userEditDlg").dialog('close');
				}
			}],
			onLoad:function(){
				var table_userRoleList=$("#table_userRoleEditList");
				table_userRoleList.datagrid({ 
			    	pagination: true,
			    	url:"/user/queryRoleList",
			        rownumbers:true,
			        fitColumns:true,
			        singleSelect:true,
			        cache:false,
			        height:300,
			        columns: [[
			            {field:'id',align:'center', width: 50},
			            {field:'name',align:'center', width:100},
			            {field:'createtime',align:'center', width:100,
			            	formatter:function(value,rowData,rowIndex){
			            	var JsonDateValue = new Date(value.time);
			            	var text = JsonDateValue.toLocaleString(); 
			            	     return text;
			                }
			           	}
			            　	]],
			        onLoadSuccess:function(){
			        	var rows = $("#table_userRoleEditList").datagrid("getRows");
			        	var userRole = row[0].userrole;
				    	for(var i = 0; i < rows.length; i++){
				    		if(rows[i].id == userRole){
				    			$('#table_userRoleEditList').datagrid('selectRow',i);
				    		}
				    	}
			        }
			    });
				
				
				
			}
	   	});
		
	}
	
	function seachUserList(){
		var username_search = $("#username_search").val();
		
		var table_userList=$("#table_userList");
		table_userList.datagrid({ 
	    	pagination: true,
	    	url:"/user/searchUserList?username="+username_search,
	        toolbar:userList_tableBar,
	        rownumbers:true,
	        fitColumns:true,
	        singleSelect : true,
	        width:Number($("fieldset").css("width").replace("px",""))+20,
	        columns: [[
	            {field:'id',title:'序号',align:'center', width: 50},
	            {field:'username', title:'用户名',align:'center', width:50},
	            {field:'userstate', title:'用户状态',align:'center', width:50},
	            {field:'creattime', title:'创建日期',align:'center', width:100,
	            	formatter:function(value,rowData,rowIndex){
	            	var JsonDateValue = new Date(value.time);
	            	var text = JsonDateValue.toLocaleString(); 
	            	     return text;
	                }
	           	},
	            {field:'userrolename', title:'用户角色',align:'center', width:50},
	            {field:'bz', title:'备注',align:'center', width:50}
	            　	]]
	    });
	}
	
	function deleteManager(row){
		jQuery.messager.confirm('温馨提示','确认删除此条信息吗？',function(r){
			if(r){
				$.ajax({
				     type: "post",
				     url: '/user/deleteUser',
				     data: {"id":row[0].id},
				     cache: false,
				     async : false,
				     dataType: "json",
				     success: function (data,textStatus){
				    	var flag = data.flag;
				    	if(flag == "success"){
				    		jQuery.messager.alert('温馨提示', "删除成功！", 'info');
				    		seachUserList();
				    		$("#userAddDlg").dialog('close');
				    	}else if(flag == "error"){
				    		jQuery.messager.alert('温馨提示', "删除失败！", 'info');
				    		return false;
				    	}else if(flag == "error2"){
				    		jQuery.messager.alert('温馨提示', "删除失败！不能删除ROOT！", 'info');
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
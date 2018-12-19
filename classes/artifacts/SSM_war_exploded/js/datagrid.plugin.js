$.extend($.fn.datagrid.methods, {
	editCell: function(jq,param){
		return jq.each(function(){
			var fields = $(this).datagrid('getColumnFields',true).concat($(this).datagrid('getColumnFields'));
			for(var i=0; i<fields.length; i++){
				var col = $(this).datagrid('getColumnOption', fields[i]);
				col.editor1 = col.editor;
				if (fields[i] != param.field){
					col.editor = null;
				}
			}
			$(this).datagrid('beginEdit', param.index);
			$(this).datagrid('options').editField = param.field;
            var ed = $(this).datagrid('getEditor', param);
            if (ed){
                if ($(ed.target).hasClass('textbox-f')){
                    $(ed.target).textbox('textbox').focus();
                } else {
                    $(ed.target).focus();
                }
            }
			for(var i=0; i<fields.length; i++){
				var col = $(this).datagrid('getColumnOption', fields[i]);
				col.editor = col.editor1;
			}
		});
	},
	editRow:function(jq,param){
		return jq.each(function(){
			$(this).datagrid('beginEdit', param.index);
			$(this).datagrid('options').editField = param.field;
            var ed = $(this).datagrid('getEditor', param);
            if (ed){
                if ($(ed.target).hasClass('textbox-f')){
                    $(ed.target).textbox('textbox').focus();
                } else {
                    $(ed.target).focus();
                }
            }
		});
	},
    enableCellEditing: function(jq){
        return jq.each(function(){
            var dg = $(this);
            var opts = dg.datagrid('options');
            if(!opts.cellEdit&&!opts.rowEdit){
        		return;
        	}
            opts.oldOnClickCell = opts.onClickCell;
            opts.onClickCell = function(index, field){
                if (opts.editIndex != undefined){
                    if (dg.datagrid('validateRow', opts.editIndex)){
                    	if(opts.cellEdit){
                    		if(opts.editField!=undefined){
                        		//列编辑 ，问题，行编辑无法获取编辑列
                        		var ed = dg.datagrid('getEditor', {index:opts.editIndex,field:opts.editField});       
                        		if(ed){
                            		if($(ed.target).hasClass('combo-f')){
                            			var name = $(ed.target).combobox('getText');
                        				dg.datagrid('getRows')[opts.editIndex][opts.editField+"name"] = name;
                            		}
                            	}
                        		opts.editField = undefined;
                        	}  
                    	}else if(opts.rowEdit){
                    		var fields = $(this).datagrid('getColumnFields',true).concat($(this).datagrid('getColumnFields'));
                			for(var i=0; i<fields.length; i++){
                				var op = {
            						index: opts.editIndex,
                                    field: fields[i]
                				};
                				var ped = dg.datagrid('getEditor', op); 
                				if(ped){
                            		if($(ped.target).hasClass('combo-f')){
                            			var name = $(ped.target).combobox('getText');
                        				dg.datagrid('getRows')[opts.editIndex][fields[i]+"name"] = name;
                            		}
                            	}
                			}
                    	}            	             	
                    	dg.datagrid('endEdit', opts.editIndex);                 
                        opts.editIndex = undefined;
                    } else {
                        return;
                    }
                }
                if(opts.cellEdit){
                	 dg.datagrid('selectRow', index).datagrid('editCell', {
                         index: index,
                         field: field
                     });
                }else if(opts.rowEdit){
                	dg.datagrid('selectRow', index).datagrid('editRow', {
                        index: index,
                        field: field
                    });
                }         
                opts.editIndex = index;
                opts.editField = field;
                opts.oldOnClickCell.call(this, index, field);
            };
        });
    }
});
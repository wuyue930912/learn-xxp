(function($){
	$.Win = function (parent) {
		this.parent = parent;
		this.id = "WinID";
		this.options ={};
		this.callback = {
			beforeOpen:function(){},
			beforeCommit:function(){},
			beforeClose:function(){}
		};
    };
    $.extend($.Win.prototype,{
    	opens:function(id,content){
    		/*if(this.callback.beforeOpen){
    			this.callback.beforeOpen();
    		}
    		if(this.jsp){
    			$('#'+this.id).window('refresh', this.jsp);
    		}*/
    		/*var wdiv = "<div id='"+id+"' style=\"width: 800px; height: 450px; padding: 5px;\"></div>";
    		$(wdiv).appendTo(this.parent);
    		
    		$(wdiv).window({    
    		    width:600, 
    		    height:400,    
    		    modal:true  
    		});
    		$(wdiv).window('refresh', 'testView');
    		$(wdiv).window("open");
    		*/  
    		this.parent.html('');
    		/*content.appendTo(this.parent);*/
    		/**/
    		
    		this.parent.window({    
    		    width:900, 
    		    height:500,    
    		    modal:true, 
    		    title:'债券注册',
    		});
    		this.parent.window('refresh', 'testView');
    		/*content.show();*/
    		this.parent.window("open");
    		
    	},
    	commit:function(){
    		if(this.callback.beforeCommit){
    			this.callback.beforeCommit();
    		}
    		$('#'+this.id).window("close");
    	},
    	close:function(id){
    		$('#'+this.id).window("close");
    		this.parent.remove($('#'+this.id));
    		/*if(this.callback.beforeClose){
    			this.callback.beforeClose();
    		}*/
    		
    	}
    });
})(jQuery);
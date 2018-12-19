(function($) {
	$.App = function(id, tab, fhID) {
		this.id = id;
		this.tab = tab;
		this.fhID = fhID;
		this.afterObj = {};
	};
	$.extend($.App.prototype, {
		addTab : function(mname, url, mid, closeable, isReload) {
			if (isReload == null || isReload == undefined) {
				isReload = false;
			}
			if (mid == null || mid == undefined) {
				var date = new Date();
				mid = "AT_" + date.getTime();
			}
			if (!this.tab.tabs('exists', mname)) {
				this.tab.tabs('add', {
					id : mid,
					title : mname,
					content : '<iframe id="frm' + mid + '_tab" name="frm' + mid + '" width="100%" height="98%"  frameborder="0" scrolling="auto" ></iframe>',
					cls : 'center_view',
					/* iconCls:'icon-menu', */
					closable : closeable
				});
				$('#' + this.id + ' iframe[name=frm' + mid + ']').attr("src", url);
				// try{
				// //增加历史
				// // window.history.pushState({mname:mname,url:url,mid:mid,closable:closable,isReload:isReload},mname, "#"+mid);
				// }catch(e){
				//						 
				// }
			} else { 
				if (isReload)
					$('#' + this.id + ' iframe[name=frm' + mid + ']').attr("src", url);
				this.tab.tabs('select', mname);
			}
			tabClose();
			return mid;
		},
		closeTab : function(index) {
			this.tab.tabs("close", index);
		},
		closeTabByTitle : function(title) {
			var c_tab = this.tab.tabs("getTab", title);
			var index = this.tab.tabs("getTabIndex", c_tab);
			this.tab.tabs("close", index);
		},
		closeCurrentTab : function() { 
			var tab = this.tab.tabs("getSelected");
			var index = this.tab.tabs("getTabIndex", tab);
			this.tab.tabs("close", index);
		},
		getSelectIndex : function() {
			var tab = this.tab.tabs("getSelected");
			var index = this.tab.tabs("getTabIndex", tab);
			return index;
		},
		showFhView : function(obj) {
			this.afterObj = obj;
			$('#' + this.fhID).window("open");
		},
		closeFhView : function() {
			$('#' + this.fhID).window("close");
		},
		submitFhVire : function(obj) {
			this.closeFhView();
			this.afterObj.commitAfterFhView();
		},
		// 马良 2015年11月26日
		// 显示进度条窗口
		//第一个参数msg为null
		//第二个参数  true代表背景透明  否则false背景为灰色
		showprogressWin : function(msg,booltrans) {
			if (msg) {
				$('#msg').html(msg);
			}
			if(booltrans){
				$('#bgdiv').css({'background-color':"transparent"});
			}
			else{
				$('#bgdiv').css({'background-color':"#2b2b2b"});
			}
			$('#bgdiv,#showdiv').show();
			$('#showdiv').css({
				'top' : ($(window).height() - $('#showdiv').height()) / 2,
				'left' : ($(window).width() - $('#showdiv').width()) / 2
			});
		},
		// 关闭进度条窗口
		closeprogressWin : function() {
			$('#bgdiv').css({'background-color':"#2b2b2b"});
			$("#bgdiv,#showdiv").hide();
		},
		getTab : function(title) {
			var c_tab = this.tab.tabs("getTab", title);
			return c_tab;
		}
	});
})(jQuery);
function tabClose() {
	/* 双击关闭TAB选项卡 */
	$(".tabs-inner").dblclick(function() {
		var subtitle = $(this).children(".tabs-closable").text();
		// $('#center_view').tabs('close',subtitle);
		$('#center_view').tabs('select', subtitle);
	})
	/* 为选项卡绑定右键 */
	$(".tabs-inner").bind('contextmenu', function(e) {
		$('#mm').menu('show', {
			left : e.pageX,
			top : e.pageY
		});
		var subtitle = $(this).children(".tabs-closable").text();
		$('#mm').data("currtab", subtitle);
		$('#center_view').tabs('select', subtitle);
		return false;
	});
	// 1.左侧树形菜单的右键菜单屏蔽功能，需要保main界面加载app.js --mkw
	// 2.右键菜单屏蔽功能，需要保证所有界面都加载该 pubfun.js --mkw
	$(".tree-node").bind('contextmenu', function(e) {
		return false;
	});
}
// 绑定右键菜单事件
function tabCloseEven() {
	// 刷新
	$('#mm-tabupdate').click(function() {
		var currTab = $('#center_view').tabs('getSelected');
		var url = $(currTab.panel('options').content).attr('src');
		$('#center_view').tabs('update', {
			tab : currTab,
			options : {
				content : createFrame(url)
			}
		})
	})
	// 关闭当前
	$('#mm-tabclose').click(function() {
		var currtab_title = $('#mm').data("currtab");
		$('#center_view').tabs('close', currtab_title);
	})
	// 全部关闭
	$('#mm-tabcloseall').click(function() {
		$('.tabs-inner span').each(function(i, n) {
			var t = $(n).text();
			$('#center_view').tabs('close', t);
		});
	});
	// 关闭除当前之外的TAB
	$('#mm-tabcloseother').click(function() {
		$('#mm-tabcloseright').click();
		$('#mm-tabcloseleft').click();
	});
	// 关闭当前右侧的TAB
	$('#mm-tabcloseright').click(function() {
		var nextall = $('.tabs-selected').nextAll();
		if (nextall.length == 0) {
			// msgShow('系统提示','后边没有啦~~','error');
			// alert('后边没有啦~~');
			return false;
		}
		nextall.each(function(i, n) {
			var t = $('a:eq(0) span', $(n)).text();
			$('#center_view').tabs('close', t);
		});
		return false;
	});
	// 关闭当前左侧的TAB
	$('#mm-tabcloseleft').click(function() {
		var prevall = $('.tabs-selected').prevAll();
		if (prevall.length == 0) {
			// alert('到头了，前边没有啦~~');
			return false;
		}
		prevall.each(function(i, n) {
			var t = $('a:eq(0) span', $(n)).text();
			$('#center_view').tabs('close', t);
		});
		return false;
	});
	// 退出
	$("#mm-exit").click(function() {
		$('#mm').menu('hide');
	})
}


(function($){
	$.fn.datagrid.methods.beginEditT=function(jq,index){
	    return jq.each(function(){
	    $.fn.datagrid.methods.beginEdit.call(null,$(this),index);
	     var filed=$(this).datagrid('getColumnFields'),len=filed.length;
	     for(var i=0;i<len;i++){
	         var filedOpt=$(this).datagrid('getColumnOption',filed[i]);
	         if(typeof filedOpt.editor =='object'){
	           var ed=$(this).datagrid('getEditor', {index:index,field:filed[i]});
	           $(ed.target).next().find('.textbox-text').get(0).select();
	         }       
	     }
	    })
	}
})(jQuery)
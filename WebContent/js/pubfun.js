
/**
 * 转换表格行的数据为json
 */
function buildRowData(row){
	var data = [];
	$.each(row,function(r,v){
		data.push(r+":'"+v+"'");							
	});
	var rdata = "{"+data.join(",")+"}";
	return rdata;
}

/*
 * easyui的text-box 在代码生成过程中生成了不止一个元素
 * 为easyui的text-box提供统一样式
 * 马良 
 * 2015年12月3日
 * 参数1 "#a1,#a2"这种方式
 * 参数2 提供 {"background-color":"red",'font-size':"14px"}
 */
function EasyuiTextBoxCss(elements,cssobj)
{
	$(elements).each(function(index,item){
		var a = $(item).siblings().get(0);
	    $(a).find(".textbox-text").css(cssobj);
	});
}

//马良
//当一个输入满4个时，自动跳到下一个
function changeFocus(item1,item2)
{

	var a1 = $(item1).next();
	var a2 = $(item2).next();
	
	var a11=$(a1).find(".textbox-text");
	var a22=$(a2).find(".textbox-text");
	
	a11.keyup(function(){
		
		$this=$(this);
		if($this.val().length==4)
			{
			a22.focus();
			a22.select();
			}
	});
	
}

//maliang 2015年12月16日
//此函数用于验证功能 两个id 其中验证前面的值是否小于等于后面的值
//参数有3个 id1 第一个控件的id id2 第二个控件的id msg 当返回false的信息
function dateLessEqualThan(id1, id2, msg) {
  var v1 = $(id1).combo('getText');
  var v2 = $(id2).combo('getText');
  if (v1 != null && v1 != "" && v1 != undefined && v2 != null && v2 != "" && v2 != undefined) {
      d1 = string2datetime(v1);
      d2 = string2datetime(v2);
      ret = (d1 <= d2);
      if (!ret) {
          if (msg) {
        	  $.messager.alert('验证错误',msg,'error');
          }
      }
      return ret;
  }
  else {
      return true;
  }
}

//maliang 2015年12月16日
//此函数用于验证功能 两个id 其中验证前面的值是否小于后面的值
//参数有3个 id1 第一个控件的id id2 第二个控件的id msg 当返回false的信息
function dateLessThan(id1, id2, msg) {
  var v1 = $(id1).combo('getText');
  var v2 = $(id2).combo('getText');
  if (v1 != null && v1 != "" && v1 != undefined && v2 != null && v2 != "" && v2 != undefined) {
      d1 = string2datetime(v1);
      d2 = string2datetime(v2);
      ret = (d1 < d2);
      if (!ret) {
          if (msg) {
        	  $.messager.alert('验证错误',msg,'error');
          }
      }
      return ret;
  }
  else {
      return true;
  }
}

//maliang 2015年12月16日
//将2010-01-01这种的转化为时间类型
function string2datetime(s) {
  var d = new Date(s.substr(0, 4) + "/" + s.substr(5, 2) + "/" + s.substr(8, 2));
  return d;
}

//将“20160102”这种String转换成“2016年01月02日这种格式”
function StringToDateZH(s){
	var d = s.substr(0, 4) + "年" + s.substr(4, 2) + "月" + s.substr(6, 2) +"日";
	return d;
}

//2015年11月26日 ajax新方法
//obj为ajax参数
//msg传null
//boolTrans true表示背景透明 false 表示灰色背景
//demo如下所示
//newajax({
//	param:,
//	data:,
//	url,
//},null,true)
function newajax(obj,msg,boolTrans)
{
	parent.app.showprogressWin(msg,boolTrans);
       var success = obj.success;
       var error = obj.error;
       if(!error)
    	   {
    	   error=function(XMLHttpRequest, textStatus, errorThrown){
//    		   alert("操作超时，请尝试刷新或重新登录！"+errorThrown);
    		   $.messager.alert('提示','当前状态已失效，请刷新页面或重新登录！','error');
    	   }
    	   };
    	   obj.timeout=600*1000;
       obj.success = function (data,textStatus) {
           success(data,textStatus);
           parent.app.closeprogressWin();
       };
       obj.error=function(XMLHttpRequest, textStatus, errorThrown){
       	parent.app.closeprogressWin();
      	error(XMLHttpRequest, textStatus, errorThrown);
       };
       $.ajax(obj);
}
//用于建立弹出框建立url连接
function createFrame(url)
{
	var s = '<iframe scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:100%;"></iframe>';
	return s;
}

//通过id获取文本
function GetTextById(dict,id)
{
	var ret="";
	var count=0;
	 $.each(dict,function(index,item){
		 count=count+1;
	if(item.ID==id)
		{
		ret=item.TEXT;
		}
	 });
	 return ret;
}

//通过BM获取文本
function GetTextByBm(dict,bm)
{
	var ret="";
	var count=0;
	 $.each(dict,function(index,item){
		 count=count+1;
	if(item.BM==bm)
		{
		ret=item.TEXT;
		}
	 });
	 return ret;
}

//千分位 隔三位加一个逗点
function formatMoney(s, type,ywydm) {
	if(ywydm=='QB_BJ_ABS'){
		return NewformatMoney(s);
	}
    if (/[^0-9\.]/.test(s)) { /* alert("abc");*/ return s };
    if (s == null || s == "" || s==0) return "0";
    s = s.toString().replace(/^(\d*)$/, "$1.");
    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
    s = s.replace(".", ",");
    var re = /(\d)(\d{3},)/;
    while (re.test(s))
        s = s.replace(re, "$1,$2");
    s = s.replace(/,(\d\d)$/, ".$1");
    if (type == 0) {// 不带小数位(默认是有小数位)
        var a = s.split(".");
        if (a[1] == "00") {
            s = a[0];
        }
    }
    return s;
}

function formatMoneyNoFixed(a){
	var zs = '';
	var xs = '';
	var v = '';
	if(a.toString().indexOf('.') > -1){
		v = a.toString().split('.');
		zs = v[0]+',';
		xs = '.' + v[1];
	}
	else{
		zs = a.toString()+',';
	}
	var re = /(\d)(\d{3},)/;
	while(re.test(zs)){
		zs = zs.replace(re, "$1,$2");
	}
	zs = zs.replace(/,$/,'');
	return zs + xs;
}

//给数值后面添加.0000小数位数精确到四位,或者两位
function paddingZeroRight(s , length) {
	s = s.toString().replace(/[^0-9|\.]/g, ''); //清除字符串中的非数字非.字符
	if(/\./.test(s) && s.split('.')[1].length > 4){
		return s;
	}
	var zeroTail = '';
	if(length==4){
		zeroTail ="0000"; 
	}else if(length==2){
		zeroTail = '00';
	}
	
	if(s == "" || s == null){
		return "0."+zeroTail;
	}
	 if(/^0+/){ //清除字符串开头的0 
           s = s.toString().replace(/^0+/, '');
	}
    if(!/\./.test(s)){//为整数字符串在末尾添加.00  
           s += '.'+zeroTail;//在字符串末尾补零  
	}
     if(/^\./.test(s)){ //字符以.开头时,在开头添加0  
            s = '0' + s+zeroTail;
		}
	if(!/[^0-9|\.]/.test(s)){
		s += zeroTail;//在字符串末尾补零  
	}
	if(length==2){
		s =s.match(/\d+\.\d{2}/)[0];//规定显示的位数
	}else{
		s =s.match(/\d+\.\d{4}/)[0];//规定显示的位数
	}
       
       return s;
}


//万元转元
function Wan2Yuan(data)
{
	 var retData=data*10000;
	return  formatMoney(retData, 0);
}

//元转万元
function Yuan2Wan(data)
{
	 var retData=data*0.0001;
	return  formatMoney(retData, 0);
}
//14位字符串转换成日期
function formatDate14(data)
{
    var time=data;
    time = time==null?"":time.replace(" ","");
    if(time!="" && time.length==14){
        var tks=time.substr(0, 4)+'-'+time.substr(4, 2)+'-'+time.substr(6, 2)+' '+
            time.substr(8, 2)+':'+time.substr(10, 2)+':'+time.substr(12, 2);
        return tks;
    }else{
        return time;
    }


}
//8位字符串 日期转换
function formatDate8(data)
{
    var time=data;
    time = time==null?"":time.replace(" ","");
    if(time!="" && time.length==8){
        var tks=time.substr(0, 4)+'-'+time.substr(4, 2)+'-'+time.substr(6, 2)+' '+
            time.substr(8, 2);
        return tks;
    }else{
        return time;
    }

}
//获取浏览器里面的参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

//将小数转换成百分数
function decimal2Percent(obj)
{
    if(obj!=null && obj!=""){
        return (accMul(obj,100));
    }else{
        return "";
    }

}

function removeItem(obj,removeitem)
{
	var ret=[];
	 $.each(obj,function(index,item){
		 if(removeitem!=item)
			 {
			 ret.push(item);
			 }
	 });
	ret.sort(function (a, b) { return a-b});
	return ret;	 
}
// 为easyUI增加属性
function EasyuiTextBoxAttr(elements, cssobj) {
    $(elements).each(function (index, item) {
        var a = $(item).siblings().get(0);
        $(a).find(".textbox-text").attr(cssobj);
    });
}

function EasyuiTextBoxAttr2(elements, cssobj){
	var a = $(elements).next();
	$(a).find(".textbox-text").attr(cssobj);
}

function EasyuiDateBoxAttr(elements, cssobj){
	 $(elements).each(function (index, item) {
	        var a = $(item).siblings().find('.textbox-text').attr(cssobj);
	    });
}

//乘法
function accMul(arg1, arg2)
{
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    } catch (e) {
    }
    try {
        m += s2.split(".")[1].length;
    } catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
//字符串去前后空格
function trimStr(str){
	return str.replace(/(^\s*)|(\s*$)/g,"");
}
//onchange
function  onChangeCheck(obj) { 
	$('#'+obj.id).textbox("enableValidation").textbox('validate');
	if(!$('#'+obj.id).textbox("isValid")){
		//$.messager.alert('<%=ymbtbhMap.get("point").toString() %>','页面信息输入有误，请检查！','error');
		return false;
	} 
}

//onchange后格式数据2016.7.14 zxf 数值类型,数值补齐0000 type:-1可以为负数,0不可以
function  parseValueByType(obj,inputType,pointLength,type) {
	if(inputType=='numberbox'){
		var o = $('#'+obj.id).numberbox("getValue"); 
		if(type==-1){
			o = $('#'+obj.id).numberbox("setValue",paddingZeroTail(o, pointLength));
		}else{
			o = $('#'+obj.id).numberbox("setValue",paddingZeroRight(o, pointLength));
		}
		
	} else if(inputType=='datebox'){
		var o = $('#'+obj.id).datebox("getValue");  
		if( (o.length==8 ||o.length==9 ) && o.indexOf("-")>0){
			var s3 = o.split("-");
			if(s3.length==3&& s3[1]!=0 && s3[2]!=0){
				//s3[2]为0时会赋值当月最后一天 
    			var y = s3[0];
		        var m = parseInt(s3[1]);
		        var d = s3[2];
		       var t = y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
		      /// o = $('#'+obj.id).datebox("setValue", t);
			}		
		}
	}
}
//给数值后面添加.0000小数位数精确到四位 ,保留负号
function paddingZeroTail(s , length) { 
	s = s.toString().replace(/[^0-9|\-|\.]/g, ''); //清除字符串中的非数字非.字符 
	var zeroTail = '';
	if(length==4){
		zeroTail ="0000"; 
	}else if(length==2){
		zeroTail = '00';
	}
	
	if(s == "" || s == null){
		return "0."+zeroTail;
	}
	 if(/^0+/.test(s)){ //清除字符串开头的0 
           s = s.toString().replace(/^0+/, '');
	}
    if(!/\./.test(s)){//为整数字符串在末尾添加.00  
           s += '.'+zeroTail;;//在字符串末尾补零  
	}
     if(/^\./.test(s)){ //字符以.开头时,在开头添加0  
            s = '0' + s+zeroTail;
		}
	if(!/[^0-9|\-|\.]/.test(s)){
		s += zeroTail;//在字符串末尾补零  
	}
	if(length==2){
		s =s.match(/(^\-?)\d+\.\d{2}/)[0];//规定显示的位数
	}else{
		s =s.match(/(^\-?)\d+\.\d{4}/)[0];//规定显示的位数
	}
       return s;
}
//延长截止时间格式限制
function gsTime(param){
	var arr=param.split(',');
	$.each(arr,function(index,item){
		$('#'+item).siblings().find('.textbox-text ').keypress(function(e){
		    var presstxtA;
		    var presstxt;
		   if(typeof e.charCode=='number'){
		         presstxtA=e.charCode;
		   }else{
		         presstxtA=e.keyCode;
		   }
		    presstxt=String.fromCharCode(presstxtA);
		    if(!/[0-9:]/.test(presstxt)) return false;
		}).focus(function(){
	    	this.style.imeMode='disabled';
	    });
	})	
}
//日期格式限制XXXX-XX-XX
function gsData(param){
	var arr=param.split(',');
	$.each(arr,function(index,item){
		$('#'+item).siblings().find('.textbox-text ').keypress(function(e){
		    var presstxtA;
		    var presstxt;
		   if(typeof e.charCode=='number'){
		         presstxtA=e.charCode;
		   }else{
		         presstxtA=e.keyCode;
		   }
		    presstxt=String.fromCharCode(presstxtA);
		    if(!/[0-9-]/.test(presstxt)) return false;
		    
		    var text=$(this).val(); 
		    if(text.length==3){
		        $(this).val(text+presstxt+'-');
		        return false;
		    }else if(text.length==6){
		        $(this).val(text+presstxt+'-');
		        return false;
		    }
		}).focus(function(){
	    	this.style.imeMode='disabled';
	    });
	})	
}
//时间格式限制XXXX-XX-XX XX:XX:XX
function gsDatatime(param){
	var arr=param.split(',');
	$.each(arr,function(index,item){
		$('#'+item).siblings().find('.textbox-text ').keypress(function(e){
		    var presstxtA;
		    var presstxt;
		   if(typeof e.charCode=='number'){
		         presstxtA=e.charCode;
		   }else{
		         presstxtA=e.keyCode;
		   }
		    presstxt=String.fromCharCode(presstxtA);
		    if(!/[0-9-:]/.test(presstxt)) return false;
		    
		    var text=$(this).val(); 
		    if(text.length==3){
		        $(this).val(text+presstxt+'-');
		        return false;
		    }else if(text.length==6){
		        $(this).val(text+presstxt+'-');
		        return false;
		    }else if(text.length==9){
		        $(this).val(text+presstxt+' ');
		        return false;
		    }else if(text.length==12){
		        $(this).val(text+presstxt+':');
		        return false;
		    }else if(text.length==15){
		        $(this).val(text+presstxt+':');
		        return false;
		    }
		}).focus(function(){
	    	this.style.imeMode='disabled';
	    });
	})	
}

//元转万元，适用于ABS债等带小数的转换
function Newyuan2Wan(data)
{
	 var retData=data*0.0001;
	return  NewformatMoney(retData, 1);
}

//千分位 隔三位加一个逗点，适用于ABS债等带小数的转换
function NewformatMoney(s, type) {
    if (/[^0-9\.]/.test(s)) { /* alert("abc");*/ return s };
    if (s == null || s == "" || s==0) return "0";
    s = s.toString().replace(/^(\d*)$/, "$1.");
    s = (s + "0000").replace(/(\d*\.\d\d\d\d)\d*/, "$1");
    s = s.replace(".", ",");
    var re = /(\d)(\d{3},)/;
    while (re.test(s))
        s = s.replace(re, "$1,$2");
    s = s.replace(/,(\d\d\d\d)$/, ".$1");
    if (type == 0) {// 不带小数位(默认是有小数位)
        var a = s.split(".");
        if (a[1] == "0000") {
            s = a[0];
        }
    }
    return s;
}

//元转万元
function ForYuan2Wan(data,Ywydm)
{
	var retData = 0;
	 if(/^-/.test(data)){
		 if(Ywydm == 'QB_BJ_ABS')
		 {
			 retData=bigNumTrans(String(data).slice(1)); 
			 return '-'+NewformatMoney(retData, 1);
		 }
		 else
		 {   
			 retData=String(data).slice(1)*0.0001; 
			 return '-'+formatMoney(retData, 0);
		 }
		 
	 }else{

		 if(Ywydm == 'QB_BJ_ABS')
		 {
			 retData=bigNumTrans(data); 
			 return NewformatMoney(retData, 1);
		 }
		 else
		 {
			 retData=data*0.0001; 
			 return formatMoney(retData, 0);
		 }
	 }
		

	 
}

function bigNumTrans(num){
	var num=num.toString(),len=num.length,zero='0.';
	if(len<5){
	for(var i=0;i<4-len;i++){
	   zero+='0';
	}
	return zero+num;	 
	}else{
    return num.replace(/^(\d+)(\d{4})$/,'$1.$2')
	}
}

//加法
function accAdd(arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)+1);//返回 10 的 y 次幂
    return (arg1 * m + arg2 * m) / m;
}

//连续点击不重复弹出两次提示框
(function(window){
	   var  obj={};
		function NotTwo(time,num){
			if(!obj[num]) obj[num]=[];
			deltime=obj[num];
			if(deltime.length>2) deltime.splice(0,1);			
			deltime.push(time.valueOf());
			if(deltime.length>1){
				var lastTime=deltime.slice(-1);
				var last2Time=deltime.slice(-2,-1);
				if((lastTime[0]-last2Time[0])<450) return false;
				else return true;
			}else{
				return true;
			}
		}
		window.NotTwice=NotTwo;//将块级结构中的NotTwo函数赋值给window对象，使得外部的函数也能调用该函数
	})(window)  
	//1.左侧树形菜单的右键菜单屏蔽功能，需要保main界面加载app.js --mkw
	//2.右键菜单屏蔽功能，需要保证所有界面都加载该 pubfun.js --mkw
document.oncontextmenu=function(){return(false);} 
history.forward();

//利率--1位整数，6位小,排除出现小数位数突增现象
function transRate(num){
	//利率为零或空返回0	
	if(!num) {
		return "0.0000";
	} else {
		return (num*100).toFixed(4);
	}
//	var str=num.toString(),pos=str.indexOf('.')==-1?false:true,zs,xs,len,More3,xs2;
//	if(!pos){
//		//只有整数
//		return str+'00.0000';
//	}else{
//		//带小数
//		//整数为零置为空
//		zs=str.split('.')[0]==='0'?'':str.split('.')[0];
//		xs=str.split('.')[1];
//		len=xs.length;
//		if(len>2){
//            //整数为零时，分十位和个位分别为零的情况
//			xs2=xs.substr(0,2);
//			xs2=zs==''?(/^00$/.test(xs2)==true?xs2.replace(/^00/,'0'):xs2.replace(/^0/,'')):xs2;
//			More3=zs+xs2+'.'+xs.slice(2)
//		}		
//		switch(len){
//         case 1:return zs+xs+'0.0000';break;
//         case 2:return zs+(xs=zs==''?xs.replace(/^0/,''):xs)+'.0000';break;
//         case 3:return More3+'000';break;
//         case 4:return More3+'00';break;
//         case 5:return More3+'0';break;
//         case 6:return More3;break;
//		}
//	}
}
	/*$(function(){
		$(document).on('focusin', ':text', function(e) {
			
				this.select();
			
			$(this).one("mouseup", function(event) {
				event.preventDefault();
			});
		})
	})
*/
/*//处理键盘事件 禁止后退键 （Backspace） 密码或单行、多行文本框除外
function banBackSpace(e){
	var ev= e || window.event;//获取event对象
	var obj=ev.target || ev.srcElement;//获取事件源
	var t=obj.type || obj.getAttribute('type'); //获取事件源类型
	//获取作为判断条件的事件类型
	var vReadOnly = obj.getAttribute('readonly');
	var vEnabled = obj.getAttribute('enabled');
	//处理NULL值情况
	vReadOnly = (vReadOnly == null)?false:true;
	vEnabled = (vEnabled == null)?true:false;
	//当敲Backspace键时，事件源类型为密码或单行、多行文本
	//并且readonly属性为true或enable属性为false的，则退格键失效
	var flag1=(ev.keyCode ==8 && (t=="password" || t=="text" || t=="textarea") 
			&& (vReadOnly==true || vEnabled!==true))?true:false;
	//当敲Backspace键时，事件源类型为非密码或单行、多行文本的，则退格键实效
	var flag2=(ev.keyCode == 8 && t!="password" && t!="text" && t!="textarea")?true:false;
	//判断
    if(flag2){
    	return false;
    }
	if(flag1){
		return false;
	}
}

//禁止后退键 作用于Firefox、Opera
document.onkeypress=banBackSpace;
//禁止后退键 作用IE、Chrome
document.onkeydown=banBackSpace;*/

if(window.$!=null){
	$(function(){

			$(':input[class*=box][id]:enabled:not([class*=com]):not([class*=timespinner])').next().find('.textbox-text').on('focus',function(){
			    if(this.value !== ''){
			    	this.select();
			    }		
			});


			$(document).on('keydown',function(e){
			               var tar = e.target;
			         	  if(e.which == '8' && (tar.tagName == 'INPUT' || tar.tagName == 'TEXTAREA') && !tar.disabled && !tar.readOnly && !!tar.value && ($(tar).parent('.combo:not(.datebox)').length === 0?true:false)){
			         	  	return true;
			         	  }else if(e.which == '8'){
			         	  	return false;
			         	  }	
						})
	});
}

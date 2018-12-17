
(function ($) {
    //自定义日期格式化
    $.fn.datebox.defaults.formatter = function (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
    };
    //自定义日期解码,支持格式（yyyyMMdd,yyyy-MM-dd,yyyy/MM/dd）
    $.fn.datebox.defaults.parser = function (s) {
    	if (s && s.length == 8) {
    		if(s.indexOf("-")>0){
    			var s3 = s.split("-");
    			if(s3.length==3){ 
        			 var d = new Date(s3[0],s3[1],s[2]);
        	         return d;
    			}
    		}
            var d = new Date(s.substr(0, 4) + "/" + s.substr(4, 2) + "/" + s.substr(6, 2));
            return d;
        } else if(s && s.length == 9){
        	if(s.indexOf("-")>0){
    			var s3 = s.split("-");
    			if(s3.length==3){ 
        			 var d = new Date(s3[0],s3[1],s[2]);
        	         return d;
    			}
    		}
        }else if (s && s.length == 10) {
            var d = new Date(s.substr(0, 4) + "/" + s.substr(5, 2) + "/" + s.substr(8, 2));
            return d;
        } else {
            return new Date();
            
        }
    };
    //setValue
    $.extend({}, $.fn.datebox.methods, {
        _setValue: $.fn.datebox.methods.setValue,
        setValue: function (jq, value) {
            var opts = $.data(jq[0], 'datebox').options;
            opts.formatter(opts.parser(value));	
            return this._setValue(jq, value);
        }
    });
    //默认加载设置值处理
    $.fn.datebox.parseOptions = function (target) {
        var t = $(target);
        var value = t.val();
        // value = $.fn.datebox.defaults.parser(value);  
        if(value==""){
        	if(t.data("defaultValue")==""){
        		return $.extend({}, $.fn.combo.parseOptions(target), { "value": "" });
        	}
        }
        if (value) { 
        	
        }else {
            value = new Date();
            value = $.fn.datebox.defaults.formatter(value);
        }
        
        if (t.is('.easyui-datetimebox')) {
        }
        else {
            return $.extend({}, $.fn.combo.parseOptions(target), { "value": value });
        }
    };
})(jQuery);


//将2010-01-01这种的转化为时间类型
function myparser(s) {
    var d = new Date(s.substr(0, 4) + "/" + s.substr(5, 2) + "/" + s.substr(8, 2));
    return d;
}
$.extend($.fn.validatebox.defaults.rules, {
    length: {//输入内容字节长度
        validator: function (value, param) {
        	value = trimStr(value); 
            var vLen = value.replace(/[^\x00-\xff]/g, "**").length;
            return (vLen >= param[0] && vLen <= param[1]);
        },
        message: '输入内容长度必须介于 {0}和{1} 位之间'
    },
    lengthMc: {//输入内容字节长度
        validator: function (value, param) {
        	value = trimStr(value); 
            var vLen = value.replace(/[^\x00-\xff]/g, "**").length;
            return (vLen >= param[0] && vLen <= param[1]);
        },
        message: '输入超长'
    },
    lengthAll: {//输入内容字节长度
        validator: function (value, param) { 
            var vLen = value.replace(/[^\x00-\xff]/g, "**").length;
            return (vLen >= param[0] && vLen <= param[1]);
        },
        message: '输入内容长度必须介于 {0}和{1} 位之间'
    },
    lengthDdh: {//输入内容字节长度,不包括逗号
        validator: function (value, param) {
            var vLen = value.replace(/,/g, "").length;
            return (vLen >= param[0] && vLen <= param[1]);
        },
        message: '输入内容长度必须介于 {0}和{1} 位之间'
    },
  //禁止输入小数
    noPoint:{
    	validator: function (value, param) {
        	var v = value.replace(/,/g, "");
            if(v.indexOf('.')> -1){
            	return false;
            }
            return true;
        },
        message: '不能输入小数'
    },
    //禁止输入负数
    noNegative:{
    	validator: function (value, param) {
        	var v = value.replace(/,/g, "");
        	if(v.indexOf('-')> -1){
            	return false;
            }
        	return true;
        },
        message: '不能输入负数'
    },
  //判断数字开头是否为0
    noZero: {//输入内容字节长度,带小数点
    	validator: function (value, param) {
        	var zsLen=0;
            var exp1 = /^0{2,}/g;
        	var exp2 = /^0/g;
        	var vqx=value.replace(/,/g, "");
        	if(exp1.test(vqx)){
            	return false;
            }
        	if(vqx.indexOf('.')> -1){//有小数位数
        		var v =vqx.split('.');
                zsLen=v[0].length;
                if(zsLen != 1){
                	if(exp2.test(v[0])){
                		return false;
                	}
                }
        	} else{                 //无小数位
        		zsLen=vqx.length;
        		if(vqx != 0){
        			if(exp2.test(vqx)){
        				return false;
        			}
        		}
        	} 
        	return true;
        },
        message: '输入的数字不能以0开头'
    },    
  //输入的内容不能以小数点开头
    noDot: {
    	validator: function (value, param) {
        	var zs;
        	var vqx=value.replace(/,/g, "");
        	if(vqx.indexOf('.')> -1){//有小数位数
        		var v =vqx.split('.');
                zs=v[0];
                if(zs == ''){
                	return false;
                }
        	} 
        	return true;
        },
        message: '输入的内容不能以小数点开头'
    },    
    //判断数字开头是否为0
    noZeroErr: {//输入内容字节长度,带小数点
    	validator: function (value, param) {
            var exp1 = /^0{2,}/g;
        	var exp2 = /^0/g;
        	var vqx=value.replace(/,/g, "");
        	if(vqx == 0){
            	return false;
            }

        	return true;
        },
        message: '输入的数字不能为0'
    },
  //限制长度，只输入整数
    lengthZs: {//输入内容字节长度,不包括逗号
        validator: function (value, param) {
        	var v = value.replace(/,/g, "");
            var vLen = v.length;
            return (vLen >= param[0] && vLen <= param[1]);
        },
        message: '请输入{0}到{1}位整数'
    },
    lengthPoint: {//输入内容字节长度,带小数点
        validator: function (value, param) {
        	var vqx=value.replace(/,/g, "");
            if(/^-/.test(vqx)){
            	vqx=vqx.replace(/^-/,'');
            }
            var v =vqx.split('.'),zsLen=v[0].length;
            if(v.length==2){//是否输入小数
                var xsLen=v[1].length;
                return (zsLen<=param[0]&&xsLen<=param[1]);	
            }else if(v.length==1){
            	return (zsLen<=param[0]);
            }
            
        },
        message: '整数最大{0}位，小数最大{1}位'
    },
    lengthDoublePoint: {//输入内容字节长度,带小数点
        validator: function (value, param) {
        	var vqx=value.replace(/\-|,/g, "");
            var v =vqx.split('.');
            var zsLen=v[0].length;
            if(v.length==2){//是否输入小数
                var xsLen=v[1].length;
                return (zsLen<=param[0]&&xsLen<=param[1]);	
            }else if(v.length==1){
            	return (zsLen<=param[0]);
            }
            
        },
        message: '整数最大{0}位，小数最大{1}位'
    },
    numberLength: {
        validator: function (value, param) {
            var reg = new RegExp("^[0-9]*$");
            if (!reg.test(value)) {
                return false;
            }
            return value.length == param[0];
        },
        message: '请输入 {0}个数字。'
    },

    number: {
        validator: function (value, param) {
            var reg = new RegExp("^[0-9]+$");
            return reg.test(value);
        },
        message: '{0}'
    },
    onlyNum: {
        validator: function (value, param) {
            var reg = new RegExp("^[0-9]+$");
            return reg.test(value);
        },
        message: '只能输入数字'
    },
    equals: {//两个值必须相同
        validator: function (value, param) {
            // .validatebox-invalid
            var ret = $("input[id='" + param[0] + "']").val() == value;
            if (ret) {

                $("input[id='" + param[0] + "']").removeClass("validatebox-invalid");


                var a = $("input[id='" + param[0] + "']").next().removeClass("textbox-invalid");
                $(a).find("input").removeClass("validatebox-invalid");
            }
            return ret;
        },
        message: '{1}'
    },

    //前后比较日期的
    datelessequals: {
        validator: function (value, param) {
            var v1 = $("input[id='" + param[0] + "']").combo('getText');

            var d1 = myparser(value);

            var d2 = myparser(v1);


            var ret = d2 >= d1;
            if (ret) {
                var a = $("input[id='" + param[0] + "']").next().get(0);
                $(a).removeClass('textbox-invalid');
                var b = $(a).find('input').get(0);
                $(b).removeClass('validatebox-invalid');
            }


            return ret;
        },
        message: "{1}"
    },


    //前后两个比较日期的
    dategreaterequals: {
        validator: function (value, param) {
            var v1 = $("input[id='" + param[0] + "']").combo('getText');

            var d1 = myparser(value);

            var d2 = myparser(v1);

            var ret = d2 <= d1;
            if (ret) {
                var a = $("input[id='" + param[0] + "']").next().get(0);
                $(a).removeClass('textbox-invalid');
                var b = $(a).find('input').get(0);
                $(b).removeClass('validatebox-invalid');
            }

            return ret;
        },
        message: "{1}"
    },





    mobile: {//手机号必须11位
        validator: function (value, param) {
            return value.length == 11;
        },
        message: '输入内容必须是11位手机号'
    },
    idno: {//身份证号，15位或18位
        validator: function (value, param) {
            return (value.length == 15 || value.length == 18);
        },
        message: '输入内容必须15位或18位的身份证号'
    }
    ,
    minmax: {//数值范围
        validator: function (value, param) {
            return (value >= param[0] && value <= param[1]);
        },
        message: '输入内容必须{0} ~{1}之间'
    },
    int: {//整型
        validator: function (value, param) {
            var re = /^\d+$/;
            return re.test(value);
        },
        message: '只能输入非负整数'
    },
    double: {//浮点
        validator: function (value, param) {
            var re = /^(-?\d+)(\.\d+)?$/;
            return re.test(value);
        },
        message: '输入只能是整数和小数'
    },

    feifudouble:
    {
        validator: function (value, param) {
            var re = /^(\d+)(\.\d+)?$/;
            return re.test(value);
        },
        message: '输入只能是非负数'
    },
    chName: {
        validator: function (value, param) {
            var re = /^[\u4E00-\uFA29]([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9]|[.,\\,,。,，,·])*$/;
            return re.test(value);
        },
        message: '输入的姓名格式不正确'
    },
    idno: {
        validator: function (value, param) {
            //var re = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/; 
            var re = /^[0-9]{17}[0-9,X]{1}$/;
            if (re.test(value)) {
                var v_card = value;
                var iW = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
                var iSum = 0;
                for (var i = 0; i < 17; i++) {
                    var iC = v_card.charAt(i);
                    var iVal = parseInt(iC);
                    iSum += iVal * iW[i];
                }
                var iJYM = iSum % 11;
                var sJYM = '';
                if (iJYM == 0) sJYM = "1";
                else if (iJYM == 1) sJYM = "0";
                else if (iJYM == 2) sJYM = "x";
                else if (iJYM == 3) sJYM = "9";
                else if (iJYM == 4) sJYM = "8";
                else if (iJYM == 5) sJYM = "7";
                else if (iJYM == 6) sJYM = "6";
                else if (iJYM == 7) sJYM = "5";
                else if (iJYM == 8) sJYM = "4";
                else if (iJYM == 9) sJYM = "3";
                else if (iJYM == 10) sJYM = "2";
                var cCheck = v_card.charAt(17).toLowerCase();
                if (cCheck != sJYM) {
                    return false; //对不上就是假号码 
                }
                return true;
            } else {
                return false;
            }
        },
        message: '输入的二代证号码格式不正确'
    },
    yyyyMMdd: {
        validator: function (value, param) {
            //验证不含20131212格式的字符串
            var re1 = /^(?:(?!0000)[0-9]{4}(?:(?:0[1-9]|1[0-2])(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])(?:29|30)|(?:0[13578]|1[02])31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)0229)$/;
            //验证不含2013-12-12格式的字符串
           // var re2 = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/;
            var re2 = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0[13578])([-\/\._])(3[01]|[12][0-9]|0[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0[469])([-\/\._])(30|[12][0-9]|0[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(02)([-\/\._])(2[0-8]|1[0-9]|0[1-9])$)|(^([2468][048]00)([-\/\._])(02)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(02)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(02)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(02)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(02)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(02)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(02)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(02)([-\/\._])(29)$))/;
            var v2 = re2.test(value);
            var v1 = re1.test(value);
            return v1|v2;
        },
        message: '请输入正确日期'
    },
    HHmmss: {
        validator: function (value, param) {
            var re = /^[02][0-3]:[0-5][0-9]:[0-5][0-9]|[01][0-9]:[0-5][0-9]:[0-5][0-9]$/;
            return re.test(value);
        },
        message: '请输入正确时间'
    },
    dataTime: {
    validator: function (value, param) {
    	var v =value.split(' ');
        //验证不含20131212格式的字符串
        var re1 = /^(?:(?!0000)[0-9]{4}(?:(?:0[1-9]|1[0-2])(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])(?:29|30)|(?:0[13578]|1[02])31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)0229)$/;
        //验证不含2013-12-12格式的字符串
       // var re2 = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/;
        var re2 = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0[13578])([-\/\._])(3[01]|[12][0-9]|0[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0[469])([-\/\._])(30|[12][0-9]|0[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(02)([-\/\._])(2[0-8]|1[0-9]|0[1-9])$)|(^([2468][048]00)([-\/\._])(02)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(02)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(02)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(02)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(02)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(02)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(02)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(02)([-\/\._])(29)$))/;
        var re3 = /^[02][0-3]:[0-5][0-9]:[0-5][0-9]|[01][0-9]:[0-5][0-9]:[0-5][0-9]$/;
        var v2 = re2.test(v[0]);
        var v1 = re1.test(v[0]);
        var v3 = re3.test(v[1]);
        return (v1|v2)&v3;
    },
    message: '请输入正确的时间（YYYY-MM-DD HH:MM:SS）'
},
    telnumber:{
    	 validator: function (value, param) {
    		 var re=/^\d(\d?-?){18}\d$/;
             return re.test(value);
         },
         message: '请输入正确的电话号码'
    },
    lxrLen:{
    	validator:function(value,param){
    		var vLen = value.replace(/[^\x00-\xff]/g, "**").length;            
    		return (vLen <= param[0]);  	
    	},
    	message:'输入内容长度不能超过 {0}位'
    },
    lxryz:{
    	validator:function(value,param){
    		//只能输入汉字和字符
        	var req=/^[0-9a-zA-z\u4e00-\u9fa5\s]+$/;
        	return req.test(value);
    	},
    	message:'输入内容不能含有特殊字符'
    },
    dmjy:{
    	validator:function(value,param){
    		//只能输入数字和字母
    		var req=/^[0-9a-zA-Z]+$/;
        	return req.test(value);
    	},
    	message:'输入内容只能是数字或字母'
    },
    mcms:{
    	validator:function(value,param){
    		//名称类校验
    		var req=/^[0-9a-zA-Z\u4e00-\u9fa5\()（）[\]【】{}\-_——\/\\<>《》''""“”‘’,，.。、!！?？;；:：]+$/;
        	return req.test(value);
    	},
    	message:'输入内容的格式不符合要求'
    },
    pointCheck:{
    	validator:function(value,param){
    		//只能输入数字和字母
    		var req=/^[0-9a-zA-Z\u4e00-\u9fa5\()（）[\]【】｛｝{}\-_——\/\\<>《》“”"",，.。、!！?？;；:：\r\n\ ]+$/;
        	return req.test(value);
    	},
    	message:'输入内容的格式不符合要求'
    },
    //带汉字字符长度的检查(可以输入汉字,字符，数字但是由于数据库里有长度控制,在页面控制不能超过某个值)
    lengthcheck:{
    	validator:function(value,param){
    		var req1 = /^[\u4e00-\u9fa5]+$/;
    		var req2=/^[0-9a-zA-Z()（）[\]【】｛｝{}《》“”"",，.。、!！?？;；:：]+$/;
    		var req=/^[0-9a-zA-Z\u4e00-\u9fa5\()（）[\]【】{}\-_——\/\\<>《》''""“”‘’,，.。、!！?？;；:：]+$/;
    		if(req.test(value) == false){
    			return false;
    		}else{
    				var totalLength = 0;
    	    		for(var i = 0;i < value.length;i++){
    	    			if(req1.test(value.substring(i,i+1)) == true){
    	    				totalLength += 2;
    	    			}else{
    	    				if(req2.test(value.substring(i,i+1)) == true){
    	    					totalLength +=1;
    	    				}
    	    			}
    	    		}
    	    		if(totalLength > param[1])
    	    			return false;
    	    		else
    	    			return true;
    			}
    	},
    	message:'输入内容的格式不符合要求'
    },
    //类别描述输入长度检测
    lbmsLengthCheck:{
    	validator:function(value,param){
    		var req1 = /^[\u4e00-\u9fa5]+$/;
    		var req2=/^[0-9a-zA-Z()（）[\]【】｛｝{}《》“”"",，.。、!！?？;；:：]+$/;
    				var totalLength = 0;
    	    		for(var i = 0;i < value.length;i++){
    	    			if(req1.test(value.substring(i,i+1)) == true){
    	    				totalLength += 2;
    	    			}else{
    	    				if(req2.test(value.substring(i,i+1)) == true){
    	    					totalLength +=1;
    	    				}
    	    			}
    	    		}
    	    		if(totalLength > param[1])
    	    			return false;
    	    		else
    	    			return true;
    	},
    	message:'输入超长'
    },
    fxryz:{
    	validator:function(value,param){
    		//只能输入数字和字母
    		var req=/^[0-9a-zA-Z\u4e00-\u9fa5]+$/;
        	return req.test(value);
    	},
    	message:'输入内容的格式不符合要求'
    }
    
});

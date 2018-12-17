/**
 * 李金强：用于申购端按钮的操作
 */

//首场缴款通知和簿记建档基本情况
function qqjktzorbjjd(zqfxbh,zbsxh,zjZbsxh,zbfs,zbjlzt,baseApp,flag){
	var param={};
	param.zqfxbh=zqfxbh;
	$.ajax({
		type: "POST",
		 url: baseApp+'/shenGouMod/queryZqzlInfo',
		data: param,
	dataType: 'JSON',
	 success: function(data,textStatus){
	    		  var qyzjbz = data.rows.qyzjbz;
	    		  if(flag=="1"){
	    			  jktz(zqfxbh,zbsxh,zbfs,zbjlzt,baseApp,qyzjbz);
	    		  }else if(flag=="2"){
	    			  bjjdjbqk(zqfxbh,zbsxh,zjZbsxh,zbfs,zbjlzt,baseApp,qyzjbz);
	    		  }
	   },
	   onLoadError : function() {
			$.messager.alert('提示', '查询失败!', 'error');
		}
	});
}

//首场交款通知
function jktz(zqfxbh,zbsxh,zbfs,zbjlzt,baseApp,qyzjbz){
	if(zbjlzt=="6"){
		$('#jktzWinSc').show();
	    $("#jktzWinSc").window("open");
	}else if(zbjlzt=="7"&&qyzjbz=="2"){
		$('#jktzWinSc').show();
	    $("#jktzWinSc").window("open");
	}else{
		jktzYY(zqfxbh,zbsxh,zbfs,baseApp,'11');
	}
}

//追加交款通知
function jktzZJ(){
    $('#jktzWinZJ').show();
    $("#jktzWinZJ").window("open");
}

//首场和追加缴款通知按要约
function jktzYY(zqfxbh,zbsxh,zbfs,baseApp,flag){
  $("#jktzWinSc").window("close");
  $("#jktzWinZJ").window("close");
  var _url = baseApp+"/jktz/toJktzJsp";
  var _urlParam = _url +"?zqfxbh="+zqfxbh+"&zbsxh="+zbsxh+"&zbfs="+zbfs+"&flag="+flag;
  window.location.href = _urlParam;
}

//首场和追加缴款通知按券种
function jktzQZ(zqfxbh,zbsxh,zbfs,baseApp,flag){
    $("#jktzWinSc").window("close");
    $("#jktzWinZJ").window("close");
    var _url = baseApp+"/jktz/toJktzJsp";
    var _urlParam = _url +"?zqfxbh="+zqfxbh+"&zbsxh="+zbsxh+"&zbfs="+zbfs+"&flag="+flag;
    window.location.href = _urlParam;
}


//首场簿记建档基本情况
function bjjdjbqk(zqfxbh,zbsxh,zjzbsxh,zbfs,zbjlzt,baseApp,qyzjbz){
	if(zbjlzt=="6"){
		$("#bjjdWinSC").show();
	    $("#bjjdWinSC").window("open");
	}else if(zbjlzt=="7"&&qyzjbz=="2"){
		$("#bjjdWinSC").show();
	    $("#bjjdWinSC").window("open");
	}else{
		bjjdYY(zqfxbh,zbsxh,zjzbsxh,zbfs,'0',baseApp);
	}
}

//追加簿记建档基本情况
function bjjdjbqkZJ(){
    $("#bjjdWinZJ").show();
    $("#bjjdWinZJ").window("open");
}

//首场和追加簿记建档基本情况按要约
function bjjdYY(zqfxbh,zbsxh,zjzbsxh,zbfs,order,baseApp){
    $("#bjjdWinSC").window("close");
    $("#bjjdWinZJ").window("close");
    var _url = "";
    if(order==='1'){
        _url = baseApp+"/SgBjjdInfo/bjjdinfozj";
    }else{
    	_url = baseApp+"/SgBjjdInfo/bjjdinfosc";
    }
    var _urlParam = _url +"?ZQFXBH="+zqfxbh+"&ZBSXH="+zbsxh+"&ZJZBSXH="+zjzbsxh+"&zbfs="+zbfs;
    window.location.href = _urlParam;
}

//首场和追加簿记建档基本情况按券种
function bjjdQZ(zqfxbh,zbsxh,zjzbsxh,zbfs,order,baseApp){
    $("#bjjdWinSC").window("close");
    $("#bjjdWinZJ").window("close");
    var _url = "";
    if(order==='1'){
    	_url = baseApp+"/SgBjjdInfo/bjjdinfozjall";
    }else{
    	_url = baseApp+"/SgBjjdInfo/bjjdinfoscall";
    }
    var _urlParam = _url +"?ZQFXBH="+zqfxbh+"&ZBSXH="+zbsxh+"&ZJZBSXH="+zjzbsxh+"&zbfs="+zbfs;
    window.location.href = _urlParam;
}


//最低有效承销额不足
function cxebz(zqfxbh,scZbsxh,zbfs,baseApp){
	var _url =baseApp + "/Zdcxebz/zdcxebz";
	var _urlParam = _url +"?zqfxbh="+zqfxbh+"&zbsxh="+scZbsxh;
  window.location.href = _urlParam;
}

//最低有效申购总额不足
function sgzebz(zqfxbh,scZbsxh,zbfs,baseApp){
	var _url =baseApp + "/Sgzebz/sgzebz";
    var _urlParam = _url +"?zqfxbh="+zqfxbh+"&zbsxh="+scZbsxh;
    window.location.href = _urlParam;
}

//首场承销额度统计
function cxedSum(zqfxbh,zbsxh,zbfs,baseApp){
  var _url = baseApp+"/cxedtj/cxedtjMain";
  var _urlParam = _url +"?ZQFXBH="+zqfxbh+"&ZBSXH="+zbsxh+"&ZBFS="+zbfs;
  window.location.href = _urlParam;
}

//追加承销额度统计
function cxedSumZJ(zqfxbh,zbsxh,zjzbsxh,zbfs,baseApp){
  var _url = baseApp+"/cxedtj/cxedtjMainZJ";
  var _urlParam = _url +"?ZQFXBH="+zqfxbh+"&ZJZBSXH="+zjzbsxh+"&ZBFS="+zbfs;
  window.location.href = _urlParam;
}

//债权托管申请
function zqtgsq(zqfxbh,zbsxh,zjZbsxh,zbfs,baseApp){
    var _url = baseApp+"/ShenGouZqtg/zqtgapply";
    var _urlParam = _url +"?ZQFXBH="+zqfxbh+"&ZBSXH="+zbsxh+"&ZJZBSXH="+zjZbsxh+"&ZBFS="+zbfs+"&applyflag=0";
    window.location.href = _urlParam;
}

//债权托管修改
function zqtgxg(zqfxbh,zbsxh,zjZbsxh,zbfs,baseApp){
    var _url = baseApp+"/ShenGouZqtg/zqtgmodify";
    var _urlParam = _url +"?ZQFXBH="+zqfxbh+"&ZBSXH="+zbsxh+"&ZJZBSXH="+zjZbsxh+"&ZBFS="+zbfs;
    window.location.href = _urlParam;
}

//债权托管撤销
function zqtgcx(zqfxbh,zbsxh,zjZbsxh,zbfs,baseApp){
//	$.messager.confirm('确认','您确认撤销托管吗？',function(r){
//	    if (r){    
	        var _url = baseApp+"/ShenGouZqtg/zqtgrevoke";
	        var _urlParam = _url +"?ZQFXBH="+zqfxbh+"&ZBSXH="+zbsxh+"&ZJZBSXH="+zjZbsxh+"&ZBFS="+zbfs;
	        window.location.href = _urlParam;
//	    }
//	});
}

//债权托管查询
function zqtgquery(zqfxbh,zbsxh,zjZbsxh,zbfs,baseApp){
    var _url = baseApp+"/ShenGouZqtg/zqtgquery";
    var _urlParam = _url +"?ZQFXBH="+zqfxbh+"&ZBSXH="+zbsxh+"&ZJZBSXH="+zjZbsxh+"&ZBFS="+zbfs;
    window.location.href = _urlParam;
}

//托管复核发送
function zqtgfh(zqfxbh,zbsxh,zjZbsxh,zbfs,baseApp){
    var _url = baseApp+"/ShenGouZqtg/zqtgchecksend";
    var _urlParam = _url +"?ZQFXBH="+zqfxbh+"&ZBSXH="+zbsxh+"&ZJZBSXH="+zjZbsxh+"&ZBFS="+zbfs+"&QqymFlag=main";
    window.location.href = _urlParam;
}

//跨市场交款通知
function KSCJkTongzhi(zqfxbh,zbsxh,zjZbsxh,zbfs,baseApp){
    var _url = baseApp+"/ShenGouZqtg/zqtgkscjktzs";
    var _urlParam = _url +"?ZQFXBH="+zqfxbh+"&ZBSXH="+zbsxh+"&ZJZBSXH="+zjZbsxh+"&ZBFS="+zbfs;
    window.location.href = _urlParam;
}

function sgMod(){
    $('#Tsview').window("move",{top:$(document).height()-200});
    $('#TsForm').form("reset");
    $('#Tsview').window("open");
}

function QrXxadd(){
    $('#QrXxview').window("move",{top:$(document).height()-200});
    $('#QrXxForm').form("reset");
    $('#QrXxview').window("open");
}
function QrXx(){
    $('#QrXxview').window("move",{top:$(document).height()-200});
    $('#QrXxForm').form("reset");
    $('#QrXxview').window("close");
}

function sgMod(){
    $('#Tsview').window("move",{top:$(document).height()-200});
    $('#TsForm').form("reset");
    $('#Tsview').window("open");
}

function Ts2(){
    $('#Ts2view').window("move",{top:$(document).height()-200});
    $('#Ts2Form').form("reset");
    $('#Ts2view').window("open");
}

// *********************** 首场申购 start*********************** 

function fenpeiBili(){
    $('#addFrom').form("reset"); 
	$('#FPBLaddView').window("open");  
	
}

function shengouMain(){
    parent.app.addTab('首场主页面','shengoumain',510,true,false);
    
}

function shengoucxFH(){
    parent.app.addTab('申购撤销复核','SG_CX_FH',5111,true,false);
    
}

function shengouzjcxFH(){
    parent.app.addTab('追加申购撤销复核','SG_ZJ_CX_FH',5113,true,false);
    
}

function tuoguancxFH(){
    parent.app.addTab('托管撤销复核','SG_ZQTG_CX_FH',5112,true,false);
    
}

function SCshengouxc(){
    parent.app.addTab('首场申购修改','shengouxc',511,true,false);
   /* parent.app.closeTabByTitle('首场簿记建档 '); */
}
function SCshengouMarginalPrice(){
    parent.app.addTab('边际调整','SG_Main_SC_marginalPriceAdjust',511,true,false);
   /* parent.app.closeTabByTitle('首场簿记建档 '); */
}

function SCshengou(){
	parent.app.addTab('首场申购','shengou',513,true,false);
	
	 $('#addFrom').form("reset"); 
	 $('#FPBLaddView').window("close"); 
/*	parent.app.closeTabByTitle('首场簿记建档'); */
}



function shengou(){
	parent.app.addTab('首场申购确认','shengouconfirm',514,true,false);
	parent.app.closeTabByTitle('分配 比例'); 
}

function backToshengou() {
	parent.app.addTab('首场申购','shengou',515,true,false);
	parent.app.closeTabByTitle('首场申购确认');
}

// 价位明细
function jiaweiMingxi(){
	parent.app.addTab('价位明细','SG_JWMX',516,true,false);
}

// 要约基本信息（首场）打印
function SCYYInfoPrintSc(){
	parent.app.addTab('要约基本信息（首场）打印','SG_SC_YYInfoPrintSc',517,true,false);
}

// *********************** 首场申购 end*********************** 



// 追加申购

function ZJshengou(){
	parent.app.addTab('追加申购','shengouzhuijia',521,true,false);
	/*parent.app.closeTabByTitle('当期追加'); */
}

function ZJshengouxc(){
	parent.app.addTab('当期追加修改','shengouzhuijiaxiuche',522,true,false);
	/*parent.app.closeTabByTitle('当期追加'); */
}
//function ZJshengouConfirm(){
//	//var row = $('#bondTable').datagrid('getSelected');
//	alert(0);
//	$('#zjsgconfirmWin').window('refresh', 'shengouzhuijiaconfirm');
//	$('#zjsgconfirmWin').window("open");
//};

//追加申购确认
function ZJshengouConfirm(){
	parent.app.addTab('追加申购确认','shengouzhuijiaconfirm',523,true,false);
}

// 返回追加申购
function backToshengouzhuijia() {
	parent.app.addTab('追加申购','shengouzhuijia',524,true,false);
	parent.app.closeTabByTitle('追加申购确认'); 		
}

// 要约基本信息（追加）打印
function ZJYYInfoPrint(){
	parent.app.addTab('要约基本信息（追加）打印','ZJ_YYInfoPrint',527,true,false);
}

// ********************追加申购end*********************** 

//********************债权托管start*********************** 

// 债权托管
function zqTuoguan(){
	parent.app.addTab('托管申请','SG_ZQTG',532,true,false);
	/*parent.app.closeTabByTitle('债券托管'); 	*/
}

// 债权托管修改
function TGxiugai(){
	parent.app.addTab('债权托管修改','SG_ZQTGxc',533,true,false);
}

//债权托管确认
function doAdd(){
	parent.app.addTab('债权托管确认','SG_ZQTG_Confirm',534,true,false);
}
//债权托管确认
function doEidt(){
	parent.app.addTab('债权托管确认','SG_ZQTG_Confirm',535,true,false);
}	


/*// 返回债权托管
function backToZQTG(){
	parent.app.addTab('债权托管','SG_ZQTG',534,true,false);
	parent.app.closeTabByTitle('债权托管确认'); 		
}*/

//********************债权托管end*********************** 

//********************申购结果查询start*********************** 

// 申购结果查询
function shengouResultQuery(){
	parent.app.addTab('申购结果查询','shengouResult',542,true,false);	
} 

//申购结果查询(首场)
/*function shengouResultQuerySc(){
	parent.parent.app.addTab('首场申购结果查询','shengouResultSc',542,true,false);	
}*/

//申购结果查询(追加)
function shengouResultQueryZj(){
	parent.parent.app.addTab('追加申购结果查询','shengouResultZj',542,true,false);	
}

//承销额度统计
function cxedSum(){
	parent.app.addTab('承销额度统计','cxedSum',543,true,false);
	parent.app.closeTabByTitle('配售缴款通知');
	parent.app.closeTabByTitle('跨市场缴款通知');	
	parent.app.closeTabByTitle('簿记建档基本情况'); 	
	parent.app.closeTabByTitle('债券托管信息'); 	
	parent.app.closeTabByTitle('申购明细打印'); 	
}
//首场承销额度统计
function cxedSumSc(){
	parent.parent.app.addTab('首场承销额度统计','cxedSumSc',543,true,false);
	parent.app.closeTabByTitle('配售缴款通知');
	parent.app.closeTabByTitle('跨市场缴款通知');	
	parent.app.closeTabByTitle('簿记建档基本情况'); 	
	parent.app.closeTabByTitle('债券托管信息'); 	
	parent.app.closeTabByTitle('申购明细打印'); 	
}
//追加承销额度统计
function cxedSumZj(){
	parent.parent.app.addTab('追加承销额度统计','cxedSumZj',543,true,false);
	parent.app.closeTabByTitle('配售缴款通知');
	parent.app.closeTabByTitle('跨市场缴款通知');	
	parent.app.closeTabByTitle('簿记建档基本情况'); 	
	parent.app.closeTabByTitle('债券托管信息'); 	
	parent.app.closeTabByTitle('申购明细打印'); 	
}


//配售缴款通知
function peishouJkTongzhi(){
	parent.app.addTab('配售缴款通知','peishouJkTongzhi',544,true,false);
	parent.app.closeTabByTitle('跨市场缴款通知');
	parent.app.closeTabByTitle('承销额度统计'); 	
	parent.app.closeTabByTitle('簿记建档基本情况'); 	
	parent.app.closeTabByTitle('债券托管信息'); 	
	parent.app.closeTabByTitle('申购明细打印'); 
}

//首场配售缴款通知
function peishouJkTongzhiSc(){
	parent.parent.app.addTab('首场配售缴款通知','peishouJkTongzhiSc',544,true,false);
	parent.app.closeTabByTitle('跨市场缴款通知');
	parent.app.closeTabByTitle('承销额度统计'); 	
	parent.app.closeTabByTitle('簿记建档基本情况'); 	
	parent.app.closeTabByTitle('债券托管信息'); 	
	parent.app.closeTabByTitle('申购明细打印'); 
}

//追加配售缴款通知
function peishouJkTongzhiZj(){
	parent.parent.app.addTab('追加配售缴款通知','peishouJkTongzhiZj',544,true,false);
	parent.app.closeTabByTitle('跨市场缴款通知');
	parent.app.closeTabByTitle('承销额度统计'); 	
	parent.app.closeTabByTitle('簿记建档基本情况'); 	
	parent.app.closeTabByTitle('债券托管信息'); 	
	parent.app.closeTabByTitle('申购明细打印'); 
}

//跨市场缴款通知
function KSCJkTongzhi(){
	parent.parent.app.addTab('跨市场缴款通知','KSCJkTongzhi',545,true,false);
	parent.app.closeTabByTitle('承销额度统计');
	parent.app.closeTabByTitle('配售缴款通知');
	parent.app.closeTabByTitle('簿记建档基本情况'); 	
	parent.app.closeTabByTitle('债券托管信息'); 	
	parent.app.closeTabByTitle('申购明细打印'); 
}

//簿记建档基本情况
function bjjdinfo(){
	parent.app.addTab('簿记建档基本情况','bjjdinfo',546,true,false);
	parent.app.closeTabByTitle('承销额度统计');
	parent.app.closeTabByTitle('配售缴款通知');
	parent.app.closeTabByTitle('跨市场缴款通知'); 	
	parent.app.closeTabByTitle('债券托管信息'); 	
	parent.app.closeTabByTitle('申购明细打印'); 
}
//债券托管信息
function zqtgxx(){
	parent.parent.app.addTab('债券托管信息','zqtgxx',547,true,false);
	parent.parent.app.closeTabByTitle('承销额度统计');
	parent.parent.app.closeTabByTitle('配售缴款通知');
	parent.parent.app.closeTabByTitle('跨市场缴款通知'); 	
	parent.parent.app.closeTabByTitle('簿记建档基本情况'); 	
	parent.parent.app.closeTabByTitle('申购明细打印');
}

//申购明细打印
function sgmxprint(){
	parent.app.addTab('申购明细打印','sgmxprint',548,true,false);
	parent.app.closeTabByTitle('承销额度统计');
	parent.app.closeTabByTitle('配售缴款通知');
	parent.app.closeTabByTitle('跨市场缴款通知');
	parent.app.closeTabByTitle('簿记建档基本情况'); 	
	parent.app.closeTabByTitle('债券托管信息');
}

//首场申购明细打印
function sgmxscprint(){
	parent.parent.app.addTab('首场申购明细打印','sgmxprintsc',548,true,false);
	parent.app.closeTabByTitle('承销额度统计');
	parent.app.closeTabByTitle('配售缴款通知');
	parent.app.closeTabByTitle('跨市场缴款通知');
	parent.app.closeTabByTitle('簿记建档基本情况'); 	
	parent.app.closeTabByTitle('债券托管信息');
}

//追加申购明细打印
function sgmxzjprint(){
	parent.app.addTab('追加申购明细打印','sgmxprintzj',548,true,false);
	parent.app.closeTabByTitle('承销额度统计');
	parent.app.closeTabByTitle('配售缴款通知');
	parent.app.closeTabByTitle('跨市场缴款通知');
	parent.app.closeTabByTitle('簿记建档基本情况'); 	
	parent.app.closeTabByTitle('债券托管信息');
}

//承销额度统计打印
function cxedSumPrint(){
	parent.app.addTab('承销额度统计打印','cxedSumPrint',550,true,false);
}
//配售缴款打印
function peishouJkPrint(){
	parent.app.addTab('配售缴款打印','peishouJkPrint',551,true,false);
}

//跨市场缴款打印
function KSCJkPrint(){
	parent.app.addTab('跨市场缴款打印','KSCJkTongzhiPrint',552,true,false);
}

//簿记建档基本情况打印
function bjjdinfoPrint(){
	parent.app.addTab('簿记建档基本情况打印','bjjdinfoprint',553,true,false);
}
//首场簿记建档基本情况打印
function bjjdinfoPrintsc(){
	parent.app.addTab('首场簿记建档基本情况打印','bjjdinfoprintSc',553,true,false);
}
//追加簿记建档基本情况打印
function bjjdinfoPrintzj(){
	parent.app.addTab('追加簿记建档基本情况打印','bjjdinfoprintZj',553,true,false);
}

//债券托管信息打印
function zqtgxxprint(){
	parent.app.addTab('债券托管信息打印','zqtgxxprint',554,true,false);
}


//********************申购结果查询end*********************** 


// 申购要约信息（首场）
function SGInfo(){
	 $('#yaoyueinfoWin').window('refresh', 'SG_SC_YYInfo');
	 $('#yaoyueinfoWin').window("open");
};	


// 申购要约信息（追加）
 function ZJSGInfo(){
		 $('#yaoyueinfoWin').window('refresh', 'SG_ZJ_YYInfo');
		 $('#yaoyueinfoWin').window("open");
	 };


// 复核
function FH(){
/*
	$('#addFrom').form("reset");
	$('#FHView').window("open"); */

	var obj = {
				commitAfterFhView:function(){
					//复核成功后操作  alert(2);
				}
			};
			parent.app.showFhView(obj);
};

// 申购发送成功
function SGOKAdd(){
		$('#addFrom').form("reset");
		$('#FHView').window("close"); 
		$('#SGOKaddView').window("open");  
	};
	//申购明细打印(首场)
	function sgmxprintsc(){
		parent.app.addTab('首场申购明细打印','sgmxprintsc',548,true,false);
		parent.app.closeTabByTitle('承销额度统计');
		parent.app.closeTabByTitle('配售缴款通知');
		parent.app.closeTabByTitle('跨市场缴款通知');
		parent.app.closeTabByTitle('簿记建档基本情况'); 	
		parent.app.closeTabByTitle('债券托管信息');
	}

	//申购明细打印(追加)
	function sgmxprintsc(){
		parent.app.addTab('追加申购明细打印','sgmxprintzj',548,true,false);
		parent.app.closeTabByTitle('承销额度统计');
		parent.app.closeTabByTitle('配售缴款通知');
		parent.app.closeTabByTitle('跨市场缴款通知');
		parent.app.closeTabByTitle('簿记建档基本情况'); 	
		parent.app.closeTabByTitle('债券托管信息');
	}

	//首场承销额度统计打印
	function cxedSumPrintsc(){
		parent.app.addTab('首场承销额度统计打印','cxedSumPrintsc',550,true,false);
	}
	//追加承销额度统计打印
	function cxedSumPrintzj(){
		parent.app.addTab('追加承销额度统计打印','cxedSumPrintzj',550,true,false);
	}
	//首场配售缴款打印
	function peishouJkPrintsc(){
		parent.app.addTab('首场配售缴款打印','peishouJkPrintsc',551,true,false);
	}
	//追加配售缴款打印
	function peishouJkPrintzj(){
		parent.app.addTab('追加配售缴款打印','peishouJkPrintzj',551,true,false);
	}
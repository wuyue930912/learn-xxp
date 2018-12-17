//禁用tab键
document.onkeydown=banTab;
function banTab(e){
		var isie = (document.all)?true:false;
		var key;
		if(isie){
			key = window.event.keyCode;
		}else{
			key = e.which;
		}
		if(key == 9){
			return false;
		}
}
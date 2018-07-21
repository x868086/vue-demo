//vesion

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); // 匹配目标参数
	if (r != null)
		return unescape(r[2]);
	return null; // 返回参数值
}


$(document).ajaxComplete(onComplete);
function onComplete(event, XHR, settings) {
	var sessionstatus = XHR.getResponseHeader("sessionstatus");
	if ("timeout" == sessionstatus) {
		alert("您的登陆状态有问题，请重新登陆！");
		window.location = "/";
	}
}

var userinfo = null;
var imgpathIP = "http://wozs.bftel.org.cn:44440/";

// 显示套餐推荐图标
function showKF() {
//	getUserinfo();
	$("#pdico").hide();
//	if (userinfo != null) {
//		if (userinfo.hi.managerid == "111" || userinfo.pdflag=='k') {
			$("#pdico").show();
			$(".Botbox_menu").width("20%");
//		}
//	}
}

function getUserinfo() {
	$.ajax({
		url : "/userLogin.do?method=getUserInfo",
		data : {},
		dataType : 'json',
		type : "post",
		async : false,
		success : function(data) {
			if (data != null)
				userinfo = data;
		},
	});
}

function loginOut() {
	var storage = window.localStorage;
	storage["password"] = "";
	storage["isstorePwd"] = "no";
	
	setCookie('password', "",999);
	setCookie('isstorePwd', "no",999);
	window.location = "/";
}



//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    //alert(expires);
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

//清除cookie  
function clearCookie(name) {  
    setCookie(name, "", -1);  
} 
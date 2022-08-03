// 判断浏览器类型以及ie版本
// 唯一缺点就是 IE7与IE5不分,但是IE6以下的判别已经不重要了
function BrowserType() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
	var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器 
	// var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器 
	var isIE = window.ActiveXObject || "ActiveXObject" in window
	// var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器 
	var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
	var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器 
	var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器 
	var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1 && !isEdge; //判断Chrome浏览器 

	if (isIE) {
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
		if (userAgent.indexOf('MSIE 6.0') != -1) {
			return "6";
		} else if (fIEVersion == 7) {
			return "7";
		} else if (fIEVersion == 8) {
			return "8";
		} else if (fIEVersion == 9) {
			return "9";
		} else if (fIEVersion == 10) {
			return "10";
		} else if (userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)) {
			return "11";
		} else {
			return "0"
		} //IE版本过低
	} //isIE end 

	if (isFF) {
		return "21";
	}
	if (isOpera) {
		return "22";
	}
	if (isSafari) {
		return "23";
	}
	if (isChrome) {
		return "24";
	}
	if (isEdge) {
		return "25";
	}
} //myBrowser() end 


if (BrowserType() <= 9) {
	window.location.href="Oh-no.html";
}

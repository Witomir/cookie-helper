/**
 * Thx stackoverflow 
 */
function getCookie(name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
}
var cookie  = getCookie('iPlanetDirectoryPro');
if(cookie !== undefined){
	window.prompt("Authorisation","Bearer " + getCookie('iPlanetDirectoryPro'));
}
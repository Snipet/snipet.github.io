//Onload for article player
function loadPlayer(){
	$("#nav").load("/co/responsive/nav.html");
	var url = new URL(location.href);
	var path = url.searchParams.get("p");
	var a = url.searchParams.get("a");
	$("#article").load(path + ".html");
}
//function for index
function loadIndex(){
	$("#nav").load("/co/responsive/nav.html");
}

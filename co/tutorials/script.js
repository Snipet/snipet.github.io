//Onload for article player
function loadPlayer(){
	$("#nav").load("/co/responsive/nav.html");
	var url = new URL(location.href);
	var path = url.searchParams.get("p");
	var a = url.searchParams.get("a");
	$("#article").load(path + ".html #" + a);
}
//function for index
function load-i(){
	$("#nav").load("/co/responsive/nav.html");
}

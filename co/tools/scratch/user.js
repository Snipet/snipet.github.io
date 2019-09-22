function get(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://cors-anywhere.herokuapp.com/" + url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function downloadimg() {
    var user = document.getElementById('username').value;
    var size = document.getElementById('size').value;
    var file = imglink(size, user);
    var result = document.getElementById('result');
    result.src = file;
    result.style.visibility = "visible";
}
function imglink(size, user){
    var userobj = JSON.parse(get("https://api.scratch.mit.edu/users/" + user));
    return "https://cdn2.scratch.mit.edu/get_image/user/" + userobj.id + "_" + size + "x" + size + ".png";}

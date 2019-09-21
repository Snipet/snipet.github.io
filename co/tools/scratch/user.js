//variables
var user = window.location.hash.substr(1);
userJson = get("https://api.scratch.mit.edu/users/" + user);
document.getElementById('pic');
document.title = user;

function get(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + "https://cors-anywhere.herokuapp.com/", false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


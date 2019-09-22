function get(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://cors-anywhere.herokuapp.com/" + url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function load() {
    var user = window.location.hash.substr(1);
    userJson = JSON.parse(get("https://api.scratch.mit.edu/users/" + user));
    pic = document.getElementById('pfp');
    document.title = user;
    pic.src = "https://cdn2.scratch.mit.edu/get_image/user/" + userJson.id + "_120x120.png";
}

function get(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://cors-anywhere.herokuapp.com/" + url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function downloadimg() {
    user = document.getElementById('username').value;
    size = document.getElementById('size').value;
    download = document.getElementById('downloader');
    download.href = imglink(size, user);
    download.download = user + size;
}
function imglink(size, user){
    var userobj = JSON.parse(get("https://api.scratch.mit.edu/users/" + user));
    return "https://cdn2.scratch.mit.edu/get_image/user/" + userobj.id + "_" + size + "x" + size + ".png";}

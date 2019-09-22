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
    download = document.getElementById('downloader')
    download.src = "userimage.html?user=" + user + "&size=" + size;
}

function goto(){
  location.href = "search.html?q=" + document.getElementById('term').value;
}

function get(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://cors-anywhere.herokuapp.com/" + url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function search() {
  var url = new URL(location.href);
  var term = url.searchParams.get("q");
  
}

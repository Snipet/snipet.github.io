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
function getl(containerID, childID) {
    var elm = {};
    var elms = document.getElementById(containerID).getElementsByTagName("*");
    for (var i = 0; i < elms.length; i++) {
        if (elms[i].id === childID) {
            elm = elms[i];
            break;
        }
    }
    return elm;
}

function search() {
  var url = new URL(location.href);
  var term = url.searchParams.get("q");
  if (isNaN(term)){
    console.log("term is not a number");
}

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
}
function add(title, img, d){
  var a = document.createElement("h3")                // Create a <h1> element
  var b = document.createTextNode(title);     // Create a text node
  a.appendChild(b); 
  var c = document.createElement("img")                // Create a <h1> element
  c.src = img;
  var d = document.createElement("p")                // Create a <h1> element
  var e = document.createTextNode(d);     // Create a text node
  d.appendChild(e)
  var f = document.createElement("div")
  f.appendChild(a)
  f.appendChild(d)
  f.appendChild(f)
  document.body.appendChild(f)
}

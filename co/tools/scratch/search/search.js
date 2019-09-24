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
    r = JSON.parse(get("https://api.scratch.mit.edu/users/" + term));
    if (r.code != "NotFound"){
      add(term, "https://cdn2.scratch.mit.edu/get_image/user/" + r.id + "_400x400.png", r.profile.bio, "user");
      obj = JSON.parse(get("https://api.scratch.mit.edu/search/projects?q=" + term + "&limit=8"));
      for (i in obj){
        var project = obj[i];
        add(project.title, "https://cdn2.scratch.mit.edu/get_image/project/" + project.id + "_400x400.png", project.instructions, "user");
      }
      }else{
      alert("No Results");
      }
  }
}
function add(title, img, desc, type){
  var a = document.createElement("h3")
  var b = document.createTextNode(title);
  a.appendChild(b);
  var c = document.createElement("img")
  c.src = img;
  if(type == "user"){
    c.style = "width:100px;height:100px;";
  }
  var d = document.createElement("p")
  var e = document.createTextNode(desc);
  d.appendChild(e)
  var f = document.createElement("div")
  f.appendChild(a)
  f.appendChild(c)
  f.appendChild(d)
  document.body.appendChild(f)
}

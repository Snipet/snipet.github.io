function goto(){
  var ifr = document.getElementById('results')
  ifr.src = "search.html?q=" + document.getElementById('term').value;
  ifr.style.height = ifr.contentWindow.document.body.scrollHeight + 'px';
  
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

// Old search method; needs revised
function oldSearch() {
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
// New search algorithm
function search(){
  //Assign Vars
  var url = new URL(location.href);
  var term = url.searchParams.get("q");
  var type = "";
  
  //Determine Type
  if (isNaN(term)) {
    if(ws(term)){
      type = "search";
    }else{
      type = "username";
    }
  }
  
  //get data from api
  if (type == "username" || type == "search"){
    var sObj = JSON.parse(get("https://api.scratch.mit.edu/search/projects?q=" + term + "&limit=20"));
    var uObj = JSON.parse(get("https://api.scratch.mit.edu/users/" + term));
  }

  //Display data
  if (type == "username"){
    add(term, "https://cdn2.scratch.mit.edu/get_image/user/" + uObj.id + "_400x400.png", uObj.profile.bio, "user", "https://scratch.mit.edu/users/" + term);
  }
  if (sObj != null){
    for (i in sObj){
      var project = sObj[i];
      add(project.title, "https://cdn2.scratch.mit.edu/get_image/project/" + project.id + "_400x400.png", project.instructions, "project", "https://scratch.mit.edu/projects/" + project.id);
      }
  }
}




function add(title, img, desc, type, link){
  var a = document.createElement("h3");
  var b = document.createTextNode(title);
  a.appendChild(b);
  var c = document.createElement("img");
  c.src = img;
  var d = document.createElement("p");
  var e = document.createTextNode(desc);
  d.appendChild(e)
  var f = document.createElement("div");
  f.onclick = function() {window.location.href = link;};
  if(type == "user"){
    c.style = "width:100px;height:100px;";
  }
  if (type == "project") {
    c.style = "width:240px;height:180px;";
    f.style = "border-color:#f7891b;";
  }
  f.appendChild(a);
  f.appendChild(c);
  f.appendChild(d);
  document.body.appendChild(f);
}
function ws(s) {
  return s.indexOf(' ') >= 0;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


function load() {
  var id = getUrlVars()["id"];
  document.getElementById('player').scr = "https://scratch.mit.edu/projects/" + id + "embedded";
}

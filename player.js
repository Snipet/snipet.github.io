function load() {
  var id = getUrlVars()["id"];
  document.getElementById('player').scr = "https://scratch.mit.edu/projects/" + id + "embedded";
}

//variables
var user = window.location.hash.substr(1);
userJson = get("https://api.scratch.mit.edu/users/" + user);
document.getElementById('pic');
document.title = user;

function get(url) {
    fetch("https://cors-anywhere.herokuapp.com/" + url)
    .then(response => response.text())
    .then(contents => return contents)
    .catch(() => console.log("Can’t access " + url + " response."))
}


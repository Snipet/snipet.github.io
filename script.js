function load(){
    if (window.location == "https://snipet.github.io/index.html") {
        window.location = "https://snipet.github.io";
    }else{
        $("#area").load("responsive/navhead.html");
        $("#projects-list").load("responsive/projects.html");
    }
    
}

function get(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://cors-anywhere.herokuapp.com/" + url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function loadAbout(){
    var obj = JSON.parse(get("https://api.scratch.mit.edu/users/-Snipet-"));
    document.getElementById('about').innerHTML = obj.bio;
}

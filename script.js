function load(){
    if (window.location == "https://snipet.github.io/index.html") {
        document.getElementsByTagName('title').innerHTML = "Redirecting...";
        window.location = "https://snipet.github.io";
    }
}

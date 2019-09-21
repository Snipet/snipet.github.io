
function load(){
    if (window.location == "https://snipet.github.io/index.html") {
        window.location = "https://snipet.github.io";
    }else{
        $("#area").load("/co/responsive/nav.html");
    }
    
}

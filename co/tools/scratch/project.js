function get(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://cors-anywhere.herokuapp.com/" + url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function downloadimg() {
    var size = Number(document.getElementById('size').value);
    if (Number.isInteger(size) == true) {
        var search = document.getElementById('search');
        search.innerHTML = "Loading...";
        var id = document.getElementById('id').value;
        var file = imglink(size, id);
        var result = document.getElementById('result');
        result.src = file;
        result.style.visibility = "visible";
        search.innerHTML = "Search!";
    }else{
        alert("Please enter a valid size");
    }
}
function imglink(size, id){
    return "https://cdn2.scratch.mit.edu/get_image/project/" + id + "_" + size + "x" + size + ".png";}
